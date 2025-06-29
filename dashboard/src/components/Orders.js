import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrder").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  const handleSell = async (stock) => {
    try {
      const response = await fetch("http://localhost:3002/sell", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stock),
      });

      const data = await response.json();
      alert(data.message || "Sold successfully!");

      // Update the UI
      setAllOrders(prevOrders => prevOrders.filter(o => o._id !== stock._id));
    } catch (error) {
      console.error("Sell error:", error);
    }
  };



  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td><button onClick={() => handleSell(stock)}>Sell</button></td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="orders">
        <div className="no-orders">
          {/* <p>You haven't placed any orders today</p> */}

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Orders;
