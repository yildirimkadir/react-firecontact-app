import React, { useEffect } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { useFetch, deleteUser } from "../utils/firebase";

const Contact = ({ editUser }) => {
  const { isLoading, contactList } = useFetch();
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
          {isLoading ? (
            <tr>
              <td scope="row">Loading</td>
            </tr>
          ) : contactList?.length === 0 ? (
            <tr>
              <td scope="row">Result not found</td>
            </tr>
          ) : (
            contactList?.map((item, index) => (
              <tr>
                <td scope="row">{item.username.toUpperCase()}</td>
                <td>{item.phone}</td>
                <td>{item.gender}</td>
                <td className="delete" onClick={deleteUser(item.id)}>
                  <RiDeleteBack2Fill />
                </td>
                <td
                  scope="col-1"
                  className="edit"
                  onClick={() =>
                    editUser(
                      item.id,
                      item.username,
                      item.phoneNumber,
                      item.gender
                    )
                  }
                >
                  <FaUserEdit />
                </td>
              </tr>
            ))
          )}
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
