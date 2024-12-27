import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="__layout">
    <Navigation />
    <main className="page">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout;