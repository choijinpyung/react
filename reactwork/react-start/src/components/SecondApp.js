import React from 'react';
import img1 from '../image/test.jpg';

function SecondApp(props) {
    
    const imgStyle={
        width:'300px',
        borderRadius:'120px'
        
    }

    let helloEle=<h2 className='alert alert-info'>Hello~</h2>;
    
    return (
        <div>
            <h2 className='alert alert-danger'>SecondApp입니다</h2>
            <img src={img1} style={imgStyle}/>
            {helloEle}
            {helloEle}
        </div>
    );
}

export default SecondApp;<h2>SecondApp입니다</h2>