import React from "react";

const PizzaForm = () => {
  console.log("PizzaForm Component has fired!");

  return (
    <div>
      <form id="pizza-form">
        <div className="inputGroup">
          <label htmlFor="name">Name: </label>
          <input
            id="name-input"
            name="name"
            type="text"
            placeholder="Your Name"
            // value={}
            // onChange={}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="size">Select Your Size: </label>
          <select
            id="size-dropdown"
            name="size"
            // value={}
            // onChange={}
          >
            <option value="">-- Select Size --</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
        <div className="inputGroup">
          <h4>Toppings:</h4>
          <label htmlFor="mushrooms">
            Mushrooms
            <input
              name="mushrooms"
              type="checkbox"
              // value={}
              // onChange={}
            />
          </label>
          <label htmlFor="onions">
            Onions
            <input
              name="onions"
              type="checkbox"
              // value={}
              // onChange={}
            />
          </label>
          <label htmlFor="pineapples">
            Pineapples
            <input
              name="pineapples"
              type="checkbox"
              // value={}
              // onChange={}
            />
          </label>
          <label htmlFor="sausages">
            Sausages
            <input
              name="sausages"
              type="checkbox"
              // value={}
              // onChange={}
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
            // value={}
            // onChange={}
          />
        </div>
        <div>
          <input
            id="order-button"
            type="submit"
            disabled={true}
            value="Place Order Now!"
          />
        </div>
      </form>
    </div>
  );
};

export default PizzaForm;
