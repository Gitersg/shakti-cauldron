  if(t.id==="aadd"){
    const product = document.getElementById("ap").value.trim();
    if(!product){ alert("Name the target product."); return; }
    const now = new Date().toISOString();
    const ingredients = document.getElementById("ai").value.split("\n").filter(s=>s.trim()).map(line=>{
      const [name,amount,role] = line.split("—").map(s=>s.trim());
      return {id:uid(), name:name||line.trim(), amount:amount||"", role:role||""};
    });
    state.alchemy.unshift({ id:uid(), product, purpose:document.getElementById("au").value, ingredients: ingredients.length?ingredients:[{id:uid(),name:"",amount:"",role:""}], temperature:"", time:"", ph:"", solvent:"", atmosphere:document.getElementById("ac").value, method:document.getElementById("am").value, observations:"", hazards:document.getElementById("ah").value, yieldNote:"", status:"idea", extra:[], createdAt:now, updatedAt:now });
    save();
  }
  if(t.id==="ssave"){
    state.profile.chemistName = document.getElementById("sn").value;
    state.profile.motto = document.getElementById("sm").value;
    save();
  }
  if(t.id==="export"){
    const file = { app:"shakti-cauldron", version:1, exportedAt:new Date().toISOString(), xp:state.xp, profile:state.profile, missions:state.missions, alchemy:state.alchemy, log:state.log };
    const blob = new Blob([JSON.stringify(file,null,2)], {type:"application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href=url; a.download="shakti-cauldron-backup.json"; a.click();
    URL.revokeObjectURL(url);
  }
});
document.getElementById("app").addEventListener("change", async (event)=>{
  if(event.target.id!=="import") return;
  const file = event.target.files && event.target.files[0];
  if(!file) return;
  try {
    const raw = JSON.parse(await file.text());
    if(raw.app!=="shakti-cauldron" || raw.version!==1) throw new Error("shape");
    state = { xp:raw.xp, profile:raw.profile, missions:raw.missions, alchemy:raw.alchemy, log:raw.log||[] };
    save();
  } catch(e){ alert("That file is not a Shakti Cauldron backup."); }
});
paint();
