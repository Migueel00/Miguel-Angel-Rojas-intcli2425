import { listIngredients } from "../helpers/potionHelpers";
import { filterByLevelDataMock } from "./__mocks__/filterByLevelMock";

describe('Test the function filterByLevel', () => {

    it('Should filter by rarity and return an Array of potions' , () => {
        // Assign
        const potion = filterByLevelDataMock[0];

        // Act
        const ingredientsNames : string[] = listIngredients(potion);

        // Assert
        expect(ingredientsNames.length).toBe(3);
        expect(ingredientsNames).toContain("Phoenix Feather");
        expect(ingredientsNames).toContain("Flameflower Extract");
        expect(ingredientsNames).toContain("Molten Ember");

    });
});
