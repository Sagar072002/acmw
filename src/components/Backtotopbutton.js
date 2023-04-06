import React, { useEffect, useState } from 'react';

const Backtotopbutton = () => {
    const[backtotopbutton,setbacktotopbutton]=useState(false);

    useEffect(()=>{
            window.addEventListener("scroll",()=>{
                if(window.scrollY>400)
                {
                    setbacktotopbutton(true);
                }
                else
                {
                    setbacktotopbutton(false);
                }
            })
    },[])

    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div>
    {backtotopbutton && (<button className='myBtn'onClick={scrollUp}>^</button>)}
    </div>
  )
}

export default Backtotopbutton