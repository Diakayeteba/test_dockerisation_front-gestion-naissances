import Message from "../../components/Message";
type Message = {
     id: string,
     text: string
};
type Props={
    messages: Message[]
       
    
};
function Messages (props: Props){
        const messages = props.messages;
        return  messages.map((message: Message) => <Message text ={message.text} />);
        
};

export default Messages;