body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f4;
}

.stopwatch-container {
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#time-display {
    font-size: 48px;
    margin: 20px 0;
}

.controls {
    margin: 20px 0;
}

button {
    font-size: 16px;
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
}

button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
}

#lap-list {
    list-style-type: none;
    padding: 0;
}

#lap-list li {
    padding: 5px;
    background-color: #f4f4f4;
    margin: 5px 0;
    border-radius: 5px;
}
