import { useState } from "react";
import List from "./List";
import data from "./data.js";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h2>{people.length} birthdays today</h2>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear List</button>
      </section>
    </main>
  );
};

export default App;
