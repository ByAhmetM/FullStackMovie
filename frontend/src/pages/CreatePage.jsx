import InputField from "../components/InputField";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const data = Object.fromEntries(form.entries());

    axios
      .post("http://127.0.0.1:5001/api/movies", data)
      .then(() => {
        toast.success("Film başarıyla oluşturuldu.");

        navigate("/");
      })
      .catch(() => {
        toast.error("Film oluşturma başarısız");
      });
  };
  return (
    <div className="grid place-items-center bg-yellow-600 h-[calc(100vh-81px)] ">
      <div className="max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 gap-10 bg-white rounded p-10 shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 items-center "
        >
          <h1 className="text-4xl font-bold ">Yeni Film Oluştur</h1>
          <InputField label="Film İsmi" type="text" name="title" />
          <InputField label="Kategori" type="text" name="genre" />
          <InputField label="Puan" type="number" name="rating" />
          <InputField label="Yıl" type="number" name="year" />

          <button className="w-72 bg-yellow-600 p-1 rounded-md text-white font-semibold hover:bg-yellow-500">
            Oluştur
          </button>
        </form>

        <div className="flex items-center justify-center">
          <img
            className="rounded-full max-h-[300px]"
            src="movie-bg.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
