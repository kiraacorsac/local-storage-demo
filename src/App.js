function App() {


  // localStorage.setItem('test', 'Hello world!')
  // localStorage.setItem('test', 1)
  // localStorage.setItem('test2', 'hello')

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(localStorage.getItem(key))
  }

  const person = {
    name: "Juraj",
    favoriteAnimal: {
      specie: "dog",
      size: "big"
    },
    clothing: ["Shirt", "Pants", "Hat"],
    numberOfHeads: 1
  }

  // console.log(JSON.stringify(person));
  // console.log(JSON.parse(JSON.stringify(person)))

  // sessionStorage.setItem("juraj", JSON.stringify(person))

  return (


    <div >
      <input name="address" />

      Hello!
      <p>
        {/* {JSON.parse(sessionStorage.getItem('juraj')).name} */}
      </p>
    </div>
  );
}

export default App;
