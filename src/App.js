import Ads from "./components/Ads/Ads";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import BasicCard from "./components/Cards/Cardui";
import Card from "./components/Cards/Card";
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import Accordion from './components/Accordion/Accordion'

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="rightside">
        <Ads />
        <div className="pagecontents">
          <div className="cards">
            <Card heading="Easy to Set Up" content="No more confusion from setting up digital ads. We make everything easy to understand for you!" button="click here" image={image1}/>
            <Card heading="All-in-one Dashboard" content="Stop losing track of your ads across channels. Manage all of them easily with our all-in-one dashboard!" button="click here" image={image2}/>
            <Card heading="Virtual Ads Assistant" content="Don’t know how to do ads? Don’t worry, your campaigns will be optimized by your Virtual Ads Assistant!" button="click here" image={image3}/>
            <Card heading="Affordable Cost" content="No more wasted marketing spends. Unlock your ads’ potential and get more sales!" button="click here" image={image4}/>
          </div>
          <div className= "accordion">
            <Accordion/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
