import Header from "./Header";

const ToDo = () => {
  return (
    <>
      <div className="bg-cover bg-center h-[25vh] bg-[url('../images/bg-mobile-light.jpg')] flex flex-col content-center">
        <div className="mt-10 mx-5 text-white text-xl">
          <Header />
        </div>
      </div>
    </>
  );
}; 

export default ToDo;
