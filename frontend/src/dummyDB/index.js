import db from './db.json';

function pushItem(item) {
    db.spots.push(item);
}

export default {
    pushItem
};
