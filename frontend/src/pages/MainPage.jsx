import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
const MainPage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5001/api/movies")
      .then((res) => setMovies(res.data.movies))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {!movies ? (
        <p>Yükleniyor...</p>
      ) : (
        movies.map((movie) => <Card key={movie.id} movie={movie} />)
      )}
    </div>
  );
};

export default MainPage;
