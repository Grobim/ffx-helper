import React, { ReactChild } from "react";
import { Link } from "react-router-dom";

import { SimpleAuthPanel } from "../../features/auth/SimpleAuthPanel";

interface LayoutProps {
  children: ReactChild;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="Layout">
      <SimpleAuthPanel />
      <Link to="/users">Users</Link>
      {children}
    </div>
  );
}

export default Layout;
