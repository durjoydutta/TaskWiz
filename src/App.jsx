import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestPage from "./pages/TestDebug";
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <div className="wrapper min-h-screen px-8 sm:px-8 md:px-10 py-2 dark:bg-[#070707e3] flex flex-col justify-between items-center gap-6 md:gap-8 text-gray-900 dark:text-[#ffb300] dark:selection:text-white antialiased">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/testpage" element={<TestPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
