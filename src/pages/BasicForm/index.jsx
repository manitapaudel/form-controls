import React from "react";

import Button from "../../components/atoms/Button";
import Style from "./basic-form.module.scss";

const initialValues = {
  username: "",
  email: "",
  password: "",
};
const Index = () => {
  const [fieldData, setFieldData] = React.useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFieldData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fieldData });
    setFieldData(initialValues);
  };
  return (
    <div className={Style.container}>
      <form className={Style.form} onSubmit={handleSubmit}>
        <div className={Style.input}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={fieldData.username}
            onChange={handleChange}
            placeholder="Enter Username"
            required
          ></input>
        </div>
        <div className={Style.input}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={fieldData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          ></input>
        </div>
        <div className={Style.input}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={fieldData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
          ></input>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Index;
