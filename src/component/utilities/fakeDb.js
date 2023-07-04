const addToDb = (value) => {
    let breakTime = {};

    const quantity =breakTime[value];
    if (!quantity) {
        breakTime[value] = 1;
    }
    localStorage.setItem('break-time', JSON.stringify(breakTime))

}
export{addToDb}