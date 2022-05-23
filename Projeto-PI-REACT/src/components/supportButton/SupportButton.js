import './SupportButton.css'
import { Link } from 'react-router-dom'

function SupportButton(props) {
    return (
        <>
            <div className={props.class}>
                <Link to={props.link}> <button type="button" className="btn supportButton">{props.title}</button></Link>
            </div>
            
        </>
    )
}


export default SupportButton