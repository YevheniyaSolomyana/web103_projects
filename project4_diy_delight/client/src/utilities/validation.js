export const isValidCombination = (combination) => {
    // Check for the invalid combination: White, Silent Clicks, and Smart Wheel
    if (combination.color === "White" && combination.feature === "Silent Clicks" && combination.scrolltype === "Smart Wheel") {
        return false; // Invalid combination
    }
    
    // All other combinations are considered valid
    return true;
};
