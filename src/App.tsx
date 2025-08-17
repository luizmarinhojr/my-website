import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Error404 from "./pages/Error404";

export default function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route errorElement={<Error404 />} />
                <Route index element={<HomePage />} />
                <Route path="/projetos" element={<ProjectsPage />} />
            </Routes>
            <Footer />
        </>
    )
}