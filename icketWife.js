console.log('person 1 shows ticket')
console.log('person 2 shows ticket')

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000);
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('wife: i got the tickets');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    return new Promise((resolve, reject) => resolve(`${t} butter`));
});

const getCoke = getButter.then((t) => {
    console.log('husband: here is your butter,anything else honey?');
    console.log('wife: I also need some drinks , coke will be good.');
    
    return new Promise((resolve, reject) => resolve(`${t} coke`));

})

getButter.then((t) => console.log(t));
console.log('person 4 shows ticket')
console.log('person 5 shows ticket')

