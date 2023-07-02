const addToDb = (value) => {
    let breakTime = getBreakTime();
    const quantity =breakTime[value];
    if (!quantity) {
        breakTime[value] = 1;
    }
    localStorage.setItem('break-time', JSON.stringify(breakTime))
}
const getBreakTime = () => {
    let breakTime = {};
    const storedBreakTime = localStorage.getItem('break-time');
    if (storedBreakTime) {
        breakTime = JSON.parse(storedBreakTime);
    }
    return breakTime;
}
export{addToDb, getBreakTime}