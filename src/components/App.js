import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import VisibilityFilters from "./VisibilityFilters";
import ClearCompletedButton from "./ClearCompleted";
import ItemsCount from "./ItemsCount";
import CompleteAllButton from "./CompleteAllButton";
import "normalize-css/normalize.css";
import "../styles/main.scss";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Todo App</h1>
        <ClearCompletedButton />
        <AddOption />
        <Options />
        <ItemsCount />
        <VisibilityFilters />
        <CompleteAllButton />
      </div>
    );
  }
}
