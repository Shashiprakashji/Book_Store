import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold">
            Hi! welcome to here all Learn{" "}
            <span className="text-pink-500">Something everyday</span>
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eaque
            iure totam error, aut voluptas velit natus vitae est nisi.
            Reiciendis quam error esse eos minus consequatur perferendis quaerat
            soluta.
          </p>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="daisy@site.com" />
          </label>
        </div>
        <button className="btn btn-secondary mt-6">Secondary</button>
      </div>
      <div className=" order-1 w-full md:w-1/2">
        <img src={banner} className="w-92 h-92 mt-12 md:mt-30" alt="" />
      </div>
    </div>
  );
}

export default Banner;
