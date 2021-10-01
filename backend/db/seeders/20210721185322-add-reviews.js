'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      { "userId": 1, "spotId": 1, "review": "Best paranormal experience I've ever had. Will return again!👻", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 2, "spotId": 1, "review": "Didn't experience anything. it was a quiet night and I slept like a baby.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 1, "spotId": 2, "review": "Best paranormal experience I've ever had. Will return again!👻", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 2, "spotId": 2, "review": "Spooky AF", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 3, "spotId": 1, "review": "We didn't experience anything and it was nothing really to note about. We had a good night of sleep.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 3, "spotId": 2, "review": "Spooky AF", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 1, "spotId": 3, "review": "Best paranormal experience I've ever had. Will return again!👻", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 3, "spotId": 11, "review": "GREAT NIGHT and full of ghost guest!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 3, "spotId": 10, "review": "a bit pricey for the stay and what you get.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 3, "spotId": 9, "review": "GREAT NIGHT and full of ghost guest!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 1, "spotId": 4, "review": "Best paranormal experience I've ever had. Will return again!👻", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 3, "spotId": 8, "review": "Host was great and gave us a tour while we were there. Would come back again for sur.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 3, "spotId": 7, "review": "GREAT NIGHT and full of ghost guest!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 2, "spotId": 3, "review": "Spooky AF", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 3, "spotId": 6, "review": "I love this location. I went with some friends and we had a really good time. luckily we had an investigation team stay the same night and we tag along. GREAT TIME!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 4, "spotId": 11, "review": "We didn't experience anything and it was nothing really to note about. We had a good night of sleep.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 1, "spotId": 5, "review": "GREAT NIGHT and full of ghost guest!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 4, "spotId": 10, "review": "GREAT NIGHT and full of ghost guest!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 4, "spotId": 9, "review": "Didn't experience anything. it was a quiet night and I slept like a baby.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 4, "spotId": 8, "review": "WORST STAY EVER! would not recommend. We had a bad time.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 2, "spotId": 4, "review": "GREAT NIGHT and full of ghost guest!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 4, "spotId": 7, "review": "We didn't experience anything and it was nothing really to note about. We had a good night of sleep.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 4, "spotId": 6, "review": "WORST STAY EVER! would not recommend. We had a bad time.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 5, "spotId": 5, "review": "I think we saw some things moving around but we can't explain what we saw. Very Scary!!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 5, "spotId": 6, "review": "Great place to have a paranormal getaway. I will recommend to friends.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 2, "spotId": 5, "review": "I like it here. We heard knocks and bangs though the night.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 5, "spotId": 4, "review": "Never staying here again!!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 2, "spotId": 6, "review": "5/5 stars!!! I enjoyed the experience and stay here.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 5, "spotId": 7, "review": "Okay stay but the bathrooms are far from the room.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 5, "spotId": 3, "review": "3/5 on the stay. I would of rather stayed in a hotel with a scary movie on.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 5, "spotId": 8, "review": "I love this location. I went with some friends and we had a really good time. luckily we had an investigation team stay the same night and we tag along. GREAT TIME!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 5, "spotId": 2, "review": "I love this location. I went with some friends and we had a really good time. luckily we had an investigation team stay the same night and we tag along. GREAT TIME!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 5, "spotId": 9, "review": "We didn't experience anything and it was nothing really to note about. We had a good night of sleep.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 6, "spotId": 11, "review": "WORST STAY EVER! would not recommend. We had a bad time.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 6, "spotId": 1, "review": "Spooky AF", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 6, "spotId": 10, "review": "Spooky AF", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 6, "spotId": 2, "review": "Came for the experience and it didn't disappoint. I didn't believe until my stay. A must stay for people on the fence about the afterlife.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 6, "spotId": 5, "review": "WORST STAY EVER! would not recommend. We had a bad time.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 7, "spotId": 9, "review": "Came for the experience and it didn't disappoint. I didn't believe until my stay. A must stay for people on the fence about the afterlife.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 7, "spotId": 10, "review": "Came for the experience and it didn't disappoint. I didn't believe until my stay. A must stay for people on the fence about the afterlife.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 7, "spotId": 8, "review": "Didn't experience anything. it was a quiet night and I slept like a baby.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 7, "spotId": 7, "review": "I love this location. I went with some friends and we had a really good time. luckily we had an investigation team stay the same night and we tag along. GREAT TIME!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 7, "spotId": 6, "review": "Came for the experience and it didn't disappoint. I didn't believe until my stay. A must stay for people on the fence about the afterlife.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 8, "spotId": 2, "review": "Didn't experience anything. it was a quiet night and I slept like a baby.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 8, "spotId": 3, "review": "I love this location. I went with some friends and we had a really good time. luckily we had an investigation team stay the same night and we tag along. GREAT TIME!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 8, "spotId": 2, "review": "Didn't experience anything. it was a quiet night and I slept like a baby.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 9, "spotId": 11, "review": "Didn't experience anything. it was a quiet night and I slept like a baby.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 10, "spotId": 12, "review": "Spooky AF", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 11, "spotId": 12, "review": "Didn't experience anything. it was a quiet night and I slept like a baby.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 1, "spotId": 12, "review": "5/5 stars!!! I enjoyed the experience and stay here.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 10, "spotId": 12, "review": "GREAT NIGHT and full of ghost guest!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 2, "spotId": 13, "review": "Spooky AF", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 11, "spotId": 13, "review": "Didn't experience anything. it was a quiet night and I slept like a baby.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 1, "spotId": 13, "review": "5/5 stars!!! I enjoyed the experience and stay here.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 8, "spotId": 13, "review": "GREAT NIGHT and full of ghost guest!", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 9, "spotId": 14, "review": "Spooky AF", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 11, "spotId": 14, "review": "Didn't experience anything. it was a quiet night and I slept like a baby.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 2, "spotId": 14, "review": "5/5 stars!!! I enjoyed the experience and stay here.", "createdAt": new Date(), "updatedAt": new Date() },
      { "userId": 10, "spotId": 14, "review": "GREAT NIGHT and full of ghost guest!", "createdAt": new Date(), "updatedAt": new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
