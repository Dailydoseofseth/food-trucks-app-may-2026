import { useState, useEffect } from "react";
import "../App.css";

function Home() {
  const [foodTrucks, setFoodTrucks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFoodTrucks() {
      try {
        const response = await fetch("/api/get-all-food-trucks");

        if (!response.ok) {
          throw new Error("Failed to load food truck records.");
        }

        const data = await response.json();
        console.log(data);
        setFoodTrucks(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      }
    }

    fetchFoodTrucks();
  }, []);

  return (
    <div className="home-container">
      <h1 className="page-title">All Food Trucks</h1>
      <h3 className="truck-counter">
        Total number of food trucks: {foodTrucks.length}
      </h3>

      {error && (
        <p className="error-message">Error connection issue: {error}</p>
      )}

      <div className="truck-grid">
        {foodTrucks.map((truck) => (
          <div key={truck.id} className="truck-card">
            <h2 className="truck-name">{truck.name}</h2>

            <div className="card-details">
              <p>
                <strong>Id:</strong> {truck.id}
              </p>
              <p>
                <strong>Location:</strong> {truck.current_location}
              </p>
              <p>
                <strong>
                  <mark>Daily Special:</mark>
                </strong>{" "}
                {truck.daily_special}
              </p>
              <p>
                <strong>Slogan:</strong> "{truck.slogan}"
              </p>
              <p>
                <strong>Has Vegan Options:</strong>{" "}
                {truck.has_vegan_options ? "Yes ✅" : "No ❌"}
              </p>
              <p>
                <strong>Price Level:</strong> {truck.price_level}
              </p>
              <p>
                <strong>Rating:</strong> {truck.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
