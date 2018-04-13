const router = require('koa-router')()
const userBll = require('./../pub/bll/userinfo.js')

router.get('/logins', async(ctx, next) => {
	let result = await userBll.quetyId(ctx);
	ctx.body = result;
})

router.get('/loginss', async(ctx, next) => {
	let result = await userBll.quetyId(ctx);
	ctx.body = result;
})

router.get('/login', async(ctx, next) => {
	let result = await userBll.quetyId(ctx);
	ctx.body = result;
})

module.exports = router