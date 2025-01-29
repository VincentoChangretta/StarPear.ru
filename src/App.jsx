import './App.css'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Header } from './components/global/Header'
import { Footer } from './components/global/Footer'
import { Main } from './components/pages/main/Main'
import { Courses } from './components/pages/courses/Courses'
import { CoursePage } from './components/pages/courses/CoursePage/CoursePage'
import { Community } from './components/pages/community/Community'
import { Biography } from './components/pages/biography/Biography'
import { Registration } from './components/pages/registraion/Registration'
import { Social } from './components/pages/social/Social'
import { PrivacyPolicy } from './components/pages/PrivacyPolicy/PrivacyPolicy'

function App() {


  return (
    <div className='wrapper'>
      <Router>
        <Header />
        <main className="main">
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/courses' element={<Courses />}></Route>
            <Route path='/courses-group' element={<CoursePage />}></Route>
            <Route path='/courses-individual' element={<CoursePage />}></Route>
            <Route path='/courses-original' element={<CoursePage />}></Route>
            <Route path='/community' element={<Community />}></Route>
            <Route path='/biography' element={<Biography />}></Route>
            <Route path='/social-media' element={<Social />}></Route>
            <Route path='/registration' element={<Registration />}></Route>
            <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
            <Route path='*' element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
