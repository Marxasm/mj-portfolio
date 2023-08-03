import Main from './components/Mains';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skillbar from './components/Skillbars';
import BackgroundView from './Layout/BackgroundView';

function App() {

  return (
      <BackgroundView>
      <div className='font-poppins select-none text-black bg-white dark:bg-[#11324D] dark:text-white  transition duration-500'>
        <Navbar />
        <Main />
        <Skillbar />
        <Projects />
        <Experiences />
        <Contact />
      </div>
      </BackgroundView>

  )
}

export default App