import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AppleIcon from '@mui/icons-material/Apple';

function SixApp(props) {

    const [names, setNames] = useState(['진평', '호석', '시온', '현규', '선범']);
    const [irum, setIrum] = useState('');

    //추가 버튼 이벤트
    const btnInsert=()=>{
        setNames(names.concat(irum));
        setIrum('');
    }

    //입력 이벤트
    const textInput=(e)=>{
        setIrum(e.target.value);
    }

    //삭제 이벤트 index번지만 빼고 잘라서 넣음
    const dataRemove=(index)=>{

        console.log("remove:"+index);

        //방법1..slice
        // setNames([
        //     ...names.slice(0, index),
        //     ...names.slice(index + 1, names.length)
        //   ]);

        //방법2..filter
        setNames(names.filter((item, i) => i !== index));
    }

    return (
        <div>
            <h3>SixApp입니다</h3>
            <Alert severity="warning">배열연습 <AppleIcon/></Alert>

            <input placeholder='이름 입력' value={irum} onChange={textInput}/>
            <button type='button' onClick={btnInsert}>추가</button>
            <br/>
            <h4>이름을 더블클릭하면 삭제됩니다</h4>
            <ul>
                {names.map((name,index)=>(
                    <li onDoubleClick={()=>dataRemove(index)}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default SixApp;