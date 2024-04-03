import { IoIosWarning } from "react-icons/io";

const ErrorDisplay = ({ message }) => {
  return (
    <div className="shadow shadow-black rounded-md p-10 flex items-center justify-center flex-col gap-3 text-center">
      <IoIosWarning className="text-5xl " />
      <h3 className="text-red-400 font-bold text-xl">
        Üzgünüz Bir Hata Oluştu.
      </h3>
      <p className="mt-8 font-semibold text-lg">{message}</p>
    </div>
  );
};

export default ErrorDisplay;
