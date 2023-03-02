import React from "react";
import InputForm from "../../../components/form/InputForm";
import ErrorMessage from "../../../components/form/ErrorMessage";
import TextAreaForm from "../../../components/form/TextAreaForm";
import { BsFillPersonFill } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      {/* Testing Reuseable Components */}
      <h1 className="text-4xl mb-8 text-red-700">
        Testing Reusable Components
      </h1>
      <InputForm
        label={"First Name"}
        placeholder={"Enter first Name"}
        id="firstname"
      />
      <ErrorMessage message="Something went wrong!" />
      <TextAreaForm
        label={"First Name"}
        placeholder={"Enter first Name"}
        id="Lastname"
      />
      <button className="btn_primary flex items-center justify-center ">
        <BsFillPersonFill className="mr-2" />
        <span className="text">Button</span>
      </button>
    </div>
  );
};

export default Home;
