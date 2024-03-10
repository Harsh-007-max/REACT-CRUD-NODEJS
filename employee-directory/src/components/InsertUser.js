import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const apiURL = "http://localhost:8000";

export default function InsertUser(props) {
  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id !==undefined) {
      fetch(`${apiURL}/${id}`)
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, []);

  const inputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      // EmployeeID: props.length,
    });
  };

  const insertUser = () => {
    console.log(data);
    fetch(`${apiURL}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(() =>fetch(`${apiURL}`).then(res => res.json()).then(res => props.setUsers([...res])));
  };

  const updateUser = (id) => {
    fetch(`${apiURL}/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => navigate(-1));
  };

  return (
    <>
      <div className="card m-3" style={{ width: "18rem" }}>
        <div className="card-body container">
            {/* {data.EmployeeID} */}
          <input
            type="text"
            name="Name"
            placeholder="Enter Employee Name"
            // value={id ? data.Name : ""}
            className="form-control mb-2"
            onChange={(e) => {
              inputChange(e);
            }}
          />
          <input
            type="text"
            name="Description"
            placeholder="Enter Employee Description"
            // value={id? data.Description : ""}
            className="form-control mb-2"
            onChange={(e) => {
              inputChange(e);
            }}
          />
          <input
            type="text"
            name="Position"
            placeholder="Enter Employee Position"
            // value={id? data.Position : ""}
            className="form-control mb-2"
            onChange={(e) => {
              inputChange(e);
            }}
          />
          <input
            type="text"
            name="Salary"
            placeholder="Enter Employee Salary"
            // value={id? data.Salary : ""}
            className="form-control mb-3"
            onChange={(e) => {
              inputChange(e);
            }}
          />
          {id ?
            <button
              className="btn btn-primary"
              onClick={() => {
                updateUser(id);
              }}
            >
              Update
            </button>
          : 
            <button
              className="btn btn-primary"
              onClick={() => {
                insertUser();
              }}
            >
              Insert
            </button>
          }
        </div>
      </div>
    </>
  );
}
