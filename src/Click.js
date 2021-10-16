import React, { useState } from "react";

function Click() {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const decrementCount = () => {
        if (count > 0) setCount(count - 1);
    };

    const incrementCount = () => {
        setCount(count + 1);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={decrementCount}>Click to decrease by 1</button>
            <button onClick={incrementCount}>Click to increase by 1</button>
            <button onClick={toggleVisibility}>
                {isVisible ? "Hide number" : "Show number"}
            </button>
            {isVisible && (
                <input
                    type="number"
                    name="clicks"
                    value={count}
                    onChange={(event) => {
                        setCount(+event.target.value);
                    }}
                />
            )}
        </div>
    );
}
export default Click