import ExtendedPlanInfo from "./ExtendedPlanInfo"
const PricePoint = ({ planName, pricePlan, planDesc, btnTxt, updateDownloads, cardToggle }) => {
    return (
        <div className="price-point">
            <h5>{planName}</h5>
            <p className="price-plan">{pricePlan}</p>
            <p className="description">{planDesc}</p>
            <button onClick={updateDownloads} className="btn">{btnTxt}</button>
            <ExtendedPlanInfo cardToggle={cardToggle} title="Daily Weather" subtitle="Hour-by-Hour" />
        </div>
    )
}

export default PricePoint
