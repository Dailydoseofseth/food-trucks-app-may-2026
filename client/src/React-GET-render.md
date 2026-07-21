# **React GET REQ & Render**
Today we're learning how to send a GET request and display the data. We'll use two React hooks, but our focus is the GET request."
---


> import { useState, useEffect } from "react";


> function Home() {
> const [foodTrucks, setFoodTrucks] = useState([]);

> useEffect(() => {

    async function getFoodTrucks() {
      const response = await fetch("/api/get-all-food-trucks");
      const data = await response.json();
      setFoodTrucks(data);
    }

> getFoodTrucks();
> }, []);

> return (

>    <div>
>      {foodTrucks.map((truck) => (
>        <p key={truck.id}>{truck.name}</p>
>     ))}
>    </div>

> );
> }

> export default Home;
<span style="color:yellow;"></span>
