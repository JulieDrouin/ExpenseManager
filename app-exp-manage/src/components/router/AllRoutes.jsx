import React from "react";
import { Switch, Route } from "react-router-dom";
import ProfilInfo from '../user/ProfilInfo';
// import ProfilNew from '../user/ProfilNew';
// import ProfilEdit from '../user/ProfilEdit';
// import ProfilDelete from '../user/ProfilDelete';

// import GainList from '../gain/GainList';
// import GainNew from '../gain/GainNew';
// import GainEdit from '../gain/GainEdit';
// import GainDelete from '../gain/GainDelete';
// import DepenseList from '../depense/DepenseList';
// import DepenseNew from '../depense/DepenseNew';
// import DepenseEdit from '../depense/DepenseEdit';
// import DepenseDelete from '../depense/DepenseDelete';
// import ShoppingList from '../shopping/ShoppingList';
// import ShoppingNew from '../shopping/ShoppingNew';
// import ShoppingEdit from '../shopping/ShoppingEdit';
// import ShoppingDelete from '../shopping/ShoppingDelete';

import FormBudget from "../FormBudget";


const AllRoutes = (props) => {
  return (
    <Switch>
      <Route exact path="/user/profilInfo" component={ProfilInfo} />
      <Route exact path="/gain/2.gainList" component={FormBudget} />
       <Route exact path="/user/profilInfo" component={ProfilInfo} />
      {/*  <Route exact path="/gain/2.gainList" component={GainList} />
        <Route exact path="/gain/2.gainNew" component={GainNew} />
        <Route exact path="/gain/2.gainEdit" component={GainEdit} />
        <Route exact path="/gain/2.gainDelete" component={GainDelete} />
        <Route exact path="/depense/3.depenseList" component={DepenseList} />
        <Route exact path='/depense/3.depenseNew' component={DepenseNew} />
        <Route exact path="/depense/3.depenseEdit" component={DepenseEdit} />
        <Route exact path="/depense/3.depenseDelete" component={DepenseDelete} />
        <Route exact path="/shopping/4.shoppingList" component={ShoppingList} />
        <Route exact path="/shopping/4.shoppingNew" component={ShoppingNew} />
        <Route exact path="/shopping/4.shoppingEdit" component={ShoppingEdit} />
        <Route exact path="/shopping/4.shoppingDelete" component={ShoppingDelete} /> */}
    </Switch>
  );
};
export default AllRoutes;
