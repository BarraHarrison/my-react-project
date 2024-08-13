function HelloName() {
    const firstName = "Barra";
    if (firstName != null) {
        return <h1>Hello {console.log({ firstName })} </h1>
    }
    return <h1>No Name Given</h1>
}

export default HelloName;