import { useState } from "react";

export default function App() {
  const [listOfCities, setListOfCities] = useState([]);
  const [newCity, setNewCity] = useState("");
  const [disabled, setDisabled] = useState(false);

  function handleRemoveCity(key) {
    const updatedListOfCities = listOfCities.filter((city) => city.key !== key);
    setListOfCities(updatedListOfCities);
  }

  function handleAddNewCity(e) {
    setNewCity(e.target.value);
  }

  function handleCreateListOfCities() {
    if (newCity.length >= 1) {
      setDisabled(!disabled);
      setListOfCities([...listOfCities, { key: Math.random(), name: newCity }]);
      setNewCity("");
    } else {
      setDisabled(!disabled);
    }
  }

  return (
    <>
      <input onChange={handleAddNewCity} placeholder="Add city" />

      <button onClick={handleCreateListOfCities}>Add</button>

      <ul>
        {listOfCities.map((city) => (
          <li key={city.key}>
            {city.name}
            <button onClick={() => handleRemoveCity(city.key)}>
              <span role="img" aria-label="Cross Mark emoji">
                ❌
              </span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
