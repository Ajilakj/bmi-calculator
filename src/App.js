import React, {useState} from 'react';
import Slider from "react-range-slider"

function App() {
  let [height, setHeight] = useState("");
  let [weight, setWeight] = useState("");
  let [heightErr, setHeightErr] = useState("");
  let [weightErr, setWeightErr] = useState("");
  let [bmiValue, setBmiValue] = useState("");
  let [bmiText, setBmiText] = useState("");
  let [text, setText] = useState("");

  return (
    <div id="container">
      <div id="title">
        <h1>Calculate your Body Mass Index</h1>
      </div>
      <form>
        <div className="unit">
          <p> Height</p>
        </div>
        <input type="number" name="height" step="1" placeholder="cm" min="" max="" value=""
        // onChange={} onKeyPress={}
        />
        <div className="error"></div>
        <div className="slider">
          <Slider/>
        </div>
        <br/>
        <div className="unit">
          <p> Weight</p>
        </div>
        <input type="number" name="weight" step=".5" placeholder="kg" min="" max="" value=""
        // onChange={} onKeyPress={}
        />
        <div className="error"></div>
        <div className="slider">
          <Slider/>
        </div>
        <br/>
        <div id="buttons-container">
          <button className="button">Calculate</button>
          <br/>
          <button className="button">Clear</button>
        </div>
      </form>
      <div>
        <div id="result-top-text">
          <p>Your Current BMI : {bmiValue}</p>
        </div>
        <div id="bmi-text">
          <p>{bmiText}</p>
        </div>
        <div id="text">
          Body Mass Index, abbreviated BMI is a key index for relating wight to height.
          <br/>
          BMI is a person's weight in kilograms (kg) divided by his/her height in meters squared. The National Institute of Health now defines normal weight, overweight and obesity according to BMI rather than the traditional height/ weight charts.
          <ul>
            <li>Overweight is a BMI of 25 - 29.9</li>
            <li>Obesity is a BMI of 30 or more</li>
          </ul>
          A very muscular person might have a high BMI without health risks.
        </div>
      </div>
    </div>
  );
}

export default App;
