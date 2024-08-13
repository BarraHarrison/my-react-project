function Event() {
    let colors = ["red", "blue", "green", "yellow", "pink", "purple", "black", "white"];
    // const getColors = (colors) => colors.length;

    const handleEvent = (e) => console.log(e);

    return (
        <>
            <h1>My Color List</h1>
            <ul>
                {colors.map((color, index) => <li onClick={handleEvent} key={index}>{color}</li>)}
            </ul>
        </>
    );
}
export default Event;