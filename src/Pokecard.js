
const PokeCard = (props) =>{
    return(
        <div>
           <div>id: {props.id}</div> 
            <div>name:{props.name}</div>
            <div>type:{props.type}</div>
            <div> base_experience: {props.base_experience}</div>
            image:<img src={props.image} />
        </div> 
    )
}

export default PokeCard

