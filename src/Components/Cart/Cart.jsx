import { useState, useEffect, useContext } from "react";
import { getMovieCart } from "../../../public/fakedb";
import { AuthContext } from "../../Providers/AuthProvider";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getMovieCart();
    const objectsArray = Object.keys(storedCart).map((key) => JSON.parse(key));

    setCartData(objectsArray);
  }, [products]);
  console.log(cartData);
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-xl font-bold my-8">
        Welcome To Your Cart, {user?.displayName}
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Image/Movie Name
              </th>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date
              </th>

              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </th>
            </tr>
          </thead>

          <tbody className="divide-gray-200">
            {cartData.map((data, i) => (
              <tr key={i}>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  <img className="w-12" src={data.url} alt="" />
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {data.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {data.date}
                </td>{" "}
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {data.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
