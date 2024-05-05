var express = require('express');
var router = express.Router();

const pool = require('../../db.js');
const checkAuthenticated = require('../../middleware.js');

router.get('/', checkAuthenticated, function (req, res) {
    const userId = req.user.user_id;

  pool.query(
    'SELECT Polls.*, Users.username FROM Polls ' +
      'JOIN Users ON Polls.user_id = Users.user_id ' +
      'WHERE Polls.user_id = ? ' +
      'ORDER BY Polls.created_at DESC LIMIT 6 ',
      [userId],
    (error, results) => {
      if (error) {
        console.error('Error fetching polls', error);
        res.status(500).send('Error fetching polls');
        return;
      }
      if (results.length === 0) {
        res.status(404).send('No polls found');
        return;
      }
      const pollsPromises = results.map(
        (poll) =>
          new Promise((resolve, reject) => {
            pool.query(
              'SELECT Options.option_id, Options.option_text, COUNT(Votes.vote_id) AS vote_count ' +
                'FROM Options ' +
                'LEFT JOIN Votes ON Options.option_id = Votes.option_id ' +
                'WHERE Options.poll_id = ? ' +
                'GROUP BY Options.option_id',
              [poll.poll_id],
              (error, optionsResults) => {
                if (error) {
                  reject(`Error fetching options for poll ${poll.poll_id}`);
                } else {
                  resolve({
                    ...poll,
                    options: optionsResults,
                  });
                }
              },
            );
          }),
      );

      Promise.all(pollsPromises)
        .then((polls) => {
          res.status(200).json(polls);
        })
        .catch((pollsError) => {
          console.error('Error fetching polls with options', pollsError);
          res.status(500).send('Error fetching polls with options');
        });
    },
  );
});

module.exports = router;
