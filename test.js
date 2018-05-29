var sendJSON = { 
  "name": "Match name",
  "home": "Home team name",
  "away": "Away team name",
  "mo": {
    "status": "inactive",
    "winner": "Me" 
  },
  "ir": [
    { 
      "innings": 1,
      "team": "Name of innings batting team",
      "overs":6,
      "status": "active",
      "runs": "Void"
    },
    { 
      "innings": 1,
      "team": "Name of innings batting team",
      "overs":12,
      "status": "ready_to_settle",
      "runs": 5
    },
    { 
      "innings": 1,
      "team": "Name of innings batting team",
      "overs":20,
      "status": "inactive",
      "runs": "Void"
    },
    { 
      "innings": 2,
      "team": "Name of innings batting team",
      "overs":6,
      "status": "inactive",
      "runs": "Void"
    },
    { 
      "innings": 2,
      "team": "Name of innings batting team",
      "overs":12,
      "status": "inactive",
      "runs": "Void"
    }
  ],
  "batsmen": [
    { 
      "innings": 1,
      "team": "Home team name",
      "batsman": "Name of batsman",
      "lineup_id": 1,
      "status": "inactive",
      "runs": 1
    },
    { 
      "innings": 1,
      "team": "Home team name",
      "batsman": "Name of batsman",
      "lineup_id": 2,
      "status": "active",
      "runs": 2
    },
    { 
      "innings": 1,
      "team": "Home team name",
      "batsman": "Name of batsman",
      "lineup_id": 3,
      "status": "ready_to_settle",
      "runs": 3
    },
    { 
      "innings": 1,
      "team": "Away team name",
      "batsman": "Name of batsman",
      "lineup_id": 4,
      "status": "inactive",
      "runs": 4
    },
    { 
      "innings": 1,
      "team": "Away team name",
      "batsman": "Name of batsman",
      "lineup_id": 5,
      "status": "active",
      "runs": 5
    },
    { 
      "innings": 1,
      "team": "Away team name",
      "batsman": "Name of batsman",
      "lineup_id": 6,
      "status": "ready_to_settle",
      "runs": 6
    },
  ]
}

module.exports=sendJSON 