

:root {
    --primary-color: #3498db;
    --secondary-color: #f1c40f;
    --background-color: #f8f8f8;
    --border-color: #ccc;
    --border-radius: 5px;
    --font-family: sans-serif;
  }
  
  /* Global styles */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: var(--font-family);
    font-size: 18px;
    line-height: 1.5;
    color: #333;
    background-color: var(--background-color);
  }
  
  h1 {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 36px;
    color: var(--primary-color);
  }
  
  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 24px;
    color: var(--primary-color);
  }
  
  p {
    margin-bottom: 20px;
  }
  
  /* Specific styles */
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .card-button {
    position: relative;
    display: inline-block;
    margin: 10px;
    width: 200px;
    height: 50px;
    background-color: var(--background-color);
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius);
    color: #333;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }
  
  .card-button:hover {
    background-color: var(--primary-color);
    color: #fff;
  }
  
  .card-button:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    background-color: var(--primary-color);
    transition: all 0.5s ease-in-out;
  }
  
  .card-button:hover:before {
    transform: translateY(0);
  }
  
  .card-details {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 0;
    background-color: var(--background-color);
    border: 2px solid var(--border-color);
    border-top: none;
    border-radius: var(--border-radius);
    color: #333;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
  }
  
  .card-details.show {
    height: 200px;
  }
  