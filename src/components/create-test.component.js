/* eslint-disable no-lone-blocks */
import React, { Component, useState, useRef } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
// import Clock from "./clock-timer.js";


      
const CreateTimer = () => {
  var [start, setStart] = useState(0);
  var [end, setEnd] = useState(120 );
  var [endTest, setEndTest] = useState(false);
  var testRef = useRef(endTest);
  testRef.current = endTest;

  const tick = () => {

    let timer_id = setTimeout(function () {
      tick();
    }, 1000);

    if (start !== end) {
      setStart(start++);
      setEnd(end--);
    } else {
      setEndTest((testRef.current = true));
      clearTimeout(timer_id);
    }

    if (testRef.current) clearTimeout(timer_id);
  };

  return (
    <div>
      <h4>Timer Status: {start} </h4>
      <button className="btn btn-danger" onClick={tick}>
        Start
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setEndTest((testRef.current = true))}
      >
        End
      </button>
    </div>
  );
};

export default class CreateTestExercise extends Component {
  constructor(props) {
    super(props);
    // Binding change method to class CreateExercise
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.questionList= {'1':'',"2":'',"3":''}
    this.state = {
      username: "",
      duration: 0,
      date: new Date(),
      users: [],
      exercises: [],
      questions: [
        {
          0: "1. How to do you define a Ideal machine learning model on basis of algorithm, datasets and computing power?",
          1: ["high recall", "high precision", "precision-recall tradeoff"],
        },
        {
          0: "2. How do you define precision/recall trade-off, how do you handle a datasets prediction with very high precision and low recall?",
          1: [
            "high positve/low threshold",
            "less positive/high threshold",
            "high negative/less threshold",
          ],
        },
        {
          0: "3. If your model's training accuracy is nearly 95 % and test accuracy with 88%?",
          1: ["overfitting", "underfitting", "ideal"],
        },
      ],
      answers: [
        "precision-recall tradeoff",
        "less positive/high threshold",
        "overfitting",
      ],
      selectedOptions_1: "",
      selectedOptions_2: "",
      selectedOptions_3: "",
      selectedOptions:{1:'',2:'',3:''},
      score: 0,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          duration: response.data.duration,
          date: new Date(response.data.date),
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
        });
      }
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
    console.log(this.username, e.target);
  }
  handleAnswer(e) {
    console.log(e)
    return
  }
  onSubmit(e) {
    e.preventDefault();
    // time bouded test-timer
    
      var date = new Date();
      
      let today = date.toLocaleDateString();
      let time = date.toLocaleTimeString()
      console.log(today === "03/06/2021", time, today);
      if (
        today === "04/06/2021" &&
        date.toLocaleTimeString().slice(0, 5) >= "22:23"
      ) {
        return alert("time exceeded, you are not permitted for it");
      }
    let score =0
    for (let i=1; i<= this.state.answers.length;i++){
      let id = String(i)
      if (this.state.answers[i-1]===this.questionList[id]){
        score+=10
      } 
    }
    
    console.log(this.state.selectedOptions_1,this.state.selectedOptions_2)
    this.setState({
      score: score,
    });
  }
  
  render() {
    return (
      <div>
        <CreateTimer> </CreateTimer>
        <h3>Creating test for Exercises</h3>
        <h4>Your Score: {this.state.score}</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              // required
              key={this.state.username}
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map((user) => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-check">
            {this.state.questions.map((question) => {
              return (
                <div className="input-group">
                  <label
                    htmlFor={question[0].length}
                    name={question[0].length}
                    className="mt-2"
                    value={question[0]}
                  >
                    {question[0]}
                  </label>
                  {question[1].map((option) => {
                    return (
                      <div className="input-group">
                        <input
                          className=" mt-2"
                          type="radio"
                          value={option}
                          aria-label="Radio button for following text input"
                          htmlFor={question[0].length}
                          name={question[0].length}
                          key={option.slice(1, 10)}
                          onClick={(e) => {
                            this.questionList[question[0][0]] = e.target.value;
                          }}
                        />
                        {option}
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>

      </div>
    );
  }
}
