import React, { useEffect } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { useFetch, DeleteUser } from "../utils/firebase";

const Contact = ({ editUser }) => {
  const { contactList } = useFetch();
  //   console.log(contactList[0].id);
  return (
    <div className=" contact">
      <h1 className="text-success">Contact List</h1>
      <table className="table-contact table">
        <thead className="">
          <tr>
            <th scope="row">Username</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {contactList?.map((item, index) => (
            <tr>
              <td scope="row">{item.username}</td>
              <td>{item.phone}</td>
              <td>{item.gender}</td>
              <td className="delete" onClick={() => DeleteUser(item.id)}>
                <RiDeleteBack2Fill />
              </td>
              <td
                scope="col-1"
                className="edit"
                onClick={() =>
                  editUser(item.id, item.username, item.phone, item.gender)
                }
              >
                <FaUserEdit />
              </td>
            </tr>
          ))}
          {/* {list?.map((item) => {
            const { id, userName, phone, gender } = item;
            return (
              <tr>
                <td scope="row">{userName}</td>
                <td>{phone}</td>
                <td>{gender}</td>
                <td className="delete">
                  <RiDeleteBack2Fill />
                </td>
                <td scope="col-1" className="edit">
                  <FaUserEdit />
                </td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;
