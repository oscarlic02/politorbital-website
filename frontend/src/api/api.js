const API_BASE_URL = 'http://localhost:5000/api/v1';

export const fetchMissionsApi = async () => {
  const response = await fetch(`${API_BASE_URL}/missions`);
  if (!response.ok) {
    throw new Error('Failed to fetch missions');
  }
  return response.json();
};

export const deleteMissionApi = async (id) => {
  const response = await fetch(`${API_BASE_URL}/missions/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete mission');
  }
  return response.json();
};