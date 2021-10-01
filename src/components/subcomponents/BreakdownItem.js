const BreakdownItem = ({icon, title, text}) => {
    return (
        <figure className="breakdown-item">
            <span className="icon">{icon}</span>
            <figcaption>
                <h6>{title}</h6>
                <p>{text}</p>
            </figcaption>
        </figure>
    )
}

export default BreakdownItem
