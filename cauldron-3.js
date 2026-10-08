  document.getElementById("rank").textContent = "Rank "+level+" · "+title;
  const floor = xpToReach(level), ceil = level>=20 ? floor+1 : xpToReach(level+1);
  const pct = level>=20 ? 100 : Math.round(((state.xp-floor)/Math.max(1,ceil-floor))*100);
  document.getElementById("bar").style.width = Math.max(0,Math.min(100,pct))+"%";
  document.getElementById("xp").textContent = state.xp+" XP"+(level>=20?"":" · next rank at "+ceil);
  document.querySelectorAll("nav button").forEach(btn=>btn.setAttribute("aria-current", btn.dataset.view===view?"page":"false"));
  const root = document.getElementById("app");
  root.innerHTML = view==="alchemy" ? alchemyHtml() : view==="settings" ? settingsHtml() : missionsHtml();
}
function missionsHtml(){
  const cards = state.missions.map(m=>{
    const steps = m.steps.map(s=>`<label class="row"><input type="checkbox" data-check="${m.id}" data-step="${s.id}" ${s.done?"checked":""} ${m.status==="done"?"disabled":""}/> <span>${escapeHtml(s.text)}</span></label>`).join("");
    return `<article class="card"><p class="brass">${escapeHtml(m.track)} · ${m.kind} · ${m.xp} XP · ${m.status}</p><h2>${escapeHtml(m.title)}</h2><p class="muted">${escapeHtml(m.brief)}</p>${m.safetyNote?`<p class="brass">${escapeHtml(m.safetyNote)}</p>`:""}${steps}<label>Notes<textarea data-notes="${m.id}">${escapeHtml(m.notes)}</textarea></label><div class="row"><button class="primary" type="button" data-seal="${m.id}">Seal</button><button type="button" data-reopen="${m.id}">Reopen</button></div></article>`;
  }).join("");
  return cards + `<article class="card"><h2>Write a mission</h2><label>Title<input id="nt" /></label><label>Track<input id="nk" value="Custom" /></label><label>Brief<textarea id="nb"></textarea></label><label>Steps, one per line<textarea id="ns">Read the source\nWrite the working</textarea></label><label>XP<input id="nx" type="number" value="${state.profile.defaultMissionXp}" /></label><button class="primary" type="button" id="nadd">Add mission</button></article>`;
}
function alchemyHtml(){
