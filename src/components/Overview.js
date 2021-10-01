import Breakdown from './Breakdown';
const Overview = ({headline, bodycopy}) => {
    return (
        <section className="overview">
            <div className="wrapper">
                <div className="col">
                    <h3>{headline}</h3>
                    <p>{bodycopy}</p>
                    <a href="/" className="btn">Learn More</a>
                </div>
                <div className="col breakdown">
                    <Breakdown />
                </div>
            </div>
        </section>
    )
}

export default Overview
