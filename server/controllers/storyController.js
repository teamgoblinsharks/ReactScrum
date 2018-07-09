const Story = require('../models/story');

const storyController = {

   getAllStories: (req, res) => {
      Story.find({}, (err, stories) => {
         if (err) return console.error(err);
      }).then(result => res.json(result));
   },

   getStories: (req, res) => {
      Story.find({ boardId: req.query.id }, (err, stories) => {
         if (err) return console.error(err);
      }).then(result => res.json(result));
   },

   addStory: (req, res) => {
      Story.create({
         boardId: req.body.boardId,
         name: req.body.name,
      }).then(result => res.json(result))
         .catch(err => console.error(err));
   }
}

module.exports = storyController;