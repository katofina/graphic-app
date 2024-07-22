const saver = (store) => (next) => (action) => {
    console.log(action.type, store.getState());
    if(action.type === 'canvas/pushSave') {
        const userInfo = JSON.parse(localStorage.getItem(`${store.getState().sign.email}_graph`))
        const arrSave = store.getState().canvas.save.concat(action.payload);
        const objSave = Object.assign(userInfo, {save: arrSave})
        localStorage.setItem(`${store.getState().sign.email}_graph`, JSON.stringify(objSave));
    }
    return next(action);
};

export default saver;