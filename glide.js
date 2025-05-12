/**
 * Calls a function bound to the window object with provided arguments
 * @template T - Array type of the arguments
 * @template R - Return type of the function
 * @param {string} functionName - Name of the function to call (must exist on window)
 * @param {...T} args - Arguments to pass to the function
 * @returns {R | undefined} The result of the function call or undefined if function doesn't exist
 * @throws {Error} If the window property exists but isn't a function
 */
function callWindowFunction(functionName, ...args) {
  // Get the function from the window object
  const fn = window[functionName];
  
  if (typeof fn === 'undefined') {
    console.warn(`Function ${functionName} not found on window object`);
    return undefined;
  }
  
  if (typeof fn !== 'function') {
    throw new Error(`Property ${functionName} exists on window but is not a function`);
  }
  
  return fn(...args);
}