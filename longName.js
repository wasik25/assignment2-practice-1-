var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var tmp = friends[0];

for (var i = 0; i < friends.length; i++) 
{
    var element = friends[i];
    if (element.length > tmp.length) 
    {
        tmp = element;
    }
}
console.log(tmp);