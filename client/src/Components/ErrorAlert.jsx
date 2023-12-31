
function ErrorAlert() {
  return (
   <div className="bg-blue-700 bg-opacity-25 border-t-4 border-blue-900 rounded-b text-blue-700 px-4 py-3 shadow-md flex justify-center items-center max-w-lg mx-auto" role="alert">
  <div>
    <svg className="fill-current h-6 w-6 text-blue-700 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
    </svg>
  </div>
  <div className="text-center text-blue-700">
    <p className="font-bold">Unauthorized</p>
    <p className="text-sm">Users must be signed in to comment on posts.</p>
  </div>
</div>


  )
}

export default ErrorAlert