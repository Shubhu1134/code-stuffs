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
      <h1>HomePage</h1>
      <Cool />
    </>
  );
};

export default Home;
