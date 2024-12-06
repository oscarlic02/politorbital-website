export const getStatusColor = (status) => {
    const statusColors = {
      Planned: 'blue',
      'In Progress': 'yellow',
      Completed: 'green',
    };
    return statusColors[status] || 'red';
  };
  