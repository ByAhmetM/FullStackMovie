import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Hero from "./../components/Hero";
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
      <Hero />
      <div className="p-4 grid gap-10  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {!movies ? (
          <p>Yükleniyor...</p>
        ) : (
          movies.map((movie, i) => (
            <Card key={movie.id} movie={movie} index={i} />
          ))
        )}
      </div>
    </div>
  );
};

export default MainPage;
