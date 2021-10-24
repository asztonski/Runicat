var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
function random_item(items)
{
  return items[Math.floor(Math.random()*numbers.length)];   
}

export let randomNumber = random_item(numbers);

