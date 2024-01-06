import React, { useState } from 'react';

function ThirdApp(props) {

    //상태관리를 위한 변수 설정
    //use가 붙으면 hooks 기능
    //setMessage(변수는 내맘대로 설정한거임)는 수정할 수 있는 동작을 함
    const [message,setMessage]=useState('Happy Day');

    //enter이벤트
    const enterEvent=(e)=>{

        if(e.key==='Enter'){ //e.keyCode===13
            setMessage('');
            e.target.value='';
        }
    }
    return (
        <div>
            <h3 className='alert alert-info'>ThirdApp입니다.</h3>
            <h3 style={{color:'red'}}>{message}</h3>
            <h4>메세지를 입력해주세요</h4>
            <input type='text' className='form-control' style={{width:'300px',fontSize:'2em'}}
            defaultValue={message}

            // function 키워드를 () 표시
            onChange={(e)=>{
                console.log(e.target.value);
            //message변수에 입력값 넣기
            setMessage(e.target.value);
            
            }}
            
            onKeyUp={enterEvent}
            /> 

        </div>
    );
}

export default ThirdApp;