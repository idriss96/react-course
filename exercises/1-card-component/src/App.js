import './App.css';
import CardComponents from './components/cardComponents/CardComponents';
import { data } from './data';

function App() {
  return (
    <div className="App">
      {data.map((person) => {
        return (
          <CardComponents
            key={person.id}
            image={person.image}
            name={person.first_name}
            lastName={person.last_name}
            description={person.description}
            skills={person.skills}
          />
        );
      })}
    </div>
  );
}

export default App;
