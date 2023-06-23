const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item){
    let itemDelete = 5;
    let newArr = array.filter((item) => item !== itemDelete)
        console.log(newArr);
};
removeElement(array, 5);