import React from 'react';
import Movie from "./components/movie";

function App() {
  const fetchData = async () => {
    return fetch('/api', option)
  }
  const data =
    "helslo"
    ;

  const option = {
    headers: {
      "Content-Type": "application/json",
    },
    method: 'Post',
    body: JSON.stringify({ data })
  }

  const printData = async () => {
    try {
      const data1 = await fetchData()
      const json = await data1.json()
      console.log(json)
    }
    catch (e) {
      console.log(e)

    }
  }
  printData()

  return (<div>Upsz:{data}</div>);
}
export default App;


/* function App() {
  const data =
    "helslo"
    ;

  const option = {
    headers: {
      "Content-Type": "application/json",
    },
    method: 'Post',
    body: JSON.stringify({ data })
  }

  const response = await fetch('/api', option)
  const json = await response.json();
  console.log(json)
  return (<div>Upsz:{data}</div>);
}
export default App;
 */



/* loading ? (
 <h1>Loading...</h1>) : (
   <div className="App">
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)} />
        <button type="submit">Send</button>

      </form>
      {movie.map((t) => {
        return <h1 key={t._id}>{t.name}{t.rating}</h1>
      })}
    </div>
  ); */
/*   const [movie, setMovie] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState("");
    const [name, setName] = React.useState("");
    const [rating, setRating] = React.useState("");

    const fetchData = React.useCallback(() => {
      fetch("/movie")
        .then((res) => res.json())
        .then((data) => {
          setMovie(data.result);
          setLoading(false);
        });
    });
    React.useEffect(() => {
      fetchData();
    }, []);

    function handleSubmit(event) {
      event.preventDefault();
      fetch("/movie", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({
          name: name,
          rating: rating
        }),
      })
        .then(() => {
          setName("");
          setRating("");
          fetchData();
        })
        .catch((err) => setError(err));
    }*/
