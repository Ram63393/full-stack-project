function Header() {
    return (
      <header className="header p-4 flex justify-between items-center bg-gray-100">
        <input
          type="text"
          placeholder="Search your course"
          className="search-input p-2 border rounded-md w-1/2"
        />
        <div className="actions flex items-center gap-4">
          <button className="btn bg-blue-500 text-white py-1 px-3 rounded">Add new Student</button>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>
    );
  }

  export default Header;