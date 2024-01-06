import React, { useState } from 'react';
import img1 from '../image/증명사진.jpg';

function FourthApp(props) {

    const [name,setName]=useState('장순영');
    const [age,setAge]=useState('22');

    return (
        <div>
            <h3 className='alert alert-info'>FourthApp입니다.
            <img src={img1} style={{width:'100px',marginLeft:'10px'}} className='img-thumbnail'/></h3>
            <b style={{fontSize:'30px'}}>이름:{name} <span style={{marginLeft:'20px'}}>나이: {age}세</span></b>
            <br/><br/>
            <button type='button' className='btn btn-info change'
            onClick={()=>{
            
                setName("김영환");
                setAge(20)
                
            }}>값변경</button>
            <button type='button' className='btn btn-danger reset'
            style={{marginLeft:'20px'}} 
            onClick={()=>{
                setName("장순영");
                setAge(22);
            }}>초기화</button>

        </div>
    );
}

export default FourthApp;