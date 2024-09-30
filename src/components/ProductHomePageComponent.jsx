import { useNavigate } from "react-router-dom";
import { iPhones } from "../db/iphones.js";

export default function ProductHomePageComponent() {
  // console.log(iPhones[0].images.at(0));
  const navigate = useNavigate();

  const redirectToProduct = (product) => {
    localStorage.setItem("product", product);
    navigate("/product");
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {iPhones.map((product, index) => (
            <div
              key={index}
              className="group relative hover:cursor-pointer"
              onClick={() => redirectToProduct(product.model)}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.image1}
                  className="h-full w-full object-contain object-center bg-white lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.model}
                    </a>
                  </h3>
                  <h1>
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.processor}
                    </a>
                  </h1>
                  <div className="flex gap-2 flex-wrap">
                    Colors:{" "}
                    {product.colors.map((color, index) => (
                      <p key={index} className="text-sm text-gray-500">
                        {color}
                      </p>
                    ))}
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
