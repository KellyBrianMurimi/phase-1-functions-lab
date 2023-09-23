function distanceFromHqInBlocks(location)
{ 
    const hq = 42; //Headquarters location
    return Math.abs(location - hq); //Absolute difference to ensure a positive result
}
function distanceFromHqInFeet(location)
{
    const blocks =distanceFromHqInBlocks(location);
    const feetPerBlock = 264; //Assuming 1 block is 264 feet
    return blocks * feetPerBlock; 
}
function distanceTravelledInFeet(startBlock, endBlock)
{
    const blocksTravelled = Math.abs(endBlock - startBlock);
    return blocksTravelled * 264; // 1 block is 264 feet
}
function calculatesFarePrice(startBlock, endBlock) 
{
const distance = distanceTravelledInFeet(startBlock, endBlock);
if (distance <= 400) {
return 0;
} else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
} else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare for distance between 2000 and 2500 feet
} else {
    return 'cannot travel that far';
}
}
