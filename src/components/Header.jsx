import React from "react";

const Header = ({ title }) => {
  return (
    <div >
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-[#808080] text-[21px] w-full md:block hidden mt-2">
        Determines wire size to meet specific voltage drop limits or calculates
        voltage drop for a specific conductor run.
      </p>
      <p className="text-[#808080] text-[14px] w-full md:block hidden mt-2">
        When sizing conductors, calculations limits wire size to voltage drop
        and NEC ampacity. Voltage Drop Calculator is designed for applications
        using AWG and mm2 sizes only. Enter your values in the calculator below!
      </p>
      <hr className="my-6 w-full"/>
    </div>
  );
};

export default Header;
