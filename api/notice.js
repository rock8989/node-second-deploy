
const { notice } = require('../models')

const create = async (req, res) => {
    console.log('===== NOTICE REGISTER =====')
    console.log('req.body = ', req.body)
    
    // const form = req.body.form
    
    const { subj, conts, tp, init } = req.body.form

    const register = await notice.create({
        subj, conts, tp,
        init: init + ''
    })

    // console.log('register = ', register)

    res.status(201).json({ noticeId:register.dataValues.id })
}

const detail = async (req, res) => {
    console.log('==== NOTICE DETAIL ====')
    console.log('req.params', req.params)

    const noticeDetail = await notice.findOne({ where: { id: req.params.noticeId }})

    console.log('noticeDetail = ', noticeDetail.dataValues)


    if ( !noticeDetail.dataValues ) res.status(401).end('NOT FOUND ID')

    res.status(201).json({ form: noticeDetail.dataValues })

}

const list = async (req, res) => {
    console.log('==== NOTICE LIST ====')
    console.log('NODE_PORT222222 = ', process.env.NODE_PORT)
    console.log('req.user = ', req.user.id)

    // const email = req.user.id

    // const loginInfo = await authLogin.findOne({ where: { email } })

    // if (!loginInfo) return res.status(401).json({error: 'NOT FINT LOGIN INFO'})
    
    const noticeList = await notice.findAll()

    console.log('noticeList = ', noticeList[0].dataValues)

    // const noticeData = []

    // noticeList.map(list => noticeData.push(list.dataValues))

    const noticeData = noticeList.map(list => list.dataValues)

    // console.log('noticeData = ', noticeData)

    res.json({ noticeData })
}

const modify = async (req, res) => {
    console.log('==== NOTICE MODIFY ====')
    console.log('req.params = ', req.params)
    console.log('req.body = ', req.body)

    const noticeId = req.params.noticeId
    const form = req.body.form

    const { subj, conts, dpTp, init } = form

    // const subj = form.subj,
    //       conts = form.conts,
    //       dpTp = form.dpTp,
    //       init = form.init

    const noticeIdYn = await notice.findOne({
        where: { id: noticeId }
    })

    if (!noticeIdYn) return res.status(404).json({error: 'no board deatail'})

    await notice.update(
        { subj, conts, tp:dpTp, init: init + '' },
        { where : { id: noticeId }}
    )

    res.json({ noticeId })

}

const destroy = async (req, res) => {
    console.log('==== NOTICE DELETE ====')
    console.log('req.params = ', req.params)

    const id = req.params.noticeId
    // { id } = req.params
    
   await notice.destroy({ where : { id } })

   res.status(204).end()
}

module.exports = {
    create,
    detail,
    list,
    modify,
    destroy
}


