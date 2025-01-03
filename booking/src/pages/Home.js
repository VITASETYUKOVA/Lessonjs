import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AutoComplete, Input, Button, message, Select } from "antd";
import { fetchDestinationsThunk } from "../store/thunks/fetchDestinationsThunk";
import { setHotels } from "../store/slices/hotelsSlice";
import { hotelsLoader } from "../loaders/hotelsLoader";

const { Option } = Select;
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const destinations = useSelector((state) => state.destinations.list);
  const loading = useSelector((state) => state.destinations.loading);
  const error = useSelector((state) => state.destinations.error);
  const [isFetchingHotels, setIsFetchingHotels] = useState(false);

  useEffect(() => {
    dispatch(fetchDestinationsThunk());
  }, [dispatch]);

  const initialValues = {
    city: "",
    checkIn: "",
    checkOut: "",
    adults: undefined,
    children: undefined,
  };

  const validationSchema = Yup.object().shape({
    city: Yup.string().required("Please select a destination."),
    checkIn: Yup.date().required("Please select a check-in date."),
    checkOut: Yup.date().required("Please select a check-out date."),
    adults: Yup.number().min(1, "At least one adult is required.").required(),
    children: Yup.number().min(0, "Children cannot be negative.").required(),
  });

  const handleSubmit = async (values) => {
    setIsFetchingHotels(true);
    try {
      const hotels = await hotelsLoader();
      dispatch(setHotels(hotels));
      navigate("/hotels");
    } catch (error) {
      message.error("Error fetching hotels.");
      console.error("Error fetching hotels:", error);
    } finally {
      setIsFetchingHotels(false);
    }
  };

  return (
    <div className="home-container" style={{ paddingLeft: "100px" }}>
      {error && <div style={{ color: "red" }}>Error: {error}</div>}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, isSubmitting }) => (
          <Form className="form-container">
            <div
              className="input-row"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                className="form-input"
                style={{ marginRight: "15px", width: "100%" }}
              >
                <AutoComplete
                  options={destinations.map((destination) => ({
                    value: destination.label,
                    key: destination.id,
                  }))}
                  placeholder="Destination"
                  value={values.city}
                  onChange={(value) => setFieldValue("city", value)}
                  loading={loading}
                  style={{ width: "100%" }}
                />
                <ErrorMessage name="city" component="div" className="error" />
              </div>

              <div
                className="form-input"
                style={{ marginRight: "15px", width: "100%" }}
              >
                <Field
                  as={Input}
                  type="text"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  name="checkIn"
                  placeholder="Check In"
                  style={{ width: "100%" }}
                />
                <ErrorMessage
                  name="checkIn"
                  component="div"
                  className="error"
                />
              </div>
              <div
                className="form-input"
                style={{ marginRight: "15px", width: "100%" }}
              >
                <Field
                  as={Input}
                  type="text"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  name="checkOut"
                  placeholder="Check Out"
                  style={{ width: "100%" }}
                />
                <ErrorMessage
                  name="checkOut"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-input" style={{ marginRight: "15px" }}>
                <Select
                  value={values.adults || undefined}
                  onChange={(value) => setFieldValue("adults", value)}
                  placeholder="Adults"
                  style={{ width: "100%" }}
                >
                  {[...Array(10)].map((_, index) => (
                    <Option key={index + 1} value={index + 1}>
                      {index + 1}
                    </Option>
                  ))}
                </Select>
                <ErrorMessage name="adults" component="div" className="error" />
              </div>
              <div className="form-input" style={{ marginRight: "15px" }}>
                <Select
                  value={values.children || undefined}
                  onChange={(value) => setFieldValue("children", value)}
                  placeholder="Children..."
                  style={{ width: "90%" }}
                >
                  {[...Array(10)].map((_, index) => (
                    <Option key={index} value={index}>
                      {index}
                    </Option>
                  ))}
                </Select>
                <ErrorMessage
                  name="children"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-input">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="submit-btn"
                  loading={isSubmitting || isFetchingHotels || loading}
                  disabled={isSubmitting || isFetchingHotels || loading}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <h1>
        Travel to <span style={{ color: "orange" }}>Booking</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default Home;
