
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicNav from './MyNav';
import MyFooter from './MyFooter';
import Welcome from './Welcome';
import MyCard from './AllTheBooks';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicNav />
        <MyFooter />
        <Welcome />
        <MyCard
          books={[
            { asin: "0316438960", img: img1, title: "The Last Wish: Introducing the Witcher", price: 9.59 },
            { asin: "0316389706", img: img2, title: "Sword of Destiny (The Witcher)", price: 10.39 },
            { asin: "0786966246", img: img3, title: "D&D MORDENKAINEN'S TOME OF FOES (Dungeons & Dragons)", price: 27.94 },
            { asin: "1945683694", img: img4, title: "Destiny Grimoire Anthology, Volume II: Fallen Kingdoms", price: 19.92 },
            { asin: "0786966254", img: img5, title: "D&D Waterdeep Dragon Heist HC (Dungeons & Dragons)", price: 34.61 },
          ]}
        />


      </header>
    </div>
  );
}

export default App;
