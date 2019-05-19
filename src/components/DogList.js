import React, { Component } from "react";
import "./DogList.css";
import { Link } from "react-router-dom";

export default class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center">Dog List</h1>
        <div className="row">
          {this.props.dogs.map(dog => (
            <div key={dog.name} className="Dog col-lg-4 text-center">
              <img src={dog.src} alt={dog.name} />
              <h3>
                <Link className="underline" to={`/dogs/${dog.name}`}>
                  {dog.name}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
