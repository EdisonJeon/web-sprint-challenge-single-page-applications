import React from "react";

const PizzaForm = (props) => {
  console.log("PizzaForm Component has fired!");
  const { handleChange, newOrder, disabled, formValues, formErrors } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    newOrder();
  };

  const onChange = (e) => {
    let { name, value, checked, type } = e.target;
    handleChange(name, (value = type === "checkbox" ? checked : value));
  };

  return (
    <div>
      <form id="pizza-form" onSubmit={onSubmit}>
        <div className="inputGroup">
          <label htmlFor="name">Name: </label>
          <input
            id="name-input"
            name="name"
            type="text"
            placeholder="Your Name"
            value={formValues.name}
            onChange={onChange}
          />
          {formErrors.name && (
            <div className="validation">{formErrors.name}</div>
          )}
        </div>
        <div className="inputGroup">
          <label htmlFor="size">Select Your Size: </label>
          <select
            id="size-dropdown"
            name="size"
            value={formValues.size}
            onChange={onChange}
          >
            <option value="">-- Select Size --</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
          {formErrors.size && (
            <div className="validation">{formErrors.size}</div>
          )}
        </div>
        <div className="inputGroup">
          <h4>Toppings:</h4>
          <label htmlFor="mushrooms">
            Mushrooms
            <input
              name="mushrooms"
              type="checkbox"
              checked={formValues.mushrooms}
              onChange={onChange}
            />
          </label>
          <label htmlFor="onions">
            Onions
            <input
              name="onions"
              type="checkbox"
              checked={formValues.onions}
              onChange={onChange}
            />
          </label>
          <label htmlFor="pineapples">
            Pineapples
            <input
              name="pineapples"
              type="checkbox"
              checked={formValues.pineapples}
              onChange={onChange}
            />
          </label>
          <label htmlFor="sausages">
            Sausages
            <input
              name="sausages"
              type="checkbox"
              checked={formValues.sausages}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="inputGroup">
          <label htmlFor="specialReq">Special Requests? </label>
          <input
            id="special-text"
            name="specialReq"
            type="text"
            placeholder="e.g. extra hot flakes"
            value={formValues.specialReq}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            id="order-button"
            type="submit"
            disabled={!disabled}
            value="Place Order Now!"
          />
        </div>
      </form>
    </div>
  );
};

export default PizzaForm;
