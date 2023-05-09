
const Question = require('../../../models/question');
const Option = require('../../../models/option');

module.exports.create = async function (req, res) {

    try {

        const questionId = req.params.id;
        const { text } = req.body;

        if (!questionId || !text) {
            return res.status(404).json({
                message: 'Empaty Question id or option text',
                status: 'failure',
                data: []
            });
        }

        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({
                message: 'Invalid Question id',
                status: 'failure',
                data: []
            });
        }

        const option = await Option.create({ 'text': text, 'question_id': question._id });
        option.link_to_vote = `http://localhost:8000/api/v1/options/${option.id}/add_vote`;
        await option.save();

        if (!option) {
            throw new Error('unable to create option');
        }


        question.options.push(option._id);
        await question.save()

        return res.status(200).json({
            message: 'Option created',
            status: 'successful',
            data: [option]
        });


    } catch (error) {

        console.log('CREATE OPTION ERROR: ', error);

        return res.status(500).json({
            message: 'Internal Server Error',
            status: 'failure',
            data: []
        })
    }

}