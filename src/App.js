import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import Certifications from "./pages/Certifications";
import Demos from "./pages/Demos";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <div className="flex flex-col justify-between h-full bg-neutral-content">
                <Header></Header>

                <div className="mb-10 pl-10 pr-10">
                    <main>
                        <Routes>
                            <Route
                                path="/certifications"
                                element={<Certifications />}
                            />
                            <Route path="/demos" element={<Demos />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/resume" element={<Resume />} />

                            <Route path="/notfound" element={<NotFound />} />
                            <Route path="/*" element={<NotFound />} />
                        </Routes>
                    </main>
                </div>

                <Footer></Footer>
            </div>
        </Router>
    );
}

export default App;
