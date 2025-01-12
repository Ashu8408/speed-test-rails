import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function PlacesList() {
  //Show loading
  //loaded places array

  const [loading, setLoading] = useState(true);
  const [loadedPlaces, setloadedPlaces] = useState([]);

  useEffect(() => {
    //hit the server to get places list
    const apiEndpoint = "/api/places"

    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setloadedPlaces(data["places"])
        setLoading(false)
      });
  }, [])

  const loadingSection = <div>Loading page...</div>;
  console.log(loadedPlaces)
  const dataSection = loadedPlaces.map((place, index) => (
    <div key={index}>
      <table>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Recent Upload Speed</th>
          <th>Recent Upload Speed Units</th>
          <th>Number of measurements</th>
        </tr>
        <tr>
          <td>{place.name}</td>
          <td>{place.city}</td>
          <td>{place.latest_download_speed}</td>
          <td>{place.latest_download_units}</td>
          <td>{place.number_of_measurements}</td>
        </tr>
      </table>
    </div>
  ));

  if (loading) {
    return loadingSection;
  } else {
    return dataSection;
  }
}


// Render the component into the div with id "places_list_container"
const placesList = ReactDOM.createRoot(
  document.getElementById("places_list_container")
);
placesList.render(<PlacesList />);
