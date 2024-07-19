/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
	await knex.raw('TRUNCATE TABLE "person" CASCADE');
	// await knex.raw('TRUNCATE TABLE "battles" CASCADE');

	await knex('users_table2').insert([
		{
			id: 1,
			login: 'abcdef',
			password: '12345'
		},
		{
			id: 2,
			login: 'abc123',
			password: '12345'
		}
	]);

	/*return knex('battles').insert([
		{
			id: 1,
			user_1: 'abcdef',
			user_2:  'abc123',
			status: 'in_process'
		}
	]);*/
};
