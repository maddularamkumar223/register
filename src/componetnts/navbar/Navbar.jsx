import Left from "./Left";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-white text-2xl font-bold">
          <Left />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
