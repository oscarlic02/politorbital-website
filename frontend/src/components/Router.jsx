import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Fade } from "@chakra-ui/react";
import { getColors } from "../utils/utils";
import HomePage from "../pages/HomePage";
import MeetUs from "../pages/MeetUs";
import PropTypes from "prop-types";
import DivisionDetail from "./Meet-Us/DivisionDetail";
import Header from "./Header";
import Footer from "./Footer";
import WorkWithUs from "../pages/WorkWithUs";
import StudentApply from "../pages/StudentApply";
import Outreach from "../pages/Outreach";
import Article from "./Outreach/Article";
/**
 * @description AnimatedPage wrapper for page transitions
 * @author Licciardi Oscar
 * @param {Object} props - Component props
 * @param {JSX.Element} props.children - The child component to animate
 * @returns {JSX.Element} The animated page wrapper
 */
const AnimatedPage = ({ children }) => {
  return (
    <Fade in={true} transition={{ enter: { duration: 0.5 } }}>
      <Box
        pt="80px" // Account for fixed header
        minH="100vh"
        bgGradient={`linear(to-b, ${getColors().black}, ${
          getColors().primary
        })`}
      >
        {children}
      </Box>
    </Fade>
  );
};

AnimatedPage.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * @description Router component that handles navigation for the application.
 * Includes routes for all main pages from the navigation menu.
 * @author Licciardi Oscar
 * @component
 * @example
 * return (
 *   <AppRouter />
 * )
 *
 * @returns {JSX.Element} The rendered router component
 */
const AppRouter = () => {
  const handleRouteChange = () => {
    console.log("Route changed");
    window.scrollTo(0, 0);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Main routes matching your navigation items */}
        <Route
          path="/"
          element={
            <AnimatedPage>
              <HomePage />
            </AnimatedPage>
          }
          onEnter={handleRouteChange}
        />

        <Route
          path="/meet-us"
          element={
            <AnimatedPage>
              <MeetUs />
            </AnimatedPage>
          }
        />

        <Route
          path="/meet-us/:divisionName"
          element={
            <AnimatedPage>
              <Header />
              <DivisionDetail />
              <Footer />
            </AnimatedPage>
          }
        />

        <Route
          path="/projects"
          element={
            <AnimatedPage>
              {/* <Projects /> */}
              <Box>Projects Page</Box>
            </AnimatedPage>
          }
          onEnter={handleRouteChange}
        />

        <Route
          path="/outreach"
          element={
            <AnimatedPage>
              {/* <Outreach /> */}
              <Outreach />
            </AnimatedPage>
          }
          onEnter={handleRouteChange}
        />

        <Route
          path="/articles/:articleId"
          element={
            <AnimatedPage>
              <Header />
              <Article />
              <Footer />
            </AnimatedPage>
          }
        />

        <Route
          path="/apply"
          element={
            <AnimatedPage>
              {/* <Apply /> */}
              <StudentApply />
            </AnimatedPage>
          }
          onEnter={handleRouteChange}
        />

        <Route
          path="/work-with-us"
          element={
            <AnimatedPage>
              <WorkWithUs />
            </AnimatedPage>
          }
          onEnter={handleRouteChange}
        />

        <Route
          path="/contact"
          element={
            <AnimatedPage>
              {/* <Contact /> */}
              <Box>Contact Page</Box>
            </AnimatedPage>
          }
          onEnter={handleRouteChange}
        />

        {/* 404 route */}
        <Route
          path="*"
          element={
            <AnimatedPage>
              {/* <NotFound /> */}
              <Box p={8} textAlign="center" color="white">
                Page Not Found
              </Box>
            </AnimatedPage>
          }
          onEnter={handleRouteChange}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
