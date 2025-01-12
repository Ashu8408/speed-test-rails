import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


function PlacesList() {
  //Show loading
  //loaded places array

  const [loading, setLoading] = useState(true);
  const [loadedPlaces, setloadedPlaces] = useState([]);

  useEffect(() => {
    //hit the server to get places list
    const apiEndpoint = "/api/places";

    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setloadedPlaces(data["places"]);
        setLoading(false);
      });
  }, []);

  const loadingSection = <div>Loading page...</div>;
  const tableHeaderclass="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left"
  const dataSection = loadedPlaces.map((place, index) => (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead>
          <tr>
            <th className={tableHeaderclass}>Name</th>
            <th className={tableHeaderclass}>City</th>
            <th className={tableHeaderclass}>Recent Upload Speed</th>
            <th className={tableHeaderclass}>Recent Upload Speed Units</th>
            <th className={tableHeaderclass}>Number of Measurements</th>
          </tr>
        </thead>
        <tbody>
          {loadedPlaces.map((place, index) =>{
            <tr key={index}>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-nowrap">{place.name}</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-nowrap">{place.city}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-nowrap">{place.latest_download_speed}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-nowrap">{place.latest_download_units}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-nowrap">{place.number_of_measurements}</p>
              </td>

            </tr>
          })}
          <tr>
            <td>{place.name}</td>
            <td>{place.city}</td>
            <td>{place.latest_download_speed}</td>
            <td>{place.latest_download_units}</td>
            <td>{place.number_of_measurements}</td>
          </tr>
        </tbody>
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
