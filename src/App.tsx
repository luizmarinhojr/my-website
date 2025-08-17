import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Error404 from "./pages/Error404";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {

    return (
        <>
            <Header />
            <ScrollToTop />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/projetos" element={<ProjectsPage />} />
                <Route path="/contato" element={<ContactPage />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </>
    )
}