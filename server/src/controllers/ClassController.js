const ClassRepository = require('../repositories/ClassRepository')
const Commnon = require('../common/Common')

module.exports = {
    async GetClasses (req, res) {
        let classes = await ClassRepository.GetClasses()
        return Commnon.SendResponse(classes, res)
    }
}