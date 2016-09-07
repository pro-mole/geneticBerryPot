//Mathematical module for my experiments

//Unitary Normal Random: generates a number in normal distribution from -1 to 1
function unrandom(U=12)
{
    var trandom = 0;
    for (var i=0; i<U; i++) trandom += Math.random();
    
    return (trandom/U - 0.5) * 2.0;
}
