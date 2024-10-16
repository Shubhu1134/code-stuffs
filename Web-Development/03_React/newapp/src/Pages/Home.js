import App from "../Components/Header";
const Cool = () => {
  return (
    <>
      <h3>THis is Cool Component Used inside Home COmponent</h3>
    </>
  );
};

const Home = () => {
  return (
    <>
      <h1>App</h1>
      <App />
      <Cool />
    </>
  );
};

export default Home;
