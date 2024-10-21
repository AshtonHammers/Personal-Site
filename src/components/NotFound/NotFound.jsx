import image from "../../assets/images/404.jpg"
import "./NotFound.css"

export default function NotFound() {
    return (
        <div className="not-found">
            <img src={image} alt="404 image" />
            <h1>Page was not found</h1>
        </div>
    )
}