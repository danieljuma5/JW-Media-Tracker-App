import { Link } from "react-router-dom";
const CallToAction = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's find more that brings us together.</h2>
          <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">JW-Tracker helps you connect with friends, family and communities of people who share your interests</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link to={'/login'}>
            <div className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
            </div>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToAction