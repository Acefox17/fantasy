'use client';
import { useState } from "react";


interface Player {
  name:string;
  relativity:number;
  position:Position;
}

interface TakenPlayer extends Player {
  takenAmount:number;
}

enum Position {
  RB, WR, 
  TE, QB
}

const qbCount = 20;
const rbCount = 36;
const wrCount = 40;
const teCount = 10;


const teamCount = 6;
const budget = 577;

const players: Player[] = [
  {name: "Christian McCaffrey", relativity:1, position:Position.RB},
  {name: "Austin Ekeler", relativity:.95, position:Position.RB},
  {name: "Bijan Robinson", relativity:.8, position:Position.RB},
  {name: "Nick Chubb", relativity:.9, position:Position.RB},
  {name: "Josh Jacobs", relativity:.95, position:Position.RB},
  {name: "Derrick Henry", relativity:.88, position:Position.RB},
  {name: "Saquan Barkly", relativity:.95, position:Position.RB},
  {name: "Tony Pollard", relativity:1, position:Position.RB},
  {name: "Aaron Jones", relativity:.9, position:Position.RB},
  {name: "Joe Mixon", relativity:.8, position:Position.RB},
  {name: "Jonathan Taylor", relativity:1, position:Position.RB},
  {name: "Najee Harris", relativity:.9, position:Position.RB},
  {name: "Alvin Kamara", relativity:1, position:Position.RB},
  {name: "Jahmyr Gibbs", relativity:1, position:Position.RB},
  {name: "Kenneth Walker III", relativity:.9, position:Position.RB},
  {name: "Rhamondre Stevenson", relativity:.95, position:Position.RB},
  {name: "Travis Etienne Jr.", relativity:.9, position:Position.RB},
  {name: "Alexander Mattison", relativity:.85, position:Position.RB},  
  {name: "Rachadd White", relativity:.9, position:Position.RB},
  {name: "Breece Hall", relativity:.95, position:Position.RB},
  {name: "Miles Sanders", relativity:1, position:Position.RB},
  {name: "James Conner", relativity:1, position:Position.RB},
  {name: "Cam Akers", relativity:1, position:Position.RB},
  {name: "Dameon Pierce", relativity:.9, position:Position.RB},
  {name: "J.K. Dobbins", relativity:.9, position:Position.RB},
  {name: "Samaje Perine", relativity:.9, position:Position.RB},  
  {name: "Khalil Herbert", relativity:1, position:Position.RB},
  {name: "Dalvin Cook", relativity:.9, position:Position.RB},
  {name: "James Cook", relativity:1, position:Position.RB},
  {name: "Rashaad Penny", relativity:.85, position:Position.RB},
  {name: "AJ Dillon", relativity:1, position:Position.RB},
  {name: "Brian Robinson Jr.", relativity:1, position:Position.RB},
  {name: "D'Andre Swift", relativity:.85, position:Position.RB},
  {name: "Isiah Pacheco", relativity:1, position:Position.RB},
  {name: "Raheem Mostert", relativity:1, position:Position.RB},
  {name: "Jerick McKinnon", relativity:.9, position:Position.RB},
  {name: "Elija Mitchell", relativity:.9, position:Position.RB},
  {name: "Zach Charbonnet", relativity:1, position:Position.RB},
  {name: "David Montgomery", relativity:.95, position:Position.RB},
  {name: "Antonio Gibson", relativity:.85, position:Position.RB},
  {name: "Ezekeil Elliot", relativity:1, position:Position.RB},
  {name: "Kenneth Gainwell", relativity:.8, position:Position.RB},
  {name: "Damien Harris", relativity:1, position:Position.RB},


  {name: "Jalen Hurts", relativity:1, position:Position.QB},
  {name: "Patrick Mahomes", relativity:.98, position:Position.QB},
  {name: "Josh Allen", relativity: .8, position:Position.QB},
  {name: "Lamar Jackson", relativity: .9, position:Position.QB},
  {name: "Joe Burrow", relativity: .9, position:Position.QB},
  {name: "Justin Fields", relativity: .9, position:Position.QB},
  {name: "Justin Herbert", relativity: .8, position:Position.QB},
  {name: "Trevor Lawrence", relativity: 1, position:Position.QB},
  {name: "Daniel Jones", relativity: .9, position:Position.QB},
  {name: "Dak Prescott", relativity: .92, position:Position.QB},
  {name: "Tua Tagovailoa", relativity: 1, position:Position.QB},
  {name: "Kirk Cousins", relativity: .95, position:Position.QB},
  {name: "Geno Smith", relativity: .95, position:Position.QB},
  {name: "Aaron Rodgers", relativity: 1, position:Position.QB},
  {name: "Jared Goff", relativity: 1, position:Position.QB},
  {name: "Anthony Richardson", relativity: .8, position:Position.QB},
  {name: "Deshaun Watson", relativity: .9, position:Position.QB},
  {name: "Derek Carr", relativity: 1, position:Position.QB},
  {name: "Russell Wilson", relativity: .9, position:Position.QB},
  {name: "Kyler Murry", relativity: 1, position:Position.QB},
  {name: "BrockPurdy", relativity: 1, position:Position.QB},
  {name: "Kenny Picket", relativity: .8, position:Position.QB},
  {name: "Jordan Love", relativity: 1, position:Position.QB},
  {name: "Mathew Stafford", relativity: 1, position:Position.QB},
  {name: "Jimmy Garoppolo", relativity: 1, position:Position.QB},
  {name: "Ryan Tannehill", relativity: .85, position:Position.QB},
  {name: "Sam Howell", relativity: .8, position:Position.QB},
  {name: "Baker Mayfield", relativity: 1, position:Position.QB},
  {name: "Bryce Young", relativity: 1, position:Position.QB},


  {name: "Justin Jefferson", relativity: 1, position:Position.WR},
  {name: "Tyreek Hill", relativity: .9, position:Position.WR},
  {name: "Cooper Kupp", relativity: .9, position:Position.WR},
  {name: "Stefon Diggs", relativity: .9, position:Position.WR},
  {name: "Ja'Marr Chase", relativity: 1, position:Position.WR},
  {name: "A.J. Brown", relativity: 1, position:Position.WR},
  {name: "CeeDee Lamb", relativity: .95, position:Position.WR},
  {name: "Davante Adams", relativity: .95, position:Position.WR},
  {name: "Amon-Ra St.Brown", relativity: .95, position:Position.WR},
  {name: "Garrett Wilson", relativity: 1, position:Position.WR},
  {name: "Jaylen Waddle", relativity: .88, position:Position.WR},
  {name: "Chris Olave", relativity: .88, position:Position.WR},
  {name: "Amari Cooper", relativity: .95, position:Position.WR},
  {name: "DK Metcalf", relativity: .95, position:Position.WR},
  {name: "DeVonta Smith", relativity: 1, position:Position.WR},
  {name: "Tee Higgins", relativity: 1, position:Position.WR},
  {name: "Christian Watson", relativity: 1, position:Position.WR},
  {name: "DeAndre Hopkins", relativity: 1, position:Position.WR},
  {name: "Tyler Lockett", relativity: .9, position:Position.WR},
  {name: "Diontae Johnson", relativity: 1, position:Position.WR},
  {name: "Calvin Ridley", relativity: 1, position:Position.WR},
  {name: "Terry McLaurin", relativity: .9, position:Position.WR},
  {name: "Brandon Aiyuk", relativity: .95, position:Position.WR},
  {name: "Deebo Samuel", relativity: 1, position:Position.WR},
  {name: "Marquise Brown", relativity: 1, position:Position.WR},    
  {name: "Mike Williams", relativity: .9, position:Position.WR},
  {name: "George Pickens", relativity: 1, position:Position.WR},
  {name: "Christian Kirk", relativity: .9, position:Position.WR},
  {name: "Chris Godwin", relativity: .9, position:Position.WR},
  {name: "Keenan Allen", relativity: .95, position:Position.WR},
  {name: "Drake London", relativity: 1, position:Position.WR},
  {name: "DJ Moore", relativity: .95, position:Position.WR},
  {name: "Mike Evans", relativity: 1, position:Position.WR},
  {name: "Michael Pittman Jr.", relativity: 1, position:Position.WR},
  {name: "Jahan Dotson", relativity: 1, position:Position.WR},
  {name: "Brandin Cooks", relativity: 1, position:Position.WR},
  {name: "Gabe Davis", relativity: 1, position:Position.WR},
  {name: "Courtland Sutton", relativity: 1, position:Position.WR},
  {name: "Jakobi Meyers", relativity: .9, position:Position.WR},
  {name: "JuJu Smith-Schuster", relativity: 1, position:Position.WR},
  {name: "Treylon Burks" , relativity: 1, position:Position.WR},
  {name: "Jerry Jeudy", relativity: .85, position:Position.WR},
  {name: "Jordan Addison", relativity: 1, position:Position.WR},
  {name: "Rashod Bateman", relativity: 1, position:Position.WR},
  {name: "Odell Beckham Jr.", relativity: 1, position:Position.WR},
  {name: "Skyy Moore", relativity: 1, position:Position.WR},
  {name: "Donovan Peoples-Jones", relativity: 1, position:Position.WR},
  {name: "Allen Lazard", relativity: .9, position:Position.WR},
  {name: "Kadarius Toney", relativity: .9, position:Position.WR},


  {name: "Travis Kelce", relativity: 1, position:Position.TE},
  {name: "Mark Andrews", relativity: .55, position:Position.TE},
  {name: "T.J. Hockenson", relativity: .8, position:Position.TE},
  {name: "Darren Waller", relativity: .8, position:Position.TE},
  {name: "Geroge Kittle", relativity: .9, position:Position.TE},
  {name: "Evan Engram", relativity: .75, position:Position.TE},
  {name: "Kyle Pitts", relativity: .95, position:Position.TE},
  {name: "Pat Freiermuth", relativity: .88, position:Position.TE},
  {name: "Dallas Goedert", relativity: 1, position:Position.TE},
  {name: "David Njoku", relativity: .9, position:Position.TE},
  {name: "Dalton Schultz", relativity: .8, position:Position.TE},
  {name: "Chigoziem", relativity: 1, position:Position.TE},




];

let shouldLog = true;
export default function Home() {
  const [bidName, setBidName] = useState<string>("");
  const [bidAmount, setBidAmount] = useState<number>(0);
  const [takenPlayers, setTakenPlayers] = useState<TakenPlayer[]>([]);

  const untakenPlayers = players.filter(p=>takenPlayers.filter(tp=>tp.name == p.name).length == 0);

  const bestMatchUntakenPlayer = untakenPlayers.filter(p=>p.name.includes(bidName))[0];

  const valueByPlayerName:{[playerName:string]:number} = {};

  const tePlayers = players.filter(p=>p.position == Position.TE);

  let lastTe:Player | undefined = undefined;
  for(const te of tePlayers) {
    if(lastTe == undefined) {
      valueByPlayerName[te.name] = 10000000000;
    } else {
      valueByPlayerName[te.name] = valueByPlayerName[lastTe.name] * te.relativity;
    }
    lastTe = te;
  }

  const qbPlayers = players.filter(p=>p.position == Position.QB);

  let lastQB:Player | undefined = undefined;
  for(const qb of qbPlayers) {
    if(lastQB == undefined) {
      valueByPlayerName[qb.name] = 10000000000;
    } else {
      valueByPlayerName[qb.name] = valueByPlayerName[lastQB.name] * qb.relativity;
    }
    lastQB = qb;
  }

  const rbPlayers = players.filter(p=>p.position == Position.RB);

  let lastRb:Player | undefined = undefined;
  for(const rb of rbPlayers) {
    if(lastRb == undefined) {
      valueByPlayerName[rb.name] = 10000000000;
    } else {
      valueByPlayerName[rb.name] = valueByPlayerName[lastRb.name] * rb.relativity;
    }
    lastRb = rb;
  }


  const wrPlayers = players.filter(p=>p.position == Position.WR);

  let lastWr:Player | undefined = undefined;
  for(const wr of wrPlayers) {
    if(lastWr == undefined) {
      valueByPlayerName[wr.name] = 10000000000;
    } else {
      valueByPlayerName[wr.name] = valueByPlayerName[lastWr.name] * wr.relativity;
    }
    lastWr = wr;
  }

  const takenTeCount = takenPlayers.filter(p=>p.position == Position.TE).length;
  const takenQBCount = takenPlayers.filter(p=>p.position == Position.QB).length;
  const takenRBCount = takenPlayers.filter(p=>p.position == Position.RB).length;
  const takenWRCount = takenPlayers.filter(p=>p.position == Position.WR).length;

  const valueAboveReplacementByPlayerName:{[playerName:string]:number} = {};

  for(const te of tePlayers) {
    valueAboveReplacementByPlayerName[te.name] = valueByPlayerName[te.name] - (valueByPlayerName[tePlayers[teCount -1].name] * 1);
  }

  for(const qb of qbPlayers) {
    valueAboveReplacementByPlayerName[qb.name] = valueByPlayerName[qb.name] - (valueByPlayerName[qbPlayers[qbCount -1].name] * 1.1);
  }

  for(const rb of rbPlayers) {
    valueAboveReplacementByPlayerName[rb.name] = valueByPlayerName[rb.name] - (valueByPlayerName[rbPlayers[rbCount -1].name] * 1.2);
  }

  for(const wr of wrPlayers) {
    valueAboveReplacementByPlayerName[wr.name] = valueByPlayerName[wr.name] - (valueByPlayerName[wrPlayers[wrCount -1].name] * 1.2);
  }

  const totalMoneyLeft = budget * teamCount - (takenPlayers.map(p=>p.takenAmount).reduce((a,b)=>a+b, 0));
  const totalValueLeft = untakenPlayers.filter(p=>valueAboveReplacementByPlayerName[p.name] > 0).map(p=>valueAboveReplacementByPlayerName[p.name]).reduce((a,b)=>a+b, 0);
  const dollarValuePerPlayerName:{[playerName:string]:number} = {};
  for(const p of untakenPlayers) {
    dollarValuePerPlayerName[p.name] = valueAboveReplacementByPlayerName[p.name] * (totalMoneyLeft/totalValueLeft);
  }

  function handleClick() {
    const player = bestMatchUntakenPlayer;
    if (player == undefined) {
      return;
    }
    const takenPlayer:TakenPlayer = Object.assign({}, player,  {takenAmount: bidAmount});
    const newTakenPlayers = takenPlayers.slice();
    newTakenPlayers.push(takenPlayer);
    setTakenPlayers(newTakenPlayers);
    setBidAmount(0);
    setBidName("");
  }

  const sortedUntakenPlayers = untakenPlayers.slice().sort((p1, p2)=>{
    return valueAboveReplacementByPlayerName[p2.name] - valueAboveReplacementByPlayerName[p1.name];
  })


  if(shouldLog) {
    let numbersToAverage = [];
    const averagedNumbers = [];
    for (const player of sortedUntakenPlayers) {
      numbersToAverage.push(dollarValuePerPlayerName[player.name] + 1)
      if(numbersToAverage.length == teamCount) {
        const average = numbersToAverage.reduce((a,b)=>a+b,0)/numbersToAverage.length;
        if(average>0) {
          averagedNumbers.push(average);
        }
        console.log(average);
        numbersToAverage = [];
      }
    }
    console.log("summedsteps: " + averagedNumbers.reduce((a,b)=>a+b, 0));
    shouldLog = false;
  }


  return (
    <main>
    <div>
      <input
        type="string"        
        value={bidName}
        onChange={(e) => {
          setBidName(e.target.value)
        }}/>
      <input
        type="number"
        pattern="[0-9]*"
        value={bidAmount}
        onChange={(e) => {
          if (e.target.validity.valid) {
            setBidAmount(Number(e.target.value))
          }
        }}/>        
     <button onClick={handleClick}>Did Draft</button>

      {bestMatchUntakenPlayer && <p>{bestMatchUntakenPlayer.name}, {dollarValuePerPlayerName[bestMatchUntakenPlayer.name] + 1}</p>}
      <ul>
        {sortedUntakenPlayers.map((player) => (
          <li key={player.name}>{player.name}, {dollarValuePerPlayerName[player.name] + 1}</li>
        ))}
      </ul>

    </div>
    </main>
  )
}




