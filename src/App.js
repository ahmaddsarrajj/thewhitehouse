import './App.css';
import Header from './components/Head';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import AboutUs from './screens/AboutUs.js';
import Services from './screens/Services.js';
import Footer from './components/Footer.js';
import Blog from './components/blog/Blog';

const App = () =>{
return(
  <div>
    <Header/>
    <AboutUs/>
    <Services/>
    <Blog/> 
    <Footer/>
    
    <div class="fixed-action-btn">
      <div >
        <a class="btn-floating btn-large amber accent-3" href='#home'>
          <i class="black-text large material-icons amber accent-3 waves-effect waves-light">whatsapp</i>
        </a>
      </div>
    </div> 
    
  </div>
)
}

export default App;