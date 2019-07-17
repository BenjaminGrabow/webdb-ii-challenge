
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {"VIN": "öasid",
        "make": "dfsg",
        "model": "sagf",
        "mileage": 23423,
        "transmission-type": "dgfdfsg",
        "status-of-title": null},
        {"VIN": "xxx",
        "make": "dfsg",
        "model": "sagf",
        "mileage": 234,
        "transmission-type": "dgfdfsg",
        "status-of-title": null},
        {"VIN": "yyyyy",
        "make": "dfsg",
        "model": "sagf",
        "mileage": 234,
        "transmission-type": "dgfdfsg",
        "status-of-title": null}
      ]);
    });
};
