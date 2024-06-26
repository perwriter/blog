
"use client"
import React from 'react';

const TruncateButton = () => {
  const handleTruncate = async () => {
    const response = await fetch('/api/truncatePost', {
      method: 'POST',
    });

    const data = await response.json();
    alert(data.message);
  };

  return <button onClick={handleTruncate}>Truncate Post Table</button>;
};

export default TruncateButton;
