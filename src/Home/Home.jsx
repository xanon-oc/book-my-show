import Banner from "../Components/Banner/Banner";
import allData from "../../public/data.json";
import SingleCard from "../Components/Cards/SingleCard";
const Home = () => {
  console.log(allData);
  return (
    <div>
      <div className="my-8">
        <Banner />
      </div>
      <div className="w-11/12 mx-auto">
        <h2 className="mt-8 mb-8 text-2xl font-bold">
          Events Happening Near You
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {allData.map((item, index) => (
            <SingleCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
