import { useState } from "react";

const Info =()=>{
    const [name, setNames]= useState('');
    const[nickname,setnickname] = useState('');

    const onChangeName = e=>{
        setNames(e.target.value);
    }
    const onChangeNickname = e=>{
        setnickname(e.target.value);
    }
    return (
        <div>
            <div>
            <input value={name} onChange={onChangeName}/>
            <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>이름 : {name}</div>
            </div>
            <div>
                <div>별명 : {nickname}</div>
            </div>
    
        </div>
    )
};



export default Info;