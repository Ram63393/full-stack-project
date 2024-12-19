function Sidebar() {
    const menuItems = ["Dashboard", "Students", "Chapter", "Help", "Reports", "Settings"];
  
    return (
      <aside className="sidebar w-64 bg-gray-200 h-screen p-4">
        <h1 className="logo text-xl font-bold mb-8">Quyl</h1>
        <ul className="menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item p-2 hover:bg-gray-300 rounded">
              {item}
            </li>
          ))}
        </ul>
      </aside>
    );
  }
  
  export default Sidebar;
  