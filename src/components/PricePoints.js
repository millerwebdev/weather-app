import PricePoint from "./subcomponents/PricePoint"

const PricePoints = ({ headline, desc, updateDownloads, cardToggle }) => {
    return (
        <section className="price-points">
            <div className="wrapper">
                <h3>{headline}</h3>
                <p>{desc}</p>
                <div className="flex-wrap">
                    <PricePoint
                        cardToggle={cardToggle}
                        planName="Essentials"
                        pricePlan="FREE!"
                        planDesc="This Essentials plan will get you started with everything you need for absolutely NO fees."
                        btnTxt="Download App"
                        updateDownloads={updateDownloads}
                    />
                    <PricePoint
                        cardToggle={cardToggle}
                        planName="Pro"
                        pricePlan="$5 / Month"
                        planDesc="Upgrade your experience with Advanced Weather Tracking Tools"
                        btnTxt="Sign Up Now"
                    />
                </div>
            </div>
        </section>
    )
}

export default PricePoints
