import { Footer } from "./footer";
import { Navigation } from "./navigation";

interface WebLayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<WebLayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export { Layout };
