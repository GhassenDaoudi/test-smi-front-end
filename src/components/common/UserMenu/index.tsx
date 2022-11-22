import "./index.css"
export default ({ name, imageURL }: { name: string, imageURL: string }) => {


    return (<div className="user-container" >
        <div  >
            <img src={imageURL} style={{ borderRadius: "50%" }} width="60px" />

        </div>

        <p className="user-username" >{name}</p>
    </div>)

}