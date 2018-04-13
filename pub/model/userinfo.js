const mysqlHelper = require('./../db/mysql-helper.js')

const userinfo = {

	/**
	 * 增加一条数据
	 * @param  {object} args  参数
	 * @return {object}       结果
	 */
	async add(args) {
		let sql = 'INSERT INTO userinfo VALUES(?, ?, ?, ?, ?)'
		let params = [args.id, args.username, args.userpass, args.create_time, args.update_time]
		let result = await mysqlHelper.query(sql, params)
		return result
	},
	
	/**
	 * 根据uuid得到一条数据
	 * @param  {object} args  参数
	 * @return {object}       结果
	 */
	async getByUuid(args) {
		let sql = 'SELECT * FROM userinfo WHERE uuid = ?'
		let params = [args.uuid]
		let result = await mysqlHelper.query(sql, params)
		return result
	},
	
	/**
	 * 根据UserName得到数量
	 * @param  {object} args  参数
	 * @return {object}       结果
	 */
	async getCountByUserName(args) {
		let sql = 'SELECT COUNT(1) AS UserNum FROM userinfo WHERE userName = ?'
		let params = [args.username]
		let result = await mysqlHelper.query(sql, params)
		return result
	},
	
}

module.exports = userinfo