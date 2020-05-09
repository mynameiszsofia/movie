import React from "react";
import axios from "axios";

class Movie extends React.Component {
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
        .get("http://api.tvmaze.com/shows?page=1")
        .then(({ data }) => {
          const movie = data.slice(0, 10);
          this.setState({
            movie,
          });
          resolve();
        })
        .catch((e) => reject(e));
    });
  };

  displayMovie = async () => {
    axios({
      url: "/movies",
      method: "POST",
      data: {
        movie: JSON.stringify(this.state.movie[0]),
      },
    })
      .then(({ data }) => console.log(data))
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
export default Movie;
