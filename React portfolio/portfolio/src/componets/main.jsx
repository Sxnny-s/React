import React from 'react';
import "./styles.css"
import expense from "./assets/expense.png"; 
import run from "./assets/run.png"



const Main = () => {
  return (
    <div className="app-container">
      
      <header className="header">
        <h1>Welcome to My React Portfolio</h1>
      </header>

      
      <section className="projects">
        {/* <h2>My Projects</h2> */}
        
        <div className="project">
          <h3>Project 1: Workout Tracker App</h3>
          <p>A web-based application to track and manage personal expenses.</p>
          <div>
            <img src={run} alt="" />
          </div>
          <a href="https://fullstack-run-production.up.railway.app/" target="_blank" >
            View Project
          </a>
        </div>

        <div className="project">
          <h3>Project 2: Expense Tracker App</h3>
          <p>A web-based application to track and manage personal expenses.</p>
          <div>
            <img src={expense} alt="" />
          </div>
          <a href="https://fullsstack-expense-production.up.railway.app/login" target="_blank">
            View Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Main;
