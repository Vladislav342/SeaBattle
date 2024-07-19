/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema
	  	.createTable('users', (table) => {
	  		table.increments('id').primary();
	 		table.string('login', 255).unique().notNullable();
	  		table.string('password', 255).notNullable();
	  		table.timestamps(true, true);
	  	})
	  	/*.createTable('battles', (table) => {
	  		table.increments('id');
	  		table.string('user_1',255).notNullable();
	  		table.string('user_2',255).notNullable();
	  		table.string('status', 255).notNullable();
	  		table.timestamps(true, true);
	  	})*/
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
   return knex.schema
   		.dropTable('users')
   		//.dropTable('battles');
};
