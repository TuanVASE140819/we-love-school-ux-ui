import React, { useState } from "react";
//  modal
import Modal from "react-modal";
import "../../page/index.css";

const Contact1 = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // https://sheet.best/api/sheets/0932fa76-1569-4396-88ee-6f867c0ccdeb
    const response = await fetch(
      "https://sheet.best/api/sheets/0932fa76-1569-4396-88ee-6f867c0ccdeb",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      }
    );

    if (response.ok) {
      setEmail("");
      setMessage("");
      alert("Data sent successfully");
    } else {
      alert("Failed to send data");
    }
  };
  return (
    <section className="text-gray-600 mt-[10rem] body-font relative container mx-auto">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62669.209445251945!2d106.66625306953125!3d10.726940400000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f474b8c17ad%3A0x4dab2b7d48564f5b!2sC%C3%B4ng%20ty%20TNHH%20BLUE%20PINK!5e0!3m2!1svi!2s!4v1710955880540!5m2!1svi!2s"
          style={{}}
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          {/* <p className="leading-relaxed mb-5 text-gray-600">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p> */}
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Nội dung
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
                defaultValue={""}
              />
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              type="submit"
            >
              Gửi
            </button>
          </form>

          {/* <p className="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p> */}
        </div>
      </div>
    </section>
  );
};

export default Contact1;
