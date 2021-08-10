import React from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import { applyNumber, changeOperator, clear, setMemory, applyMemory, clearMemory } from './actions/index'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const handleAddClick = () => {
  //   dispatch(addOne())
  // }

  const handleNumberClick = (number) => {
    dispatch(applyNumber(number))
  }

  const handleOperators = (operator) => {
    dispatch(changeOperator(operator))
  }

  const handleClear = () => {
    dispatch(clear())
  }

  const handleSetMemory = (total) => {
    dispatch(setMemory(total))
  }

  const handleApplyMemory = (number) => {
    dispatch(applyMemory(number))
  }

  const handleClearMemory = (number) => {
    dispatch(clearMemory(number))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={handleSetMemory} value={"M+"}/>
              <CalcButton onClick={handleApplyMemory} value={"MR"}/>
              <CalcButton onClick={handleClearMemory} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>handleNumberClick(1)} value={1}/>
              <CalcButton onClick={()=>handleNumberClick(2)} value={2}/>
              <CalcButton onClick={()=>handleNumberClick(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>handleNumberClick(4)} value={4}/>
              <CalcButton onClick={()=>handleNumberClick(5)} value={5}/>
              <CalcButton onClick={()=>handleNumberClick(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=>handleNumberClick(7)} value={7}/>
              <CalcButton onClick={()=>handleNumberClick(8)} value={8}/>
              <CalcButton onClick={()=>handleNumberClick(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={()=> handleOperators("+")}value={"+"}/>
              <CalcButton onClick={()=> handleOperators("*")} value={"*"}/>
              <CalcButton onClick={()=> handleOperators("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
 