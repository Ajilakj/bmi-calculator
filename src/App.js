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
 
const minHeight=95;
const minWeight=220;
const maxHeight=10;
const maxWeight=300;
const slime =18.5;
const normal=24.9;
const fat=29.9;

const handleChangeHeight = (e) =>{
  setHeight =e.target.value;
}

const handleChangeWeight = (e) =>{
  setWeight =e.target.value;
}

const handleChangeHeightSlider = (value) =>{
  setHeight(value);
}
const handleChangeWeightSlider = (value) =>{
  setWeight(value);
}

const handleKeyPresss =(source, event) =>{
  let allowChar=".0123456789";
  let currentChar = event.key;
  let found=false;
  for(let i=0;i<allowChar.length;i++){
    if(currentChar===allowChar[i]){
      found=true;
    }
  }
  if(found===false){
    event.preventDefault();
    return;
  }
  let currentValue = "";
  if(source==="height"){
    currentValue = parseInt(height+currentChar);
    if(currentValue>maxHeight){
      event.preventDefault()
    }else{
      currentValue = parseInt(weight+currentChar);
      if(currentValue>maxWeight){
        event.preventDefault()
      }
    }
    if(currentValue===0){
      event.preventDefault();
    }
  }
};

const classifyResult =(result) => {
  if(result<slime){
    return "slime"
  }
  else if(result<normal){
    return "normal"
  }else if(result<fat){
    return "fat"
  }
  else{
    return "tooFat"
  }

} 

const validate = () =>{
  setHeightErr("");
  setWeightErr("");
  let heightErrStr = "";
  let weightErrStr = "";
  if(!height){
    heightErrStr = "Please Enter some Height"
  }else if(height <= minHeight){
    heightErrStr = "Greater than 95 Please"
  }
  else{
    heightErrStr = "less than 300 Please"
  }

  if(!weight){
    weightErrStr = "Please Enter some Weight"
  }else if(weight <= minWeight){
    weightErrStr = "Greater than 95 Please"
  }
  else{
    weightErrStr = "less than 300 Please"
  }

  if(heightErrStr || weightErrStr){
    setHeightErr(heightErrStr);
    setWeightErr(weightErrStr);
    return false;
  }
  return true;
}
  const calcBmi = (e) =>{
    let hm=height/100;
    if(!validate){
      return;
    }
    let bmi =(weight/(hm*hm)).toFixed(1);
    let resultString ="";
    let chonks = null;
    switch(classifyResult(bmi)){
      case "slime" : {
        resultString = "Your are petty slonky ! Have a KitKat";
        break;
      }
      case "normal" : {
        resultString = "You are okay for now";
        break;
      }
      case "fat" : {
        resultString ="You are getting kind of fat";
        break;
      }
      case "tooFat" : {
        resultString ="You are too fat";
        break;
      }
      default:{}
    }
  setBmiText(resultString);
  setBmiValue(bmi);
  setText("invisibleChonk")
};

const clear = () =>{
  setHeight("");
  setWeight("");
  setBmiValue("");
  setHeightErr("");
  setWeightErr("");
  setText("VisibleChonk");
};

  return (
    <div id="container">
      <div id="title">
        <h1>Calculate your Body Mass Index</h1>
      </div>
      <form>
        <div className="unit">
          <p> Height</p>
        </div>
        <input type="number" name="height" step="1" placeholder="cm" 
        min={maxHeight} max={maxHeight} value={height}
        onChange={handleChangeHeight} onKeyPress={handleKeyPresss}
        />
        <div className="error">{heightErr}</div>
        <div className="slider">
          <Slider min={minHeight} maxHeight={maxHeight} step={1} onChange={handleChangeHeightSlider}/>
        </div>
        <br/>
        <div className="unit">
          <p> Weight</p>
        </div>
        <input type="number" name="weight" step=".5" placeholder="kg" 
        min={minWeight} max={maxWeight} value={weight}
        onChange={handleChangeWeight} onKeyPress={handleKeyPresss.bind(this,"weight")}
        />
        <div className="error">{weightErr}</div>
        <div className="slider">
          <Slider min={minWeight} max={maxWeight} step ={0.5} value={weight} onChange={handleChangeWeightSlider}/>
        </div>
        <br/>
        <div id="buttons-container">
          <button className="button" onClick={(event)=>{
            event.preventDefault();
            calcBmi();
          }}>Calculate</button>
          <br/>
          <button className="button" onClick={clear}>Clear</button>
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
