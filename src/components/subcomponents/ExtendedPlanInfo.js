const ExtendedPlanInfo = ({ title, subtitle, iconSrc, cardToggle }) => {
    return (
        <div className="inner-item-wrapper">
        <h6>What's Included <span onClick={cardToggle} className="expand-plan">+</span></h6>
        <div className="inner">
            <figure className="inner-item">
                <img src={iconSrc} />
                <figcaption>
                    <h6>{title}</h6>
                    <p>{subtitle}</p>
                    <ul className="inner-item-list">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </figcaption>
            </figure>
        </div>
    </div>
    )
}

export default ExtendedPlanInfo
