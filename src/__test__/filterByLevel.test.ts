
import { FilterByLevelRequirement } from "../helpers/potionHelpers";
import { filterByLevelDataMock } from "./__mocks__/filterByLevelMock";

describe('Test the function filterByLevel', () => {

    it('Should filter by level and return an Array of potions' , () => {
        // Assign

        // Act
        const filteredPotions = FilterByLevelRequirement(filterByLevelDataMock, 18);

        // Assert
        expect(filteredPotions.length).toBe(2);
    });
});

