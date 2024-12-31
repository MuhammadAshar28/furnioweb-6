
import Link from 'next/link'
const Blog = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-9/12 md:w-2/3 lg:w-1/2 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          This Page is Under Construction
        </h1>
        <p className="text-gray-700 text-lg mb-6 font-semibold">
          We are working hard to bring you something amazing. Stay tuned!
        </p>
        <Link href="/">
        <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-600">
          Back To Home
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
