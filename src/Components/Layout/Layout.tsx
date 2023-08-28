import { ReactNode } from "react";
import Navbar from "../Header/Header";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const Layout = ({ children, ...Props }: Props) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
export default Layout;
