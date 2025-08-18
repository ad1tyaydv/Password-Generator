export default function TextFile() {
  return (
    <div className="flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 text-white w-full h-full">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
        <span className="block text-red-400">Strong.</span>
        <span className="block text-blue-300">Secure.</span>
        <span className="block text-green-300">Awesome.</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        Generate uncrackable passwords instantly with our advanced password generator.
        Perfect for all your online accounts and digital security needs.
      </p>

      <div className="space-y-3 sm:space-y-4 w-full max-w-sm">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400 flex-shrink-0" />
          <span className="text-sm sm:text-base md:text-lg">Military-grade encryption</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-400 flex-shrink-0" />
          <span className="text-sm sm:text-base md:text-lg">Customizable criteria</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400 flex-shrink-0" />
          <span className="text-sm sm:text-base md:text-lg">No password storage</span>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 md:hidden w-full">
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg w-full transition-colors duration-200">
          Generate Password Now
        </button>
      </div>
    </div>
  );
}