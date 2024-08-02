
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1, 
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

console.log(gameObject())

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"]
}

console.log(homeTeamName())

function homeTeamName() {
    return gameObject()["home"]["teamName"]
}

console.log(homeTeamName())

// Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.

function numPointsScored(playerName) {
    const game = gameObject()
    for (let team in game) {
        const players = game[team].players
        if (players[playerName]) {
            console.log(players[playerName].points)
            return players[playerName].points
        }
    }
    return null
}

numPointsScored("Alan Anderson")

// Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player

function shoeSize(playerName) {
    const game = gameObject()
    for (let team in game) {
        const players = game[team].players
        if (players[playerName]) {
            console.log(players[playerName].shoe)
            return players[playerName].shoe
        }
    }
}

shoeSize("Alan Anderson")

// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors

function teamColors(teamName) {
    const game = gameObject()
    for (let team in game) {
        if (game[team].teamName === teamName) {
            console.log(game[team].colors)
            return game[team].colors
        }
    }
}

teamColors("Brooklyn Nets")

// Build a function, teamNames, that operates on the game object to return an array of the team names.

function teamNames() {
    const game = gameObject()
    let teams = [];
    for (let team in game) {
        teams.push(game[team].teamName)
    }
    console.log(teams)
    return teams
}

teamNames()

// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey numbers for that team.

function playerNumbers(teamName) {
    const game  = gameObject()
    let jerseyNumbers = []
    for (let team in game) {
        if (game[team].teamName === teamName) {
            const players = game[team].players
            for (let player in players) {
                jerseyNumbers.push(players[player].number)
            }
            console.log(jerseyNumbers)
            return jerseyNumbers
        }
    }
}

playerNumbers("Brooklyn Nets")

// Build a function, playerStats, that takes in an argument of a player's name and returns an object of that player's stats.

function playerStats(playerName) {
    const game = gameObject()
    for (let team in game) {
        const players = game[team].players
        for (player in players) {
            if (players[playerName]) {
                console.log(players[playerName])
                return players[playerName]
            }
        }
    }
}

playerStats("Alan Anderson")

// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size