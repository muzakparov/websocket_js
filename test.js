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
      "status": "inactive",
      "runs": "Void"
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
    { "innings": 1,
      "team": "Name of innings batting team",
      "batsman": "Name of batsman",
      "lineup_id": 16,
      "status": "inactive",
      "runs": 26
    }
  ]
}

module.exports=sendJSON 