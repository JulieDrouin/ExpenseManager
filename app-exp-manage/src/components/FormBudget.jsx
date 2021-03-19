import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const FormBudget = () => {
  const gains = {
    name: "Salaire",
    value: 3000
  }

  // const [gains, setGain] = useState({
  //   name: "Salaire",
  //   value: 3000,
  // });
  const [newGain, setNewGains] = useState({ gains });

  const [isErrorMessageDisplayed, setErrorMessageDisplayState] = useState(
    false
  );

  // useEffect(
  //   function () {
  //     if (gains.name.length > 30) {
  //       // Si le name mesure plus de 30 caractères de long
  //       setErrorMessageDisplayState(true); // Afficher le message d'erreur
  //     } else {
  //       setErrorMessageDisplayState(false); // Sinon ne pas l'afficher
  //     }
  //   },
  //   [gains.name]
  // );

  // function handleChangeFields(event) {
  //   setGain({
  //     ...gains,
  //     [event.target.name]: event.target.value,
  //     [event.target.value]: event.target.value,
  //   });
  // }
  // function handleChangeFields(event) {
  //   setGain(gains => ({
  //     ...gains,
  //     [event.target.name]: event.target.value,
  //     [event.target.value]: event.target.value,}));
  // }
  function handleChangeFields(event) {
    setNewGains({
      ...newGain,
      [event.target.name]: event.target.value,
      [event.target.value]: event.target.value,
    });
  }

  // const contacts = gains.map((elem) => < div > {elem} < /div>)
  return (
    <>
      <Form style={{ backgroundColor: "#48D1CC"}}>
        <Form.Group controlId="formName">
          <Form.Label>Ajouter un gain:</Form.Label>
          <Form.Control
            className=""
            type="text"
            placeholder="Entrez un gain"
            name="name"
            value={newGain.name || ""}
            onChange={handleChangeFields}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formValue">
          <Form.Label>Sa valeur :</Form.Label>
          <Form.Control
            className=""
            type="text"
            name="value"
            value={newGain.value || ""}
            onChange={handleChangeFields}
            type="text"
            placeholder="Entrez sa valeur"
          />
        </Form.Group>
        <Button variant="info" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        j'ai recu <strong>{newGain.name}</strong> qui a pour valeur :{" "}
        <strong>{newGain.value}</strong> €
      </p>
      <ul>
        {/* {gains.map((gain, index) => <p key={index}>{gain}</p>)} */}
        {/* {Object.keys(gain).map((elem, index) => (
          <div key={index}>
            La clé est => {index.elem} et sa valeur => {gain[elem]},
          </div>
        ))}*/}
        {Object.entries(newGain).forEach(([key, value]) => {
          console.log(`${key} ${value}`);
          // .map(([key, elem]) => (
          //   <div key={key}>
          //     {key} => {elem} {elem.value}
          //   </div>
        })}
        {/* // ))} */}
          {/* <li>{newGain}</li> */}
        <li>
          {newGain.name}: {newGain.value} €
        </li>
      </ul>
    </>
  );
};
export default FormBudget;

{
  /* <section className="Section-Form-Gain" style={{ backgroundColor: "#FFD700" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Formulaire d'ajout du budget</h2>
          <label htmlFor="addGain">
            Ajouter un gain:
            <input
              type="text"
              name="addGain"
              id="addGain"
              ref={register({required: true})}
            />
          </label>
          <button>Ajouter</button>
        </form>
      </section> */
}
