import React from 'react';
import './MyStyle.css' //같은 폴더일 경우 ./
import img1 from '../image/test.jpg';
import img2 from '../image/test1.jpg';

function FirstApp(props) {
    
    //스타일을 변수에 지정
    const styleImg1={
        width:'200px',
        border:'5px solid green',
        marginTop:'20px'
    }
    
    return (


        //기본적으로 있는 App.css는 그냥 className안에 class명 써도 가져올 수 있으나,
        //내가 생성한 MyStyle은 import를 받아야 가져올 수 있다.
        <div>

            <h2 className='line2'>FirstApp Component!!</h2>
            <div style={{fontSize:'25px',marginLeft:'100px',backgroundColor:'lightgray'}}>
                안녕~ 오늘은 목요일이야!
            </div>

            {/* {src의 이미지는 import} */}
            <img src={img1} style={styleImg1}/>
            <img src={img2} style={{width:'200px',border:'3px dotted black', marginLeft:'50px'}}/>
            {/* public image는 직접 호출 가능 */}
            <h3>public image</h3>
            <img src='../image2/sungiup.png'/>
        
        </div>
    );
}

export default FirstApp;