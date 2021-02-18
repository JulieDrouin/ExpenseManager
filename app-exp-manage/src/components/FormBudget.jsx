import React, { useState, useEffect } from "react";
import Toggle from "./Toggler";
import { Form, Button, Card } from "react-bootstrap";

const FormBudget = () => {
  const [gain, setGain] = useState({
    name: "",
    value: 0,
  });
  const [isErrorMessageDisplayed, setErrorMessageDisplayState] = useState(
    false
  );

  useEffect(
    function () {
      if (gain.name.length > 30) {
        // Si le pseudo mesure plus de 8 caractères de long
        setErrorMessageDisplayState(true); // Afficher le message d'erreur
      } else {
        setErrorMessageDisplayState(false); // Sinon ne pas l'afficher
      }
    },
    [gain.name]
  );

  function updateNamegain(event) {
    setGain({
      ...gain,
      name: event.target.value,
    });
  }
  function updateValuegain(event) {
    setGain({
      ...gain,
      value: event.target.value,
    });
  }

  return (
    <>
      <Card.Text
        className="Section-Form-Gain"
        style={{ backgroundColor: "#48D1CC" }}
      >
        <Card.Header>Formulaire d'ajout du budget</Card.Header>
        <Form>
          <Form.Group controlId="formGridCity">
            <Form.Label>Ajouter un gain:</Form.Label>
            <Form.Control
              className=""
              type="text"
              placeholder="Entrez un gain"
              name="name"
              id="name"
              value={gain.name || ""}
              onChange={updateNamegain}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formGridCity">
            <Form.Label>Valeur</Form.Label>
            <Form.Control
              className=""
              type="text"
              name="value"
              id="value"
              value={gain.value || 0}
              onChange={updateValuegain}
              type="text"
              placeholder="Entrez sa valeur"
            />
          </Form.Group>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Text>
      <p>
        j'ai recu <strong>{gain.name}</strong> qui a pour valeur :{" "}
        <strong>{gain.value}</strong> €
      </p>
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
