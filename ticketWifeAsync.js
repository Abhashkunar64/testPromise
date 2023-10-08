console.log('person 1 shows ticket')
console.log('person 2 shows ticket')

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const getCandy = new Promise((resolve, reject) => resolve('butter'));
    const getCoke = new Promise((resolve, reject) => resolve('coke'));

    let ticket = await promiseWifeBringingTicks;

    console.log('wife: i got the tickets');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let coke = await getCoke;

    console.log('husband: i got your coke now lets go inside');


    return ticket;
}

preMovie().then((m) => console.log(`person3: shows ${m}`));
console.log('person 4 shows ticket')
console.log('person 5 shows ticket')