import { FaAward, FaSun, FaUmbrellaBeach } from 'react-icons/fa';
import BreakdownItem from './subcomponents/BreakdownItem';
const Breakdown = () => {
    return (
        <>
            
            <BreakdownItem
            icon={<FaAward />}
            title="Fast"
            text="No slow, pesky load times. Enjoy premium speed." />
            
            <BreakdownItem
            icon={<FaSun />}
            title="On-The-Go"
            text="Take us anywhere in the World!" />
            
            <BreakdownItem
            icon={<FaUmbrellaBeach />}
            title="Accurate"
            text="Get weather updates all the way down to the minute." />
        </>
    )
}

export default Breakdown
