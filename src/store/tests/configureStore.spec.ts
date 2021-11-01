import configureStore from "store/configureStore";

describe('configureStore', () => {
   it('should return object with store and persistor', () => {
      const configuredStore = configureStore();

      expect(configuredStore).toHaveProperty('store');
      expect(configuredStore).toHaveProperty('persistor');
   });
});
