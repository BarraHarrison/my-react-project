import React, { useState } from "react";

function State() {
    // Array of names
    let names = [
        "David", "John", "Mary", "Sarah", "Michael", "Jessica", "James", "Patricia", "Robert", "Linda",
        "William", "Barbara", "Richard", "Elizabeth", "Joseph", "Jennifer", "Thomas", "Maria", "Charles", "Susan",
        "Christopher", "Margaret", "Daniel", "Dorothy", "Matthew", "Lisa", "Anthony", "Nancy", "Mark", "Karen",
        "Paul", "Betty", "Steven", "Helen", "Andrew", "Sandra", "Kenneth", "Donna", "Joshua", "Carol",
        "Kevin", "Ruth", "Brian", "Sharon", "George", "Michelle", "Edward", "Laura", "Ronald", "Sarah",
        "Timothy", "Kimberly", "Jason", "Deborah", "Jeffrey", "Jessica", "Ryan", "Shirley", "Jacob", "Cynthia",
        "Gary", "Angela", "Nicholas", "Melissa", "Eric", "Brenda", "Stephen", "Amy", "Jonathan", "Anna",
        "Larry", "Rebecca", "Justin", "Virginia", "Scott", "Kathleen", "Brandon", "Pamela", "Frank", "Martha",
        "Benjamin", "Debra", "Gregory", "Amanda", "Samuel", "Stephanie", "Raymond", "Carolyn", "Patrick", "Christine",
        "Alexander", "Marie", "Jack", "Janet", "Dennis", "Catherine", "Jerry", "Frances", "Tyler", "Ann"
    ];

    // State for managing the selected name index
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // State for managing the counter
    const [count, setCount] = useState(0);

    // Functions to handle counter increment and decrement
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <>
            <h1>State</h1>

            {/* Counter Section */}
            <div>
                <h2>Counter Example</h2>
                <p>Current Count: {count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>

            {/* Name List Section */}
            <ul>
                {names.map((name, index) => (
                    <li
                        onClick={() => setSelectedIndex(index)}
                        key={index}
                        className={selectedIndex === index ? "clicked" : "lists"}
                    >
                        {name}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default State;
