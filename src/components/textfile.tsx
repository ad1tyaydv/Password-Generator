export default function TextFile() {
  return (
    <div className="flex flex-col justify-center items-start p-8 md:p-12 lg:p-16 text-white h-full">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        <span className="block text-red-400">Strong.</span>
        <span className="block text-blue-300">Secure.</span>
        <span className="block text-green-300">Awesome.</span>
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-lg">
        Generate uncrackable passwords instantly with our advanced password generator.
        Perfect for all your online accounts and digital security needs.
      </p>
      <div className="space-y-4 text-sm md:text-base">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-green-400"></span>
          <span>Military-grade encryption algorithms</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-blue-400"></span>
          <span>Fully customizable password criteria</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-red-400"></span>
          <span>100% client-side - no password storage</span>
        </div>
      </div>
    </div>
  );
}