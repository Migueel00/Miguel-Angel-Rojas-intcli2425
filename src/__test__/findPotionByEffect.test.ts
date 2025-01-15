import { findPotionByEffect } from "../helpers/potionHelpers";
import { getPotionsByRarityMock } from "./__mocks__/getPotionsByRarityMock";

describe('Test the function findPotionByEffect', () => {

    it('Should filter by effect and return an Array of potions' , () => {
        // Assign   

        // Act
        const filteredPotions = findPotionByEffect(getPotionsByRarityMock, "healthRegeneration");

        // Assert
        expect(filteredPotions.length).toBe(1);
    });
});

