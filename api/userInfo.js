
const info = async (req, res) => {
    console.log('========= USER INFO =============')
    console.log('req.user = ', req.user.id);
    
    if(req.user) {
        
        res.status(201).json({data : `유효합니다 ${req.user.id}`})
    } else {
        res.status(401).json({data : '토큰을 재발급 하세요'})
    }
}

module.exports = {
    info
}


