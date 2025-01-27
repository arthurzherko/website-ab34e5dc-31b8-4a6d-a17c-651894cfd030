import { Routes as RouterRoutes, Route } from "react-router-dom";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Contacts } from "./pages/Contacts";

const Routes = () => (
  <>
    <MainNav />
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contacts" element={<Contacts />} />
    </RouterRoutes>
    <Footer />
  </>
);

export default Routes;