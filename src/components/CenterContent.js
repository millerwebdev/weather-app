const CenterContent = ( {headline, bodycopy, img} ) => {
    return (
        <section className="center-content">
            <div className="wrapper">
                <figure>
                    <figcaption>
                        <h2>{headline}</h2>
                        <p>{bodycopy}</p>
                    </figcaption>
                    <img src={img} />
                </figure>
            </div>
        </section>
    )
}

export default CenterContent
