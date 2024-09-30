import { useState } from "react";

export default function EnquireForm() {
  const [getTarget, setGetTarget] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [color, setColor] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const message = `Hello Mighty Mustard! I would like to request a target price of  ₹${
      getTarget === null ? "" : getTarget
    } for ${quantity === null ? "" : quantity} iPhone in ${
      color === null ? "" : color
    }. Thank you!  `;
    const encodedMessage = encodeURIComponent(message);

    // Replace 'PHONE_NUMBER' with the actual phone number (including country code)
    const phoneNumber = "+918484091132"; // e.g., '919876543210' for India
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add Details
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="target"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Target Price
              </label>
              <div className="mt-2">
                <input
                  id="target"
                  name="target"
                  type="number"
                  required
                  onChange={(e) => setGetTarget(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Quantity
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  required
                  onChange={(e) => setQuantity(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="color"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Color
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="color"
                  name="color"
                  type="text"
                  required
                  onChange={(e) => setColor(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit" // Use type="submit" to trigger form submission
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Enquire
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
