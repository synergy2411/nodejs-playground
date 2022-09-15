const LUCKY_NUMBER = Math.round(Math.random() * 100);

const getLuckyNumber = () => LUCKY_NUMBER;

// DEFAULT EXPORT
// module.exports = getLuckyNumber;


// NAMED EXPORT
module.exports = {
    getLuckyNumber
}
