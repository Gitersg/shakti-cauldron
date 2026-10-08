    ["Functional group patrol","solve","Organic","Name the family only.",["Classify ethanol, propanone, ethanoic acid, ethylamine."],40],
    ["Pairs you will not mix","practical","Bench craft","A written card. Do not test the pairs.",["Look up one university incompatibility chart.","Write five banned pairs, including bleach with acid and bleach with ammonia."],45],
    ["Plan a phenyl product — do not brew it from this card","practical","Product planning","Indian market phenyl is a pine-oil disinfectant emulsion, not a drug. No recipe and no concentrations here.",["Write what the product is and who must not use it.","Name classes only: oil, emulsifier, water, fragrance.","Write bans: no bleach, no ammonia, no closed heating.","Name PPE and the trusted source for any real method."],70]
  ];
  return rows.map((row)=>({
    id:uid(), title:row[0], kind:row[1], track:row[2], brief:row[3],
    steps: row[4].map(step), xp:row[5], difficulty:2, status:"open", seeded:true,
    notes:"", benchCheck:"", safetyNote: row[1]==="practical" ? "Stay inside the written steps. No extra chemicals." : "",
    awardedXp:0, createdAt:new Date().toISOString()
  }));
}
function fresh(){
  return {
    xp:0,
    profile:{ chemistName:"Chemist", motto:"What you can measure, you can master.", xpMultiplier:1, defaultMissionXp:40, tracks:["Foundations","Atoms","Stoichiometry","Solutions","Equilibrium","Organic","Bench craft","Product planning"], rankTitles: TITLES.map((title,i)=>({level:i+1,title})) },
    missions: starter(),
    alchemy: [],
    log: []
  };
}
let state = load();
let view = "missions";
function load(){
  try { const raw = JSON.parse(localStorage.getItem(KEY)||""); if(raw && raw.missions) return raw; } catch(e){}
  return fresh();
}
function save(){ localStorage.setItem(KEY, JSON.stringify(state)); paint(); }
function paint(){
  const level = levelFromXp(state.xp);
  const title = (state.profile.rankTitles.find(r=>r.level===level)||{}).title || ("Level "+level);
  document.getElementById("who").textContent = state.profile.chemistName || "Chemist";
  document.getElementById("motto").textContent = state.profile.motto || "";
