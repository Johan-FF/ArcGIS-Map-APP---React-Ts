import { FC, MouseEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) navigate("/map");
  }, []);

  const loginHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", "actited");
    }
    navigate("/map");
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <h1>ArcGIS Map APP</h1>
      <button onClick={loginHandler}>Start</button>
    </main>
  );
};

export default HomePage;
