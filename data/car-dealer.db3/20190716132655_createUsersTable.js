
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
   table.increments();
   table.text('VIN').notNullable().unique();
   table.text('make', 50).notNullable();
   table.text('model', 50).notNullable();
   table.integer('mileage', 6).notNullable();
   table.text('transmission-type', 50);
   table.text('status-of-title', 50);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};

// The critical information for each car is the VIN
// , make, model, and mileage.
// They also track transmission type 
// and status of the title (clean, salvage, etc.),
//  but this 
// information is not always immediately known.
