$(document).ready(function () {
    let scores = JSON.parse(
        localStorage.getItem('leaderboardScores')
    ) || [];

    scores.sort((a, b) => b.score - a.score);

    const leaderboard = $('#leaderboard-list');
    leaderboard.empty();

    if (scores.length === 0) {
        leaderboard.append(
            '<li>No scores yet. Play the quiz first!</li>'
        );
    } else {
        scores.forEach(function (entry) {
            const item = $('<li>');
            item.text(entry.name + ' — ' + entry.score + '/20');
            leaderboard.append(item);
        });
    }
});

//function resetLeaderboard() {
//localStorage.removeItem('leaderboardScores');
// /location.reload();
//}