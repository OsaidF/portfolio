import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Portfolio from './components/portfolio/portfolio';
import Proficiency from './components/proficiency/proficiency';
import styles from './page.module.css';

const Home = () => {
  return (
    <>
    <Navbar />  
    <Header data-section />
    <Proficiency data-section />
    <Portfolio data-section />
    <Contact data-section />
    <Footer />
    </>
  );
}

export default Home;