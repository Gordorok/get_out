const sql = require('./db.js');

const posZ = () => {
	return new Promise((resolve, reject) =>{
		sql.query("Select * from pos_zombie", function(err, res) {
			resolve(res)
		})
	})
}
exports.posZ = posZ;