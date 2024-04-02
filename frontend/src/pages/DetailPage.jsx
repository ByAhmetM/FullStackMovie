import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { BiSolidCameraMovie } from "react-icons/bi";
const DetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5001/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => setError(err?.response?.data?.message));
  }, []);

  return (
    <div className="p-10">
      {!movie ? (
        <p>Yükleniyor...</p>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className="flex flex-col gap-10 items-center justify-center md:flex-row ">
          <div>
            <img
              className="rounded-md"
              src="https://picsum.photos/250/400"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="text-3xl font-semibold">
              {movie.title}
              <span>({movie.year})</span>
            </h1>
            <p>
              <span className="font-semibold me-3">Kullanıcı Skoru:</span>
              <span
                style={{
                  background:
                    movie.rating > 8
                      ? "green"
                      : movie.rating > 6
                      ? "orange"
                      : "red",
                }}
                className="p-2 font-semibold rounded-full text-white"
              >
                {movie.rating}
              </span>
            </p>

            <div className="flex gap-5">
              <button className="bg-gray-800 text-white p-3 rounded-full">
                <FaHeart />
              </button>
              <button className="bg-gray-800 text-white p-3 rounded-full">
                <FaBookmark />
              </button>
              <button className="bg-gray-800 text-white p-3 rounded-full">
                <FaStar />
              </button>
              <button className="bg-gray-800 text-white p-3 rounded-full">
                <BiSolidCameraMovie />
              </button>
            </div>
            <p>
              <span className="font-semibold me-3">Kategoriler:</span>
              <span className="p-2 font-semibold bg-yellow-600 rounded-full text-white">
                {movie.genre}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
