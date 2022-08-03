import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import Contact from "./Contact";
import { AddUser, UpdateUser } from "../utils/firebase";

const initialValues = { username: "", phone: "", gender: "NO INFO" };

const Register = () => {
  //   const [userName, setUserName] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [select, setSelect] = useState("");
  const [list, setList] = useState(initialValues);
  const [isAdd, setIsAdd] = useState("Register");
  //   const [show, setShow] = useState(true);

  const handleClick = () => {
    if (!list.username || !list.phone || !list.gender)
      return alert("Bitte richtig ausfüllen");
    if (list.id) {
      UpdateUser(list);
    } else {
      AddUser(list);
    }

    setList(initialValues);
    setIsAdd("Register");
  };

  const editUser = (id, username, phone, gender) => {
    // setIsAdd("UPDATE");
    setList({ id, username, phone, gender });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setList({ ...list, [name]: value });
  };
  console.log(list);
  return (
    <div className="container-fluid d-flex justify-content-center gap-5 align-items-center flex-wrap">
      <div className="register d-flex flex-column justify-content-center align-items-center">
        <div className="register-head mb-1">
          <h1 className="mb-2 text-success">Register</h1>
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
            name="username"
            value={list.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <BsTelephoneFill size={15} />
            </span>
          </div>
          <input
            type="number"
            className="form-control outline-none"
            placeholder="Phone"
            aria-label="Phone"
            aria-describedby="basic-addon1"
            name="phone"
            value={list.phone}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <select
            className="custom-select w-100 p-2 mb-3"
            id="inputGroupSelect04"
            name="gender"
            value={list.gender}
            onChange={handleChange}
          >
            <option value="">Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-success form-control"
          value="Register"
          onClick={handleClick}
        >
          {isAdd}
        </button>
      </div>
      <div>
        <Contact list={list} setList={setList} editUser={editUser} />
      </div>
    </div>
  );
};

export default Register;
