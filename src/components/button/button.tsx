

const Button = (props:any) => {
    console.log(props);
    return <button onClick={props.action} className={'unique-button'}>Toggle options</button>
}

export default Button;