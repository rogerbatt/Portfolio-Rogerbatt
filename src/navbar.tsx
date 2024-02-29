import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
    return (
      <div className="flex">
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav className="w-64 h-screen">
              <div className="h-full px-3 py-4 bg-gray-50">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                </ul>
              </div>
            </nav>
    
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}          
        <div className="bg-gray-200 w-screen p-10">
            <Outlet />
        </div>

        
      </div>
    );
  }