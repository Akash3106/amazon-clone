import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStatevalue } from "./StateProvider";
import { gettotal } from "./reducer";

function Subtotal() {
  const [{ basket }] = useStatevalue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={gettotal(basket)}
        displayType={"text"}
        thousandseperator={true}
        prefix={"₹"}
      />
      <button type="Submit">Proceed to Cart</button>
    </div>
  );
}

export default Subtotal;
