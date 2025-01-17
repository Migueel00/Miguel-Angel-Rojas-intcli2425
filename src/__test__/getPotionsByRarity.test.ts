
import { getPotionsByRarity } from "../helpers/potionHelpers";
import { getPotionsByRarityMock } from "./__mocks__/getPotionsByRarityMock";

describe('Test the function filterByLevel', () => {

    it('Should filter by rarity and return an Array of potions' , () => {
        // Assign

        // Act
        const filteredPotions = getPotionsByRarity(getPotionsByRarityMock, "legendary");

        // Assert
        expect(filteredPotions.length).toBe(3);
        expect(filteredPotions[0].rarity).toBe("legendary");
        expect(filteredPotions[1].rarity).toBe("legendary");
        expect(filteredPotions[2].rarity).toBe("legendary");
    });
});

