import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  HStack,
  Text,
  Spinner,
  Stack,
  SimpleGrid,
  Badge,
  VStack,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import MissionForm from "../components/MissionForm";

const MotionCard = motion(Card);

const MissionsPage = () => {
  const [missions, setMissions] = useState([]);
  const [editingMission, setEditingMission] = useState(null);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const missionsPerPage = 6;

  useEffect(() => {
    fetchMissions();
  }, []);

  const fetchMissions = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/v1/missions");
      const data = await response.json();
      setMissions(data);
    } catch (error) {
      console.error("Error fetching missions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/v1/missions/${id}`, {
        method: "DELETE",
      });
      fetchMissions();
    } catch (error) {
      console.error("Error deleting mission:", error);
    }
  };

  const handleEdit = (mission) => {
    setEditingMission(mission);
    onOpen();
  };

  const handleAddNew = () => {
    setEditingMission(null);
    onOpen();
  };

  // Pagination
  const lastMissionIndex = currentPage * missionsPerPage;
  const firstMissionIndex = lastMissionIndex - missionsPerPage;
  const currentMissions = missions.slice(firstMissionIndex, lastMissionIndex);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const MissionCard = ({ mission }) => (
    <MotionCard
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      h="100%"
    >
      <CardHeader>
        <HStack justifyContent="space-between">
          <Heading size="md">{mission.name}</Heading>
          <Badge colorScheme={
            mission.status === 'Planned' ? 'blue' :
            mission.status === 'In Progress' ? 'yellow' :
            mission.status === 'Completed' ? 'green' : 'red'
          }>
            {mission.status}
          </Badge>
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack align="stretch" spacing={3}>
          <HStack justify="space-between">
            <Text fontWeight="bold">Destination:</Text>
            <Text>{mission.destination}</Text>
          </HStack>
          <HStack justify="space-between">
            <Text fontWeight="bold">Launch Date:</Text>
            <Text>{new Date(mission.launchDate).toLocaleDateString()}</Text>
          </HStack>
          <HStack justify="space-between">
            <Text fontWeight="bold">Spacecraft:</Text>
            <Text>{mission.spaceCraft}</Text>
          </HStack>
          <HStack justify="flex-end" pt={2}>
            <IconButton
              aria-label="Edit mission"
              icon={<EditIcon />}
              onClick={() => handleEdit(mission)}
            />
            <IconButton
              aria-label="Delete mission"
              icon={<DeleteIcon />}
              colorScheme="red"
              onClick={() => handleDelete(mission._id)}
            />
          </HStack>
        </VStack>
      </CardBody>
    </MotionCard>
  );

  return (
    <Container maxW="container.xl" py={8}>
      <Card>
        <CardHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading size="lg">Space Missions</Heading>
          <Button colorScheme="yellow" onClick={handleAddNew}>
            Add New Mission
          </Button>
        </CardHeader>
        <CardBody>
          {loading ? (
            <Stack align="center">
              <Spinner size="xl" />
            </Stack>
          ) : (
            <>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {currentMissions.map((mission) => (
                  <MissionCard key={mission._id} mission={mission} />
                ))}
              </SimpleGrid>

              <HStack justify="space-between" mt={6}>
                <Button
                  leftIcon={<ArrowLeftIcon />}
                  onClick={prevPage}
                  isDisabled={currentPage === 1}
                >
                  Previous
                </Button>
                <Text>Page {currentPage}</Text>
                <Button
                  rightIcon={<ArrowRightIcon />}
                  onClick={nextPage}
                  isDisabled={lastMissionIndex >= missions.length}
                >
                  Next
                </Button>
              </HStack>
            </>
          )}
        </CardBody>
      </Card>

      <MissionForm
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setEditingMission(null);
        }}
        mission={editingMission}
        onMissionSaved={() => {
          fetchMissions();
          onClose();
          setEditingMission(null);
        }}
      />
    </Container>
  );
};

export default MissionsPage;