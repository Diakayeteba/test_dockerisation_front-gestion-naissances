type Props= {
    firstName? : string;
    lastName? : string;
    email?: string;
    adress?: string;
    phone?: number;
    text : string | number ;
};
function Message(props:Props){
    return (
        <div className="message">
            <p>
                {props.text} {props.firstName} {props.lastName}
            </p> 
            <p>
                {props?.email && ( <span>{props.email}</span>)}
                {props?.adress && ( <span>{props.adress}</span>)}
                {props?.phone ? ( <span>{props.phone}</span>):null}
            </p> 
        </div>
    );
}

export default Message;