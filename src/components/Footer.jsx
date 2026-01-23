const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-4 py-10   ">
      <div className="max-w-6xl mx-auto w-full sm:px-4">

        {/* TOP TEXT */}
        <p className="mb-6 font-bold text-lg">
          Questions? Call <span className="hover:underline cursor-pointer">000-800-919-1694</span>
        </p>

        {/* LINKS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg">
          <p className="hover:underline cursor-pointer">FAQ</p>
          <p className="hover:underline cursor-pointer">Help Center</p>
          <p className="hover:underline cursor-pointer">Account</p>
          <p className="hover:underline cursor-pointer">Media Center</p>

          <p className="hover:underline cursor-pointer">Investor Relations</p>
          <p className="hover:underline cursor-pointer">Jobs</p>
          <p className="hover:underline cursor-pointer">Ways to Watch</p>
          <p className="hover:underline cursor-pointer">Terms of Use</p>

          <p className="hover:underline cursor-pointer">Privacy</p>
          <p className="hover:underline cursor-pointer">Cookie Preferences</p>
          <p className="hover:underline cursor-pointer">Corporate Information</p>
          <p className="hover:underline cursor-pointer">Contact Us</p>
        </div>

        
        
        <p className="mt-6 text-sm font-semibold text-gray-500">
          Stream-GPT © {new Date().getFullYear()} — Built by Aman Uniyal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
