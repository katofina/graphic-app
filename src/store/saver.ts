import { getSession } from "../storage/session.ts";
import {storage} from '../firebase.ts';

const saver = (store) => (next) => (action) => {
    if(action.type === 'canvas/pushSave') {
        const getId = () => { 
            const dateString = Date.now().toString(36); 
            const randomness = Math.random().toString(36).substr(2); 
            return dateString + randomness; 
        };
        const info = getSession().email;
        storage.ref(`/images${info}/${getId()}`).putString(action.payload.split(',')[1], "base64", {contentType: 'image/png'});
    }
    return next(action);
};

export default saver;