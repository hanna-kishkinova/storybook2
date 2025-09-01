import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./counter.css";
import {Button} from "./Button";

export const Counter = ({ initialValue = 0 }) => {
    const [count, setCount] = useState(initialValue);

    useEffect(() => setCount(initialValue), [initialValue]);

    return (
        <div className="counter">
            <Button size="medium" primary={true} label="-" onClick={() => setCount(count - 1)} />
            <span className="counter-value">{count}</span>
            <Button size="medium" primary={true} label="+" onClick={() => setCount(count + 1)} />
        </div>
    );
};

Counter.propTypes = {
    initialValue: PropTypes.number,
};
