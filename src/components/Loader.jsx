const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[99999]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-600"></div>
    </div>
  );
};

export default Loader;
