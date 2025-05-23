/*  src/pages/components/navigation.jsx  */

function NavigationBar() {
  const style = { gridArea: "header" };
  const linkStyle = { cursor: "pointer", padding: "20px" };

  return (
    <nav
      style={style}
      className="w-full h-full flex items-center justify-between bg-gray-100 px-10"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold">RushLance</h1>

      {/* just “Home” per spec */}
      <ul className="flex gap-6 font-medium">
        <li style={linkStyle}>Home</li>
      </ul>

      {/* Location selector with a plain ▼ glyph instead of an image */}
      <div className="relative">
        <div className="w-[150px] h-[35px] rounded-full bg-white flex items-center justify-between shadow text-sm px-4">
          <span>Location</span>
          <span className="text-gray-500">▼</span>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
