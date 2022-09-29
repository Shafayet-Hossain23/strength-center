const addToDb = (innerTextTime) => {
    localStorage.setItem('Break-time', innerTextTime);
}

const getFromDb = () => {
    const getValueFromLs = localStorage.getItem('Break-time')
    // const callBreakTimeTextId = document.getElementById('break-time');
    // callBreakTimeTextId.innerText = getValueFromLs
    return getValueFromLs;
}
export { addToDb, getFromDb };