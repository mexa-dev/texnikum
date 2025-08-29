import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="px-[90px]">{children}</div>;
};

export default Layout;
