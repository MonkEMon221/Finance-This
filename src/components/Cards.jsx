import React from "react";
import Card from "./Card";
import singles from "../assets/single.png";
import doubles from "../assets/double.png";
import triples from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full bg-white py-6 px-4">
      <div className="flex flex-col max-w-[640px] w-full mx-auto bg-white lg:flex-row lg:justify-between lg:items-center lg:max-w-[1240px]">
        <div>
          <Card
            image={singles}
            user="Single"
            price="149"
            storageSize="500"
            maxUser="1"
            uploadSize="2"
            margin="120px"
            btnBg="bg-[#00df69]"
            btnColor="text-black"
          />
        </div>
        <div className="lg:mt-[100px]">
          <Card
            image={doubles}
            user="Double"
            price="149"
            storageSize="500"
            maxUser="1"
            uploadSize="2"
            bg="bg-gray-200"
            btnBg="bg-black"
            btnColor="text-white"
          />
        </div>
        <div>
          <Card
            image={triples}
            user="Triple"
            price="149"
            storageSize="500"
            maxUser="1"
            uploadSize="2"
            btnBg="bg-[#00df69]"
            btnColor="text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
