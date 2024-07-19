const {Model} = require('objection');

class Battles extends Model{
	static get tableName(){
		return 'battles';
	}
}

module.exports = Battles;