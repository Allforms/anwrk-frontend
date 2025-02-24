import { useState } from 'react';

const useComingSoon = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    setShowComingSoon(true);

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowComingSoon(false);
    }, 3000);
  };

  return { showComingSoon, handleDownloadClick };
};

export default useComingSoon;