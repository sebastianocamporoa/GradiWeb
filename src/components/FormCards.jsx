import React, { useState } from "react";
import "@fontsource/poppins";
import "./styles.css";
import Cards from "react-credit-cards";
import CreditCardInput from "react-credit-card-input";

import "react-credit-cards/es/styles-compiled.css";

export const FormCards = ({ setHandleSubmit, pushError = () => null }) => {
  const [focus, setFocus] = useState("");
  const [cvc, setCvc] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [displayedCardName, setDisplayedCardName] = useState("");

  const handleChangeCard = (e) => {
    setFocus(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let submitData = { id: new Date().getTime() };
    submitData["expiry"] = expiry;
    submitData["name"] = displayedCardName;
    submitData["security_code"] = cvc;
    submitData["card_number"] = cardNumber;
    setHandleSubmit(submitData);
  };

  return (
    <div key="Payment" className="Payment">
      <div>
        <br />
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={displayedCardName}
          number={cardNumber}
        />
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="input-content">
              <CreditCardInput
                cardCVCInputProps={{
                  onFocus: (e) => handleChangeCard("cvc"),
                  onChange: (e) => {
                    pushError("cardCVC");
                    setCvc(e.target.value);
                  },
                }}
                cardExpiryInputProps={{
                  onFocus: (e) => handleChangeCard("expiry"),
                  onChange: (e) => {
                    pushError("cardExpiry");
                    setExpiry(e.target.value.replace(/\s/g, ""));
                  },
                }}
                cardNumberInputProps={{
                  onFocus: (e) => handleChangeCard("number"),
                  onChange: (e) => {
                    pushError("cardNumber");
                    setCardNumber(e.target.value);
                  },
                }}
                customTextLabels={{
                  invalidCardNumber: "El n??mero de la tarjeta es inv??lido",
                  expiryError: {
                    invalidExpiryDate: "La fecha de expiraci??n es inv??lida",
                    monthOutOfRange:
                      "El mes de expiraci??n debe estar entre 01 y 12",
                    yearOutOfRange:
                      "El a??o de expiraci??n no puede estar en el pasado",
                    dateOutOfRange:
                      "La fecha de expiraci??n no puede estar en el pasado",
                  },
                  invalidCvc: "El c??digo de seguridad es inv??lido",
                  cardNumberPlaceholder: "N??mero de tarjeta",
                  expiryPlaceholder: "MM/AA",
                  cvcPlaceholder: "CVC",
                  zipPlaceholder: "C.P.",
                }}
                fieldStyle={{
                  width: "110%",
                  border: "1px solid #e2e8f0",
                  left: "-5%",
                }}
                inputStyle={{ width: "100%" }}
                onError={(err) => {
                  pushError(err.inputName, true);
                }}
              />

              <input
                type="text"
                name="nameCard"
                className="input-name"
                placeholder="Nombre de la tarjeta"
                pattern="[a-z A-Z-]+"
                required
                onChange={(e) => setDisplayedCardName(e.target.value)}
              />
              <button type="submit">GUARDAR</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default FormCards;
