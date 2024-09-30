import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { iPhones } from "../db/iphones.js";
import EnquireForm from "./EnquireForm.jsx";

const ProductPage = () => {
  // Directly fetch the model from localStorage
  const model = localStorage.getItem("product");

  // Find the iPhone data based on the model
  const data = iPhones.find((iPhone) => iPhone.model === model);

  // Render the UI
  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block ">
            <img
              alt={data.image1}
              src={data.image1}
              className="max-h-96 w-full object-contain object-center"
            />
          </div>

          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              alt={data.image2}
              src={data.image2}
              className="max-h-96 w-full object-contain object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-8 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {data.model}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>

            <div className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <fieldset aria-label="Choose a color" className="mt-4">
                  <RadioGroup className="flex items-center space-x-3">
                    {data.colors.map((color) => (
                      <RadioGroup.Option
                        key={color}
                        value={color}
                        aria-label={color}
                        className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                      >
                        {({ checked }) => (
                          <>
                            <span
                              aria-hidden="true"
                              className={`h-8 w-8 rounded-full border border-black border-opacity-10 ${
                                checked ? `ring-2 ring-offset-1` : ""
                              }`}
                              style={{ backgroundColor: color.toLowerCase() }} // Set the background color to match the selected color
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>
              <h2 className="sr-only">Product information</h2>

              <div className="mt-10">
                {/* Colors */}
                <div>
                  <EnquireForm />
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                {/* <p className="text-base text-gray-900">{data.description}</p> */}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-xl tracking-tight text-gray-900">
                    {data.camera}
                  </li>
                  <li className="text-xl tracking-tight text-gray-900">
                    {data.screen}
                  </li>
                  <li className="text-xl tracking-tight text-gray-900">
                    {data.processor}
                  </li>
                  <li className="text-xl tracking-tight text-gray-900">
                    {data.battery}
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-xl tracking-tight text-gray-900">
                    {data.madeIn}
                  </li>
                  <li className="text-xl tracking-tight text-gray-900">
                    {data.message}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
