var numbers = [12, 5, 18, 1, 9, 15, 3, 20, 7, 13, 6, 11, 4, 19, 2, 8, 10, 14, 16, 17];

for (var i = 0; i < numbers.length; i++) 
{
    for (var j = 0; j < numbers.length - 1 - i; j++) 
    {
        if (numbers[j] > numbers[j + 1]) 
        {
            var tmp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = tmp;
        }
    }
}
console.log(numbers);