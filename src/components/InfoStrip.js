const InfoStrip = ({ classes, imgsrc, title, text }) => {
    return (
        <section className={'infostrip ' + classes}>
            <div className="wrapper">
                <figure>
                    <img src={imgsrc} />
                    <figcaption>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}

export default InfoStrip
