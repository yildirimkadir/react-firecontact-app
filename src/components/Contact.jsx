import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" contact d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-success">Contact List</h1>
      <table className="table table-lg">
        <thead className="">
          <tr>
            <th scope="col-4">Username</th>
            <th scope="col-4">Phone Number</th>
            <th scope="col-2">Gender</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kadir Yildirim</td>
            <td>01775953065</td>
            <td>Male</td>
            <td className="delete">
              <RiDeleteBack2Fill />
            </td>
            <td className="edit">
              <FaUserEdit />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
