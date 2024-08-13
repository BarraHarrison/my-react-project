import React, { useState } from "react";
import "./../App.css"; // Ensure this import is correct

function State() {
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

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [searchTerm, setSearchTerm] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("#fff");

    // Function to handle name selection
    const handleSelectName = (index) => {
        setSelectedIndex(index);
        setBackgroundColor(getRandomColor());
        triggerConfetti();
    };

    // Function to get a random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Function to filter names based on search term
    const filteredNames = names.filter(name =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Placeholder for confetti animation trigger
    const triggerConfetti = () => {
        console.log("Confetti time! 🎉");
        // Implement your confetti animation logic here
    };

    return (
        <div style={{ backgroundColor: backgroundColor, padding: "20px", transition: "background-color 0.5s ease" }}>
            <h1>Fun and Interactive Name List</h1>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search names..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: "20px", padding: "10px", width: "80%" }}
            />

            {/* Name List */}
            <ul className="name-grid">
                {filteredNames.map((name, index) => (
                    <li
                        key={index}
                        onClick={() => handleSelectName(index)}
                        className={`lists ${selectedIndex === index ? 'clicked' : ''}`}
                        style={{
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease, color 0.3s ease',
                            color: selectedIndex === index ? 'red' : 'black'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                    >
                        {name}
                    </li>
                ))}
            </ul>

            {/* Random Name Picker */}
            <button
                onClick={() => handleSelectName(Math.floor(Math.random() * names.length))}
                style={{ marginTop: "20px", padding: "10px", cursor: "pointer" }}
            >
                Pick a Random Name
            </button>
        </div>
    );
}

export default State;
