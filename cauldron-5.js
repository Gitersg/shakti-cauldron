    const mission = state.missions.find(m=>m.id===t.dataset.check);
    const stepRow = mission && mission.steps.find(s=>s.id===t.dataset.step);
    if(stepRow && mission.status!=="done") stepRow.done = t.checked;
    save();
  }
});
document.getElementById("app").addEventListener("input", (event)=>{
  const t = event.target;
  if(t.dataset.notes){
    const mission = state.missions.find(m=>m.id===t.dataset.notes);
    if(mission) mission.notes = t.value;
    localStorage.setItem(KEY, JSON.stringify(state));
  }
});
document.getElementById("app").addEventListener("click", (event)=>{
  const t = event.target;
  if(t.dataset.seal){
    const mission = state.missions.find(m=>m.id===t.dataset.seal);
    if(!mission || mission.status==="done") return;
    if(mission.steps.some(s=>!s.done)){ alert("Check every step before you seal."); return; }
    const gain = Math.max(1, Math.round(mission.xp * state.profile.xpMultiplier));
    mission.status="done"; mission.awardedXp=gain; mission.completedAt=new Date().toISOString();
    state.xp += gain;
    state.log.unshift({id:uid(), at:mission.completedAt, text:"Sealed "+mission.title, xp:gain});
    save();
  }
  if(t.dataset.reopen){
    const mission = state.missions.find(m=>m.id===t.dataset.reopen);
    if(!mission || mission.status!=="done") return;
    state.xp = Math.max(0, state.xp - mission.awardedXp);
    mission.status="open"; mission.awardedXp=0; mission.completedAt=undefined;
    save();
  }
  if(t.dataset.del){ state.alchemy = state.alchemy.filter(a=>a.id!==t.dataset.del); save(); }
  if(t.id==="nadd"){
    const title = document.getElementById("nt").value.trim();
    if(!title) return;
    const lines = document.getElementById("ns").value.split("\n").map(s=>s.trim()).filter(Boolean);
    state.missions.unshift({ id:uid(), title, kind:"custom", track:document.getElementById("nk").value.trim()||"Custom", brief:document.getElementById("nb").value.trim(), steps:(lines.length?lines:["Do the work"]).map(step), xp:Number(document.getElementById("nx").value)||40, difficulty:2, status:"open", seeded:false, notes:"", benchCheck:"", safetyNote:"", awardedXp:0, createdAt:new Date().toISOString() });
    save();
  }
