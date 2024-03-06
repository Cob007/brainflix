const DateConverter = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US");
}

export default DateConverter