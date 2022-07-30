import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

const Register = () => {
  return (
    <div className="register d-flex flex-column justify-content-center align-items-center">
      <div className="register-head mb-1">
        <h1 className="mb-4 text-success">Register</h1>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <FaUserAlt size={15} />
          </span>
        </div>
        <input
          type="text"
          className="form-control outline-none"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <BsTelephoneFill size={15} />
          </span>
        </div>
        <input
          type="text"
          className="form-control outline-none"
          placeholder="Phone"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group">
        <select
          className="custom-select w-100 p-2 mb-3"
          id="inputGroupSelect04"
        >
          <option value="1">male</option>
          <option value="2">female</option>
          <option value="3">other</option>
        </select>
      </div>
      <input
        type="submit"
        className="btn btn-success form-control"
        value="Register"
      />
    </div>
  );
};

export default Register;
