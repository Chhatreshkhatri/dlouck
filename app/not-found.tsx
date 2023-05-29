"use client"
import { useEffect } from 'react';
import Image from 'next/image';

const NotFound = () => {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = '/';
    }, 5000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 text-lg">
        The page you are looking for does not exist. You will be redirected to the home page shortly.
      </p>
      <Image
        src="https://www.svgrepo.com/show/474749/broken-link.svg"
        width={500}
        height={500}
        alt="404 Error"
        className="mt-8 h-72"
      />
    </div>
  );
};

export default NotFound;
