/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const resultStack = [];

    for(let i = 0; i < asteroids.length; i++) {
        const lastAsteroidInResultStack = resultStack[resultStack.length - 1];
        const currentAsteroidInLoop = asteroids[i];
        
        if(resultStack.length === 0 || 
          lastAsteroidInResultStack < 0 || 
          currentAsteroidInLoop > 0
          ) {
            resultStack.push(asteroids[i])
            continue;
        }

        if(lastAsteroidInResultStack + currentAsteroidInLoop === 0) {
            resultStack.pop();
            continue;
        }

        if(currentAsteroidInLoop < 0 
            && (Math.abs(lastAsteroidInResultStack) < Math.abs(currentAsteroidInLoop))) {
            resultStack.pop();
            i--
        }
    }

    return resultStack
};