
const setItem = async (key, value) => {
    return Promise.resolve().then(function () {
        localStorage.setItem(key, value);
    });
}

const getItem = async (key) => {
    Promise.resolve().then(function () {
        return localStorage.getItem(key);
    })
};


// const asyncLocalStorage = {
//     setItem: function (key, value) {
//         return Promise.resolve().then(function () {
//             localStorage.setItem(key, value);
//         });
//     },
//     getItem: function (key) {
//         return Promise.resolve().then(function () {
//             return localStorage.getItem(key);
//         });
//     }
// };

export default {setItem, getItem}