import IdCard from './components/IdCard';
import Greetings from "./components/Greetings";
import Random from "./components/Random"
import BoxColor from "./components/BoxColor"

function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
       <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">Charlie</Greetings>
      <Greetings lang="es">Eve</Greetings>
      
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={300} g={100} b={0} />
      <BoxColor r={128} g={800} b={150} />
    </div>
  );
}

export default App;