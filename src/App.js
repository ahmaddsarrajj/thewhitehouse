import './App.css';
import Header from './components/Head';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import AboutUs from './screens/AboutUs.js';
import Services from './screens/Services.js';
import Hello from './screens/Hello.js';
import Footer from './components/Footer.js';

const App = () =>{
return(
  <div>
    <Header/>
    <AboutUs/>
    <Services/>
    <Footer/>
    
    <div class="fixed-action-btn">
      <div >
        <a class="btn-floating btn-large amber darken-3" href='#home'>
          <i class="large material-icons amber darken-3 waves-effect waves-light">whatsapp</i>
        </a>
      </div>
    </div> 
    
  </div>
)
}

export default App;