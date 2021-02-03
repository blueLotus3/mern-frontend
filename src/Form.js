import React from "react";

const Form = (props) => {
  //STATE FOR THE FORM
  const [formData, setFormData] = React.useState(props.glove);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); 
    props.handleSubmit(formData); 
    props.history.push("/"); 
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
       placeholder= "Brand"
        type="text"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
      />
      <input
        placeholder="Size"
        type="number"
        name="size"
        value={formData.size}
        onChange={handleChange}
      />
      <input
      placeholder="Img Url"
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}
      />
      <input type="submit" value={props.label} />
    </form>
  );
};

export default Form;
