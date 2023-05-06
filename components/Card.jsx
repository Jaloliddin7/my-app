import React, { useEffect, useMemo, useRef, useState } from 'react'
import Ul from './Ul';
import Link from 'next/link';

function Card({  data }) {
    const [num, setNum] = useState(0)
    const [value, setValue] = useState("")
    const [score, setScore] = useState(0)

    useMemo(()=>{
        shuffleArray(data)
    },[])

    
    // let currentQuiz = 0
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
    // shuffleArray(data)
    const formRef = useRef(null);

    const Submit = (event) => {
        if (event.target.value == data[num].correct) {

        }
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Selected option is: ${value}`);
    };

    const handleReset = () => {
        setValue("");
        formRef.current.reset();
    };

    const Click = () => {
        console.log(value);
        
        console.log(score);
        console.log(data.length);
        if (value == data[num].correct ) {
            setScore(prew =>  prew + 1)
        }
        handleReset()
        if (value) {
            setNum(prew => {
                return prew < data.length ? prew + 1 : "tugadi"  
            })
        }
    }

console.log(num);

    return (
        <div className="px-2 flex grad">
           <div className='border-separate mx-auto  w-[50vw] items-center justify-center rounded-2xl py-9  px-5 gr my-[30px]'>
                <h2 className='mb-5 '>{data[num]?.question ? data[num]?.question: `Sizning natijangiz ${score}`}</h2> 
                <hr className='h-1  ' />
                {data[num]?.question ?  <form action="" ref={formRef} key={data[num]?.question} onSubmit={handleSubmit}>
                    <ul className='flex flex-col gap-2 justify-start items-start'>
                        <li className=''>
                            <label className="radio-button">
                                <input onChange={Submit} name='radio' checked={value === data[num]?.a} value={data[num]?.a} type="radio" />
                                <span className="radio"></span>
                                {data[num]?.a}
                            </label>
                        </li>

                        <li className=''>

                            <label className="radio-button">
                                <input onChange={Submit} name='radio' checked={value === data[num]?.b} value={data[num]?.b} type="radio" />
                                <span className="radio"></span>
                                {data[num]?.b}
                            </label>
                        </li>

                        <li className=''>

                            <label className="radio-button">
                                <input onChange={Submit} name='radio' checked={value === data[num]?.c} value={data[num]?.c} type="radio" />
                                <span className="radio"></span>
                                {data[num]?.c}
                            </label>
                        </li>

                        <li className=''>

                            <label className="radio-button">
                                <input name='radio' checked={value === data[num]?.d} value={data[num]?.d} type="radio" onChange={Submit} />
                                <span className="radio"></span>
                                {data[num]?.d}
                            </label>
                        </li>
                    </ul>
                    <input type='button' value={"SUBMIT"} onClick={Click} className='bg-sky-400 mt-5 text-center py-3 px-3 text-xl font-bold text-white hover:bg-lime-500  transition-all 0.5 ease-in rounded-2xl' />

                </form>: <Ul />}
            </div>  
        </div>
    )
}

export default Card

