const { schema } = require("../config");

exports.up = async function(knex) {
    //translates to CREATE TABLE "cars"
    await knex.schema.createTable("cars", (table) => {
        //below is like saying table.integer("id").notNull().unique().primary()
        table.increments("id")
        table.text("VIN").notNull().unique()
        table.text("make").notNull()
        table.text("model").notNull()
        table.real("mileage").notNull()
        table.text("transmission")
        table.text("title")
    })
};
 
exports.down = async function(knex) {
    //translates to DROP TABLE IF EXISTS "cars"
    await knex.schema.dropTableIfExists("cars")
};
