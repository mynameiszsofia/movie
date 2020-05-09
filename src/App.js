import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    name: "",
    movie: [],
  };

  async componentDidMount() {
    try {
      await this.getMovie();
      this.displayMovie();
    } catch (e) {
      console.log(e);
    }
  }

  getMovie = async () => {
    return new Promise((resolve, reject) => {
      axios
        .get("http://api.tvmaze.com/shows/1/episodes")
        .then(({ data }) => {
          this.setState({
            movie: data,
          });
          resolve();
        })
        .catch((e) => reject(e));
    });
  };

  displayMovie = async () => {
    axios({
      url: "/movie",
      method: "POST",
      data: this.state.movie,
    })
      .then(() => this.displayMovie())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.displayMovie}>
          <button type="submit">Send</button>
          <h2>Movie List</h2>
          <div>
            {this.state.movie.map((t) => {
              return <p>{t.name}</p>;
            })}
          </div>
        </form>
      </div>
    );
  }
}

export default App;
