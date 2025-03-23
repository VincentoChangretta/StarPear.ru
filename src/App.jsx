import './App.css';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/global/Header';
import { Footer } from './components/global/Footer';
import { Main } from './components/pages/main/Main';
import { Courses } from './components/pages/courses/Courses';
import { Community } from './components/pages/community/Community';
import { Biography } from './components/pages/biography/Biography';
import { Registration } from './components/pages/registraion/Registration';
import { Social } from './components/pages/social/Social';
import { PrivacyPolicy } from './components/pages/PrivacyPolicy/PrivacyPolicy';
import { IndividualCoursePage } from './components/pages/IndividualCoursePage/IndividualCoursePage';
import { CollectiveCoursePage } from './components/pages/IndividualCoursePage/CollectiveCoursePage';
import { OriginalCoursePage } from './components/pages/IndividualCoursePage/OriginalCoursePage';
import { Feedbacks } from './components/pages/feedbacks/Feedbacks';

function App() {
   return (
      <div className="wrapper">
         <Router>
            <Header />
            <main className="main">
               <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/courses-group" element={<CollectiveCoursePage />} />
                  <Route path="/courses-individual" element={<IndividualCoursePage />} />
                  <Route path="/courses-original" element={<OriginalCoursePage />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/biography" element={<Biography />} />
                  <Route path="/social-media" element={<Social />} />
                  <Route path="/feedbacks" element={<Feedbacks />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
               </Routes>
            </main>
            <Footer />
         </Router>
      </div>
   );
}

export default App;
