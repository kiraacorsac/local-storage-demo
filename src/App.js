import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function App() {

  const [name, setName] = useState(""); //volatile
  const [persistentName, setPersistentName] = useLocalStorage("name", "not defined");
  // localStorage.setItem("name", name) //persistent

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleNameSave(event) {
    setPersistentName(name)
  }
  // const person = {
  //   name: "Quentin",
  //   favoriteAnimal: {
  //     specie: "dog",
  //     size: "big"
  //   },
  //   clothing: ["Shirt", "Pants", "Hat"],
  //   numberOfHeads: 1
  // }

  // console.log(JSON.stringify(person));
  // console.log(JSON.parse(JSON.stringify(person)))

  // localStorage.setItem("quentin", JSON.stringify(person))


  // for (const clothing of JSON.parse(localStorage.getItem('quentin')).clothing) {
  //   console.log(clothing)
  // }
  return (


    <div >
      <input onChange={handleNameChange} type="text"></input>
      <button onClick={handleNameSave} >Save</button>
      <p>
        Volatile Storage: {name}
      </p>
      <p>
        Persisten Storage: {persistentName}
      </p>
    </div>
  );
}

export default App;
