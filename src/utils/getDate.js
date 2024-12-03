export const getDate = () => {
    const currentDate = new Date()
    const day = currentDate.getDay() + 1
    let dayString = day < 10 ? '0' + day : day;
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()
    const hour = currentDate.getHours()
    const minute = currentDate.getMinutes()
    const dateString = `${dayString}.${month}.${year} ${hour}:${minute}`
    return dateString
}

