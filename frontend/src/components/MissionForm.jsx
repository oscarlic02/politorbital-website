import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';

const MissionForm = ({ isOpen, onClose, mission, onMissionSaved }) => {
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    destination: '',
    launchDate: '',
    spaceCraft: '',
  });

  useEffect(() => {
    if (mission) {
      setFormData({
        ...mission,
        launchDate: new Date(mission.launchDate).toISOString().split('T')[0],
      });
    } else {
      setFormData({
        name: '',
        status: '',
        destination: '',
        launchDate: '',
        spaceCraft: '',
      });
    }
  }, [mission]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    
    const url = mission
      ? `http://localhost:5000/api/v1/missions/${mission._id}`
      : 'http://localhost:5000/api/v1/missions';
    
    const method = mission ? 'PUT' : 'POST';

    try {
      await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      onMissionSaved();
    } catch (error) {
      console.error('Error saving mission:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>{mission ? 'Edit Mission' : 'Add New Mission'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Status</FormLabel>
                <Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  placeholder="Select status"
                >
                  <option value="Planned">Planned</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Failed">Failed</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Destination</FormLabel>
                <Input
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Launch Date</FormLabel>
                <Input
                  name="launchDate"
                  type="date"
                  value={formData.launchDate}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Spacecraft</FormLabel>
                <Input
                  name="spaceCraft"
                  value={formData.spaceCraft}
                  onChange={handleChange}
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="yellow" type="submit">
              {mission ? 'Update' : 'Add'} Mission
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default MissionForm;