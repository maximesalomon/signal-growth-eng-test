exports.up = function(knex, Promise) {
  return knex.schema.createTable("companies", tbl => {
    tbl.increments();
    tbl.string("name", 128).notNullable();
    tbl.string("url", 128).notNullable();
    tbl.string("location", 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("companies");
};
