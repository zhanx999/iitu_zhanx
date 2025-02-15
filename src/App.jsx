
import './App.css'

import Header from './components/Header/Header'
import About from './components/About/About'
import CourseInfo from './components/CourseInfo/CourseInfo'
import CourseEnrollment from './components/CourseEnrollment/CourseEnrollment';
import Faculty from './components/Faculty/Faculty';
import Footer from './components/Footer/Footer'

import courses from "./data/courses";

function App() {

  return (
    <>
      <div className='wrapper'></div>
      <Header/>
      <About/>
      <CourseInfo courses={courses}/>
      <CourseEnrollment courses={courses}/>
      <Faculty/>  
      <Footer/>
    </>
  )
}

export default App
