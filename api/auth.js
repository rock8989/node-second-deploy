const { authLogin } = require('../models')
const encryption = require('./encryption')
const jwt = require('./jwt')

const login = async (req, res) => {
    console.log('==== LOGIN ====')
    console.log('req.body = ', req.body)

    const email = req.body.data.username
    const password = req.body.data.password

    const loginInfo = await authLogin.findOne({ where: { email } })

    if (!loginInfo) return res.status(401).json({error: 'NOT FINT LOGIN INFO'})
    
    // console.log(loginInfo)

    const pwChk = await encryption(password, loginInfo.dataValues.salt)

    console.log('pwdChk = ', pwChk)

    if (loginInfo.dataValues.password === pwChk.password) {
        // res.json({body: loginInfo.dataValues.email})
        const token = jwt.signToken(loginInfo.dataValues.email)
        
        console.log(token)

        res.json({body: token})
    } else {
        res.status(401).json({error: 'NOT FINT LOGIN INFO'})
    }

    // return
    
    // const resLogin = await authLogin.findOne({
    //     attributes: [
    //         'id',
    //         'email',
    //         [authLogin.sequelize.fn('left', authLogin.sequelize.col('createdAt'), 10), 'date']
    //     ],
    //     where: { email, password }
    // })

    // if (resLogin) {
    //     res.json({body: resLogin.dataValues})
    // } else {
    //     res.status(401).json({error: 'NOT FINT LOGIN INFO'})
    // }
}

const join = async (req, res) => {
    console.log('==== JOIN ====')
    console.log('req.body = ', req.body)

    const { usermail, password } = req.body.form

    const pwObj = await encryption(password)

    console.log('pwObj = ', pwObj)

    // return

    const joinResult = await authLogin.create({
        email: usermail,
        password: pwObj.password,
        salt: pwObj.salt
    })

    // console.log('joinResult = ', joinResult)

    if (joinResult) res.json( { body: joinResult.email } )
    else res.status(401).json( {error: 'JOIN ERROR'} )
}

module.exports = { login, join }

