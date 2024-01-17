import React from 'react';
import {useState} from 'react';

const Button = ({number,onChangeUnits}) => {
    const [numberOfUnits,setNumberOfUnits] = useState(number);

    function changeUnits(state){
        if(numberOfUnits===0){
          if(state=="decrease"){
            return
          }
          let newUnits = numberOfUnits + 1;
          setNumberOfUnits(newUnits);
          onChangeUnits(newUnits);
        }
        else if(state=="increase"){
            let newUnits = numberOfUnits + 1;
            setNumberOfUnits(newUnits);
            onChangeUnits(newUnits);
        }
        else if(state=="decrease"){
            let newUnits = numberOfUnits - 1;
            setNumberOfUnits(newUnits);
            onChangeUnits(newUnits);
        }
      }
  return (
    
         <div className="flex h-10 w-28  earphones">
                    <button onClick={()=>changeUnits("decrease")} className="w-1/3 hover:text-amber-600">-</button>
                    <button className="w-1/3">{numberOfUnits}</button>
                    <button onClick={()=>changeUnits("increase")} className="w-1/3 hover:text-amber-600">+</button>
        </div>
    
  )
}

export default Button