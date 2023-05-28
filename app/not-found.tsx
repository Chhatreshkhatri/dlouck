import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 text-lg">
        The page you are looking for does not exist. Go back to the{" "}
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          Home page
        </Link>
      </p>
      <Image
        src="https://www.svgrepo.com/show/474749/broken-link.svg"
        alt="404 Error"
        className="mt-8 h-72"
      />
    </div>
  );
};

export default NotFound;
