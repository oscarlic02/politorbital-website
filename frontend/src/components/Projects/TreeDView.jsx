import { useRef, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Box, Spinner, Text, Button, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * ThreeDView component renders a 3D model using Three.js and GLTFLoader.
 * It initializes a Three.js scene, camera, renderer, and controls, and loads a 3D model from the provided modelPath.
 * The component also handles window resizing and provides loading and error states.
 * The user can interact with the 3D model using orbit controls to rotate and zoom.
 *
 * @author Licciardi Oscar (Modified to fix DOM removal errors)
 * @component
 * @param {Object} props - Component props
 * @param {string} props.modelPath - The path to the 3D model file to be loaded
 * @param {Function} [props.onError] - Optional callback function that is called when an error occurs
 * @param {Function} [props.onLoad] - Optional callback function that is called when model loads successfully
 * @returns {JSX.Element} The rendered component
 */

const ThreeDView = ({ modelPath, onError, onLoad }) => {
  const [modelLoading, setModelLoading] = useState(false);
  const [modelError, setModelError] = useState(null);
  const [errorDetails, setErrorDetails] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadAttempts, setLoadAttempts] = useState(0);
  const [threeJSInitialized, setThreeJSInitialized] = useState(false);
  const threeContainerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const animationFrameRef = useRef(null);
  const resizeListenerRef = useRef(null);
  const maxRetryAttempts = 3;

  const initThreeJS = useCallback(() => {
    if (!threeContainerRef.current) return null;

    try {
      // Safely remove existing renderer if present
      if (rendererRef.current && rendererRef.current.domElement) {
        try {
          if (threeContainerRef.current.contains(rendererRef.current.domElement)) {
            threeContainerRef.current.removeChild(rendererRef.current.domElement);
          }
          rendererRef.current.dispose();
        } catch (e) {
          console.warn("Error cleaning up previous renderer:", e);
        }
      }

      const width = threeContainerRef.current.clientWidth;
      const height = threeContainerRef.current.clientHeight;

      // Create scene
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a1929);
      sceneRef.current = scene;

      // Create camera
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0, 20);
      cameraRef.current = camera;

      // Create renderer
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        powerPreference: "high-performance" 
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      
      // Safely append the renderer
      try {
        threeContainerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;
      } catch (e) {
        console.error("Error appending renderer to container:", e);
        renderer.dispose();
        throw new Error("Failed to append renderer to DOM");
      }

      // Add orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controlsRef.current = controls;

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const backLight = new THREE.DirectionalLight(0xffffff, 0.5);
      backLight.position.set(-5, 5, -5);
      scene.add(backLight);

      // Animation loop - store reference for cleanup
      const animate = () => {
        animationFrameRef.current = requestAnimationFrame(animate);
        if (controlsRef.current) controlsRef.current.update();
        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
      };

      animate();

      // Window resize handler
      const handleResize = () => {
        if (!threeContainerRef.current || !cameraRef.current || !rendererRef.current) return;

        const width = threeContainerRef.current.clientWidth;
        const height = threeContainerRef.current.clientHeight;

        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      };

      window.addEventListener("resize", handleResize);
      resizeListenerRef.current = handleResize;

      setThreeJSInitialized(true);
      return true;
    } catch (error) {
      console.error("Error initializing ThreeJS:", error);
      setModelError("Failed to initialize 3D viewer");
      setErrorDetails(error.message || "Unknown error during initialization");
      if (onError) onError({ type: "initialization", message: error.message });
      setThreeJSInitialized(false);
      return false;
    }
  }, [onError]);

  const checkWebGLSupport = useCallback(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      
      if (!gl) {
        throw new Error("WebGL not supported by your browser");
      }
      
      return true;
    } catch (error) {
      console.error("WebGL support check failed:", error);
      setModelError("WebGL not supported");
      setErrorDetails("Your browser or device doesn't support WebGL, which is required to display 3D models.");
      if (onError) onError({ type: "webgl", message: error.message });
      return false;
    }
  }, [onError]);

  const loadModel = useCallback(() => {
    if (!sceneRef.current || !threeJSInitialized) {
      setModelError("3D renderer not initialized");
      setErrorDetails("Please try refreshing the page");
      return;
    }
    
    if (!modelPath) {
      setModelError("No model path provided");
      setErrorDetails("A valid path to a 3D model file is required");
      if (onError) onError({ type: "parameter", message: "No model path provided" });
      return;
    }

    setModelLoading(true);
    setModelError(null);
    setErrorDetails(null);
    setLoadingProgress(0);
    setLoadAttempts(prev => prev + 1);

    // Clear any existing models from the scene
    try {
      if (sceneRef.current.children.length > 3) { // Keep the 3 lights
        const childrenToRemove = [];
        sceneRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh || child instanceof THREE.Group) {
            if (!(child instanceof THREE.Light)) {
              childrenToRemove.push(child);
            }
          }
        });
        
        childrenToRemove.forEach(child => {
          try {
            sceneRef.current.remove(child);
          } catch (e) {
            console.warn("Error removing child from scene:", e);
          }
        });
      }
    } catch (e) {
      console.warn("Error clearing scene:", e);
    }

    const loader = new GLTFLoader();

    // Set up timeout for detecting hanging loads
    const loadTimeout = setTimeout(() => {
      if (modelLoading) {
        setModelError("Model loading timeout");
        setErrorDetails("The 3D model took too long to load. It might be too large or the server might be unresponsive.");
        setModelLoading(false);
        if (onError) onError({ type: "timeout", message: "Model loading timed out" });
      }
    }, 60000); // 60 second timeout

    loader.load(
      modelPath,
      (gltf) => {
        clearTimeout(loadTimeout);
        
        try {
          // Check if the gltf contains valid meshes
          let hasMeshes = false;
          gltf.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              hasMeshes = true;
            }
          });

          if (!hasMeshes) {
            throw new Error("Model contains no valid meshes");
          }

          const box = new THREE.Box3().setFromObject(gltf.scene);
          if (box.isEmpty()) {
            throw new Error("Model has invalid dimensions");
          }

          const center = box.getCenter(new THREE.Vector3());
          gltf.scene.position.x = -center.x;
          gltf.scene.position.y = -center.y;
          gltf.scene.position.z = -center.z;

          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim === 0 || !isFinite(maxDim)) {
            throw new Error("Model has zero or invalid dimensions");
          }

          const scale = 10 / maxDim;
          gltf.scene.scale.set(scale, scale, scale);

          if (sceneRef.current) {
            sceneRef.current.add(gltf.scene);
          } else {
            throw new Error("Scene no longer available");
          }
          
          setModelLoading(false);
          setLoadAttempts(0); // Reset attempts on success

          if (cameraRef.current && controlsRef.current) {
            cameraRef.current.position.set(0, 0, 20);
            controlsRef.current.target.set(0, 0, 0);
            controlsRef.current.update();
          }
          
          if (onLoad) onLoad(gltf);
        } catch (error) {
          console.error("Error processing loaded model:", error);
          setModelError("Failed to process 3D model");
          setErrorDetails(error.message || "The model loaded but couldn't be properly processed");
          setModelLoading(false);
          if (onError) onError({ type: "processing", message: error.message });
        }
      },
      (xhr) => {
        // Loading progress
        if (xhr.lengthComputable) {
          const progress = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadingProgress(progress);
          console.log(progress + "% loaded");
        }
      },
      (error) => {
        clearTimeout(loadTimeout);
        console.error("An error happened when loading the 3D model:", error);
        
        let errorMsg = "Failed to load 3D model.";
        let detailsMsg = error.message || "Unknown error during model loading";
        
        // More specific error messages based on common GLTF loading issues
        if (error.message && error.message.includes("Unexpected token")) {
          detailsMsg = "The model file appears to be corrupted or in an invalid format.";
        } else if (error.message && error.message.includes("404")) {
          detailsMsg = "The model file could not be found at the specified path.";
        } else if (error.message && error.message.includes("Cross-Origin")) {
          detailsMsg = "Cross-origin request blocked. The model might be hosted on a different domain.";
        } else if (error.message && error.message.includes("memory") || error.message && error.message.includes("Invalid typed array length")) {
          detailsMsg = "Not enough memory to load this model. Try a smaller or optimized version.";
        }
        
        setModelError(errorMsg);
        setErrorDetails(detailsMsg);
        setModelLoading(false);
        
        if (onError) onError({ 
          type: "loading", 
          message: error.message,
          statusCode: error.status || null
        });
      }
    );

    return () => clearTimeout(loadTimeout);
  }, [modelPath, modelLoading, onError, onLoad, threeJSInitialized]);

  const retryLoading = useCallback(() => {
    if (loadAttempts < maxRetryAttempts) {
      // If ThreeJS isn't initialized, try reinitializing it first
      if (!threeJSInitialized) {
        const success = initThreeJS();
        if (success) {
          loadModel();
        }
      } else {
        loadModel();
      }
    } else {
      setModelError("Maximum retry attempts reached");
      setErrorDetails("The model failed to load after multiple attempts. Please check the model path or file integrity.");
      if (onError) onError({ type: "maxRetries", message: "Maximum retry attempts reached" });
    }
  }, [loadModel, loadAttempts, maxRetryAttempts, onError, threeJSInitialized, initThreeJS]);

  const cleanupThreeJS = useCallback(() => {
    // Cancel any pending animation frames
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    // Remove resize listener
    if (resizeListenerRef.current) {
      window.removeEventListener("resize", resizeListenerRef.current);
      resizeListenerRef.current = null;
    }
    
    // Dispose of renderer
    if (rendererRef.current) {
      try {
        rendererRef.current.dispose();
        
        // Safely remove renderer from DOM only if it's a child of the container
        if (threeContainerRef.current && rendererRef.current.domElement) {
          if (threeContainerRef.current.contains(rendererRef.current.domElement)) {
            threeContainerRef.current.removeChild(rendererRef.current.domElement);
          }
        }
      } catch (e) {
        console.warn("Error during renderer cleanup:", e);
      }
      rendererRef.current = null;
    }
    
    // Dispose of scene resources
    if (sceneRef.current) {
      try {
        // Properly dispose of all scene resources
        sceneRef.current.traverse((object) => {
          if (!object) return;
          
          try {
            if (object.geometry) {
              object.geometry.dispose();
            }
            
            if (object.material) {
              if (Array.isArray(object.material)) {
                object.material.forEach(material => {
                  if (material) material.dispose();
                });
              } else {
                object.material.dispose();
              }
            }
            
            if (object.texture) {
              object.texture.dispose();
            }
          } catch (e) {
            console.warn("Error disposing object resources:", e);
          }
        });
        
        sceneRef.current.clear();
      } catch (e) {
        console.warn("Error during scene cleanup:", e);
      }
      sceneRef.current = null;
    }
    
    // Dispose of controls
    if (controlsRef.current) {
      try {
        controlsRef.current.dispose();
      } catch (e) {
        console.warn("Error disposing controls:", e);
      }
      controlsRef.current = null;
    }
    
    cameraRef.current = null;
    setThreeJSInitialized(false);
  }, []);

  useEffect(() => {
    let isMounted = true;
    
    const initialize = async () => {
      if (!checkWebGLSupport()) return;
      
      const success = initThreeJS();
      
      if (isMounted && success) {
        loadModel();
      }
    };
    
    initialize();
    
    return () => {
      isMounted = false;
      cleanupThreeJS();
    };
  }, []);

  return (
    <Box
      height="400px"
      bg="gray.800"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="md"
      position="relative"
      ref={threeContainerRef}
    >
      {modelLoading && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          zIndex="10"
        >
          <Spinner color="blue.300" size="xl" thickness="4px" />
          <Text color="gray.300" mt={2}>
            Loading 3D Model{loadingProgress > 0 ? ` (${loadingProgress}%)` : '...'}
          </Text>
        </Box>
      )}

      {modelError && (
        <Box 
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          maxWidth="80%"
          zIndex="10"
        >
          <Alert 
            status="error"
            variant="solid"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            borderRadius="md"
            py={4}
          >
            <AlertIcon boxSize="24px" mr={0} />
            <AlertTitle mt={2} mb={1} fontSize="lg">
              {modelError}
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              {errorDetails}
            </AlertDescription>
          </Alert>
          
          {loadAttempts < maxRetryAttempts && (
            <Button 
              mt={4} 
              colorScheme="blue" 
              size="sm" 
              onClick={retryLoading}
              leftIcon={<span>🔄</span>}
            >
              Try Again ({loadAttempts}/{maxRetryAttempts})
            </Button>
          )}
          
          {loadAttempts >= maxRetryAttempts && (
            <Text color="red.300" mt={2} fontSize="sm">
              Maximum retry attempts reached
            </Text>
          )}
        </Box>
      )}

      {threeJSInitialized && (
        <Text
          position="absolute"
          bottom="4"
          color="gray.400"
          fontSize="sm"
          zIndex="1"
          bg="blackAlpha.600"
          px={3}
          py={1}
          borderRadius="md"
        >
          Click and drag to rotate • Scroll to zoom
        </Text>
      )}
    </Box>
  );
};

ThreeDView.propTypes = {
  modelPath: PropTypes.string.isRequired,
  onError: PropTypes.func,
  onLoad: PropTypes.func
};

export default ThreeDView;