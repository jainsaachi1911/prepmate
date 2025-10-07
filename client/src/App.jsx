import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Practice from './pages/Practice';
import DSAStudyGuide from './pages/DSAStudyGuide';
import SystemDesignGuide from './pages/SystemDesignGuide';
import JavaScriptGuide from './pages/JavaScriptGuide';
import FAANGGuide from './pages/FAANGGuide';
import ViewCurriculum from './pages/ViewCurriculum';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#111111]">
        <Header />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/practice" element={<Practice />} />
              <Route path="/dsa-study-guide" element={<DSAStudyGuide />} />
              <Route path="/system-design-guide" element={<SystemDesignGuide />} />
              <Route path="/javascript-guide" element={<JavaScriptGuide />} />
              <Route path="/faang-guide" element={<FAANGGuide />} />
              <Route path="/view-curriculum" element={<ViewCurriculum />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}