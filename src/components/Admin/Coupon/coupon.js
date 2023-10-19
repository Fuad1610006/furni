import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Layout/dashboardFooter";

export default function Coupon() {
  const [coupons, setCoupons] = useState([]);
  const [inputs, setInputs] = useState({
    id: "",
    coupon_code: "",
    discount: "",
  });

  useEffect(() => {
    getDatas();
  }, []);

  // Fetch coupons from the server
  function getDatas() {
    axios.get(`${global.config.apiUrl}coupon`).then((response) => {
      setCoupons(response.data.data);
    });
  }

  // Delete a coupon
  const deleteUser = (id) => {
    axios.delete(`${global.config.apiUrl}coupon/delete/${id}`).then(() => {
      getDatas();
    });
  };

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  // Handle file input changes (if needed)
  const onFileChange = (e) => {
    // Handle file input changes here
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("coupon_code", inputs.coupon_code);
    formData.append("discount", inputs.discount);

    if (inputs.id) {
      // Update an existing coupon
      axios
        .put(`${global.config.apiUrl}coupon/update/${inputs.id}`, formData)
        .then(() => {
          getDatas();
          clearData();
        });
    } else {
      // Create a new coupon
      axios.post(`${global.config.apiUrl}coupon/create`, formData).then(() => {
        getDatas();
        clearData();
      });
    }
  };

  // Clear input fields
  const clearData = () => {
    setInputs({
      id: "",
      coupon_code: "",
      discount: "",
    });
  };

  // Populate the form for editing a coupon
  function getSingleCoupon(coupon) {
    clearData(); // Clear previous input values
    setInputs(coupon);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>
              <small>Coupon List</small>
            </h1>
            <div className="row">
              <div className="col-2 offset-sm-10">
                <button
                  onClick={clearData}
                  id="modelbutton"
                  type="button"
                  className="btn btn-primary btn-sm float-end"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  Add Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Coupon Code</th>
                  <th>Discount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {coupons.length > 0 ? (
                  coupons.map((coupon, key) => (
                    <tr key={key}>
                      <td>{coupon.id}</td>
                      <td>{coupon.coupon_code}</td>
                      <td>{coupon.discount}</td>
                      <td>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-primary me-2"
                          onClick={() => getSingleCoupon(coupon)}
                        >
                          Edit
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-danger btn-xs"
                          onClick={() => deleteUser(coupon.id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No coupons available</td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="modal" id="myModal">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Coupon Data</h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  <div className="modal-body">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Coupon Code</label>
                            <input
                              value={inputs.coupon_code}
                              type="text"
                              className="form-control"
                              name="coupon_code"
                              onChange={handleChange}
                            />
                            <input
                              value={inputs.id}
                              type="hidden"
                              name="id"
                            />
                          </div>
                        </div>

                        <div className="col-sm-4">
                          <div className="mb-3">
                            <label className="form-label">Discount</label>
                            <input
                              type="text"
                              className="form-control"
                              name="discount"
                              value={inputs.discount}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3 offset-sm-3">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                        <div className="col-sm-3">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
