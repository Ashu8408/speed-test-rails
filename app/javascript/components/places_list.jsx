import React from "react";
import ReactDOM from "react-dom/client";

class PlacesList extends React.Component {
  render() {
    return (
      <div>Here, the Places list is rendered using React</div>
    );
  }
}

// Render the component into the div with id "places_list_container"
const placesList = ReactDOM.createRoot(
  document.getElementById("places_list_container")
);
placesList.render(<PlacesList />);
