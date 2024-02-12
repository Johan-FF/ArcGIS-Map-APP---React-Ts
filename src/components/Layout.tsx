import { FC, ReactNode } from "react";

import Found from "./Found";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Found>
      <span className="h-screen w-screen flex flex-col items-center ">
        <NavBar />
        <div className="h-[80%] w-screen flex items-center justify-center">
          {children}
        </div>
        <Footer />
      </span>
    </Found>
  );
};

export default Layout;
