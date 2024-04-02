import logo from './logo.svg';
import './App.css';
import FirstComp from './components/FirstComp';
import TemplateExpress from './components/TemplateExpress';
import Events from './components/Events';
import Challenge from './components/Challenge';


function App() {
  return (
    <div className="App">
       <h1>Fundamentos React</h1>
       <FirstComp/>
       <TemplateExpress/>
       <Events/>
       <Challenge/>
    </div>
  );
}

export default App;
