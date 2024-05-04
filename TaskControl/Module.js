const UserSchma = require('../Usermodel/UserSchema.js');

const CreateMethod = async (req, res) => {
    try {

        const userdata = req.body;

        const user = await UserSchma.create(userdata)

        res.status(200).json({
            message: 'user created successfully',
            data: user
        })
        
    } catch (error) {
        console.error(error);
        res.status(404).json({
            message: 'user not found', 
        })
    }
}


const GettingMethod = async (req, res) => {
    try {
        const user = await UserSchma.find()

        res.status(200).json({
            message: 'Successfully User recived',
            data: user
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({
            message: 'user not found', 
        })
    }
}


module.exports ={ CreateMethod, GettingMethod}