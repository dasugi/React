/*
import {Component} from "react";

class EventPractice extends Component{
    state={
        message:"",
        username:"",
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message:e.target.value,
        })
    }

    handleClick(e) {
        alert(this.state.message);
        this.setState({
            message:"",
        })
    }
*/

/*
handleChange = (e)=>{
    this.setState({
        [e.target.name]:e.target.value,
    })
}

handleClick = () =>{
    alert(this.state.username + ":" + this.state.message);
    this.setState({
        message:"",
        username:"",
    })
}
handleKeyPress=(e) =>{
    if(e.key === 'Enter'){
        this.handleClick();

    }
}
    render(){
        return(
        <div>
            <h1>이벤트 연습</h1>
            <input
            type="text"
            name="username"
            placeholder="사용자 이름을 입력하세요"
            value={this.state.username}
            onChange={this.handleChange}
            />

            <input
            type="text"
            name="message"
            placeholder="아무글자나 입력하세요"
            value={this.state.message}
            onChange={this.handleChange}
            onKeyPress ={this.handleKeyPress}
            />
            
            <button onClick={this.handleClick}>확인</button>
        </div>
);
    }
}
*/

import { useState } from "react";

const EventPractice = () => {
    /*
    const [username, setUSername] = useState('');
    const [message,setMessage] =useState('');

    const onChangeUsername = e => setUSername(e.target.value);
    const onChangeMessage = e=> setMessage(e.target.value);
    const onClick = ()=>{
        alert(username+" : "+message);
        setUSername('');
        setMessage('');
    };
*/
    const[form, setform] =useState({
        username:"",
        message:"",
    });
    const {username,message} = form;

    const onChange=(e)=>{
        const nextForm = {
            ...form, //기존의 form 내용을 이자리에 복사
            [e.target.name]:e.target.value, //원하는 값을 대체함
        };
        setform(nextForm);
    };
    const onClick =()=>{
        alert(username+":"+message);
        setform({
            username:'',
            message:'',
        });
    };

    const onKeyPress =(e)=>{
        if(e.key ==='Enter'){
            onclick();
        }
    };
    return(
        <div>
            <h1>이벤트 연습</h1>
            <input 
            type="text"
            name="username"
            placeholder="사용자명"
            value={username}
            onChange={onChange}
            />
            <input 
            type="text"
            name="message"
            placeholder="아무글자나 입력해 보세요"
            value={message}
            onChange={onChange}
            onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
        
    );
}

export default EventPractice;