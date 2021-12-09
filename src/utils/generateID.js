const generateId = (length) => {
    let id = '';
    const charts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        id += charts.charAt(Math.floor(Math.random() * charts.length))
    }
    return id;
}

export {generateId}