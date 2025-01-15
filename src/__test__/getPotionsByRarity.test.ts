
import { getPotionsByRarity } from "../helpers/potionHelpers";
import { filterByLevelDataMock } from "./__mocks__/filterByLevelMock";

describe('Test the function filterByLevel', () => {

    it('Should filter by rarity and return an Array of potions' , () => {
        // Assign

        // Act
        const filteredPotions = getPotionsByRarity(filterByLevelDataMock, "legendary");

        // Assert
        expect(filteredPotions.length).toBe(3);
    });
});

