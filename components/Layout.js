import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="main" id="main">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
