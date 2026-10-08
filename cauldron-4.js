  const cards = state.alchemy.map(a=>`<article class="card"><h2>${escapeHtml(a.product||"Untitled")}</h2><p class="brass">${escapeHtml(a.status)}</p><p>${escapeHtml(a.purpose||"")}</p><button type="button" data-del="${a.id}">Delete</button></article>`).join("");
  return cards + `<article class="card"><h2>New alchemy page</h2><label>Target product<input id="ap" /></label><label>Purpose<textarea id="au"></textarea></label><label>Ingredients, one per line<textarea id="ai" placeholder="name — amount — role"></textarea></label><label>Conditions<textarea id="ac" placeholder="temperature, time, pH, solvent"></textarea></label><label>Method<textarea id="am"></textarea></label><label>Hazards<textarea id="ah"></textarea></label><button class="primary" type="button" id="aadd">Save page</button></article>`;
}
function settingsHtml(){
  return `<article class="card"><h2>Desk</h2><label>Name<input id="sn" value="${escapeAttr(state.profile.chemistName)}" /></label><label>Motto<input id="sm" value="${escapeAttr(state.profile.motto)}" /></label><button class="primary" type="button" id="ssave">Save name</button></article><article class="card"><h2>Backup</h2><p class="muted">Same JSON shape as the hosted desk. Import replaces this file’s saved desk.</p><div class="row"><button class="primary" type="button" id="export">Export backup</button><label class="btn">Import backup<input id="import" type="file" accept="application/json,.json" hidden /></label></div></article><article class="card"><h2>License</h2><p>MIT License. Copyright (c) 2026 Shrinjoy Ghosh. Source: github.com/Gitersg/shakti-cauldron</p></article>`;
}
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&" + "amp;")
    .replace(/</g, "&" + "lt;")
    .replace(/>/g, "&" + "gt;")
    .replace(/"/g, "&" + "quot;");
}
function escapeAttr(s){ return escapeHtml(s); }
document.querySelector("nav").addEventListener("click", (event)=>{
  const btn = event.target.closest("button"); if(!btn) return; view = btn.dataset.view; paint();
});
document.getElementById("app").addEventListener("change", (event)=>{
  const t = event.target;
  if(t.dataset.check){
