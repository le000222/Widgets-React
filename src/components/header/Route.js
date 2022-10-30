import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      // get the url of that page eg: localhost:3000/translate and set it to current path
      setCurrentPath(window.location.pathname);
    };

    //event listener for popstate event in Link.js to know that url changed
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  //which route should be displayed
  return currentPath === path ? children : null;
};

export default Route;
