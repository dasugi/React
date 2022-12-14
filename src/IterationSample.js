import { useState } from "react";


const IterationSample = () =>{
    const [names,setNames] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'호빵'},
        {id:3, text:'눈'},
        {id:4, text:'바람'},
    ]);

    const[inputText,setInputText] = useState('');
    const[nextId,setNextId] = useState(5); //새로운 항목을 추가할때 사용할 id
    const onClick=()=>{
        const nextNames = names.concat({
            id:nextId,
            text:inputText,
        });
        setNextId(nextId+1);
        setNames(nextNames);
        setInputText("");
    }
    const onRemove = id =>{
        const nextNames = names.filter(name => name.id !==id);
        setNames(nextNames);
        
    }
    const nameList= names.map((name,index)=><li key={index} onDoubleClick={()=>onRemove(name.id)}
    >{name.text}</li>);

    const onChange = (e) => setInputText(e.target.value);
    return( 
        <>
        <input value={inputText} onChange={onChange}/>
        <button onClick={onClick}>추가</button>
        <ul>{nameList}</ul>
        </>

    )
/*
    return <ul>{nameList}</ul>
       
    return(
        <ul>
            <li>눈사람</li>
            <li>호빵</li>
            <li>바람</li>
            <li>눈</li>
        </ul>
    );
    */
};

export default IterationSample;