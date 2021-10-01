const { response, request } = require('express');

const getPairsOfPlayers = async (req = request, resp = response, next) => {


  fetch('https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players')
    .then(data =>{
    const pairOfPlayers = [];
    const height = parseInt(data.params.height);
    for(const i = 0; i < data.values.lenght; i++)
    {
      const p1H = parseInt(players[i].h_in)

      for(const j = i+1; j < players.lenght; j++){

      
        const p2H = parseInt(players[j].h_in)
        
        if(p1H + p2H === height){
          pairOfPlayers.push([players[i].first_name +players[i].last_name
            , players[j].first_name + players[j].last_name])
        }
      }
    }

    if(pairOfPlayers.length === 0){
      return resp.json({message:'No matches found'});
    }
    else{
      resp.json(pairOfPlayers);
    }
  })
  
};

module.exports = { getPairsOfPlayers };
