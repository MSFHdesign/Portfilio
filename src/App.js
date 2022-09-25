import './styles/App.css';
import LandingPage from './components/landingpage.js'
import PageTwo from './components/PageTwo';
import ButtonAppBar from './components/Navigation.js'
 

function App() {
  return (
    <div> 
      <LandingPage id='back-to-top-anchor'/>
      <PageTwo />
    <nav className='appbar'>  
   <ButtonAppBar className='appbar'/>
    
   </nav>
    </div>
  );
}

export default App;
