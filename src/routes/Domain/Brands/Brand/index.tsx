import { useParams } from "react-router-dom";

export default () => {
    const { brandId } = useParams();


    return <div>


        <p>{brandId}</p>
    </div>
}