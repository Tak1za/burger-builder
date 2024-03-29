import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        Amount: ₹<strong>{props.totalPrice}</strong>
      </p>
      <p>Continue to checkout?</p>

      <Button btnType="Success" clicked={props.purchaseContinued}>
        Continue
      </Button>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
    </Aux>
  );
};

export default orderSummary;
