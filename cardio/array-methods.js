const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

    const buns = ['egg', 'wonder', 'brioche'];

    const meats = {
      beyond: 10,
      beef: 5,
      pork: 7
    };

    const prices = {
      hotDog: 453,
      burger: 765,
      sausage: 634,
      corn: 234,
    };

    const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

    const feedback = [
      { comment: 'Love the burgs', rating: 4 },
      { comment: 'Horrible Service', rating: 2 },
      { comment: 'Smoothies are great, liked the burger too', rating: 5 },
      { comment: 'Ambiance needs work', rating: 3 },
      { comment: 'I DONT LIKE BURGERS', rating: 1 },
    ];


    /*
      Static Methods
    */

    // Array.of();

    // Make a function that creates a range from x to y with Array.from();
    function createRange(start, end) {
        const range = Array.from({ length: end - start + 1 }, 
            function (item, index) {
                return index + start;
            });
            return range;
    }

    const myRange = createRange(3,7);
    
    // Check if the last array you created is really an array with Array.isArray();
    console.log(Array.isArray(myRange));

    // Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
    console.log(Object.entries(meats));
    console.log(Object.keys(meats));
    console.log(Object.values(meats));

    Object.entries(meats).forEach(([key, value]) => {
        // const key = entry[0];
        // const value = entry[1];
        // const [key, value] = entry;
        console.log(key, value); 
    });

    /*
      Instance Methods
    */

    // Display all bun types with " or " - use join()
    console.log(buns.join(' or '))

    // We have a string "hot dogs,hamburgers,sausages,corn" 
    // - use split() to turn it into a array
    const foodString = "hot dogs,hamburgers,sausages,corn";
    console.log(foodString.split(''));


    // take the last item off toppings with pop()
    const lastItem = toppings.pop();
    console.log(lastItem);
    
    // add it back with push()
    toppings.push(lastItem);
    console.log(lastItem);

    // take the first item off toppings with shift()
    const firstItem = toppings.shift();
    console.log(firstItem);
    
    // add it back in with unshift()
    toppings.unshift(firstItem);
    
    // Do the last four,but immutable (with spreads and 
    //new variables)
    let newToppings = toppings.slice(0, toppings.lenght - 1);
    newToppings = [...newToppings, toppings[toppings.lenght -1 ]];
    console.log(newToppings);

    // Make a copy of the toppings array with slice()
    const toppingsCopy = toppings.slice(0);
    toppings[0] = 'Mushy Boi';
    console.log(toppings);
    console.log(toppingsCopy);

    // Make a copy of the toppings array with a spread
    const toppingsCopy2 = [...toppings]
    
    // take out items 3 to 5 of your new toppings array with splice()
    toppingsCopy.splice()

    // find the index of Avocado with indexOf() / lastIndexOf()
    const avoIndex = toppings.indexOf('Avocado');
    console.log(avoIndex);
    const wes = { name: 'wes' };
    const people = [{ name: 'scott' }, wes];
    console.log(people.indexOf(wes));

    // Check if hot sauce is in the toppings with includes()
    const isInToppings = toppings.includes('Hot Sauce');
    console.log(isInToppings);

    // add it if it's not
    if(!isInToppings) {
        toppings.push('Hot Sauce');
    }
    console.log(toppings);

    // flip those toppings around with reverse()
    // toppings.reverse();
    const toppingsReversed = [...toppings].reverse();
    console.log(toppingsReversed);

    /*
      Callback Methods
    */

    // find the first rating that talks about a burger with find()
    
    // function findBurgRating(singleFeedback) {
    //     return singleFeedback.comment.includes('burg');
    // }

    // const findBurgRating = (singleFeedback) => singleFeedback.comment.includes('burg');
    // const findSmoothieRating = (singleFeedback) => singleFeedback.comment.includes('Smoothie');

    function findByWord(word) {
       return function (singleFeedback) {
           return singleFeedback.comment.includes(word);
       } 
    }


    const burgRating = feedback.find(findByWord('burg'));
    const smoothieRating = feedback.find(findByWord('Smoothie'));

    // find all ratings that are above 2 with filter()
    function filterByMinRating(minRating) {
        return function (singleFeedback) {
            return singleFeedback.rating > minRating
        }
    }
    const goodReviews = feedback.filter(filterByMinRating(2));
    console.table(goodReviews);

    // find all ratings that talk about a burger with filter()
    const burgRatings = feedback.filter(findByWord('burg'));
    console.table(burgRatings)

    // Remove the one star rating however you like!
    const legitRatings = feedback.filter(single => single.rating !== 1);
    console.table(legitRatings);

    // check if there is at least 5 of one type of meat with some()
    const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some(
        meatValue => meatValue >= 5);
    console.log(isThereEnoughOfAtLeastOneMeat);
    
    // make sure we have at least 3 of every meat with every()
    const isThereEnoughOfEveryMeat = Object.values(meats).every(
        meatValue => meatValue >= 3);
    console.log(isThereEnoughOfEveryMeat);

    // sort the toppings alphabetically with sort()
    const numbers = [1, 2, 100, 3, 200, 400, 155];
    const numbersSorted = numbers.sort((firstItem, secondItem) => firstItem - secondItem);

    console.log(numbersSorted);
    console.log(toppings.sort());

    // sort the order totals from most expensive to least with .sort()
    function numberSort(a, b) {
        return a - b;
    }
    console.log(orderTotals.sort(numberSort));

    // Sort the prices with sort()
    const productsSortedByPrice = Object.entries(prices).sort(function(a,b) {
        const aPrice = a[1];
        const bPrice = b[1];
        return aPrice - bPrice;
    });

    console.table(Object.fromEntries(productsSortedByPrice));