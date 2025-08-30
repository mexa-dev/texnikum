import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="px-4 sm:px-8 lg:px-[90px]">{children}</div>;
};

export default Layout;
