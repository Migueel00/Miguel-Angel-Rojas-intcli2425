
import { calculateCraftingTime } from "../helpers/potionHelpers";
import { calculateCraftingTimeMock } from "./__mocks__/calculateCraftingTimeMock";

describe('Test the function calculateCraftingTime', () => {

    it('Should calculate the total time of crafting time in minutes' , () => {
        // Assign

        // Act
        const craftingTime = calculateCraftingTime(calculateCraftingTimeMock);

        // Assert
        expect(craftingTime).toBe(308);
    });
});

