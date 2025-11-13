import Footer from "../Share/Footer";
import Header from "../Share/Navbar";

const RootLayout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
