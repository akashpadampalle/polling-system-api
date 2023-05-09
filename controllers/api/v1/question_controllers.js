
const Question = require('../../../models/question');

module.exports.create = async function (req, res) {

    try {

        const { title } = req.body;
        const existingQuestion = await Question.findOne({ 'title': title });

        if (existingQuestion) {
            return res.status(401).json({
                message: 'Question is already exist',
                status: 'failure',
                data: [{ id: existingQuestion._id }]
            });
        };

        const question = await Question.create({ 'title': title });

        return res.status(200).json({
            message: 'Question create',
            status: 'successful',
            data: [question]
        });

    } catch (error) {
        console.log('ERROR CREATING QUESTION: ', error);
        return res.status(500).json({
            message: 'Internal server error',
            status: 'failure',
            data: []
        });
    }

}

