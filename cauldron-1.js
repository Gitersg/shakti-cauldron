const KEY = "shakti-cauldron-portable-v1";
const TITLES = ["Ember Spark","Crucible Hand","Measure Keeper","Solution Scholar","Bench Adept","Formula Scribe","Bond Wright","Reaction Warden","Lattice Smith","Equilibrium Eye","Titre Hand","Organic Pathfinder","Still Master","Assay Warden","Cauldron Adept","Flame Sovereign","Lattice Sovereign","Master Chemist","Shakti Adept","Supreme Cauldron"];
function xpToReach(level){ if(level<=1) return 0; return Math.round(40*Math.pow(level-1,1.9)); }
function levelFromXp(xp){ let level=1; for(let n=2;n<=20;n++){ if(xp>=xpToReach(n)) level=n; else break;} return level; }
function uid(){ return crypto.randomUUID(); }
function step(text){ return {id:uid(), text, done:false}; }
function starter(){
  const rows = [
    ["The chemist’s first page","read","Foundations","Write what a chemist records.",["Name units for mass, volume, and temperature.","Write question, measurement, and what would prove you wrong."],30],
    ["Significant figures drill","solve","Foundations","Round only the precision you earned.",["Count sig figs in 12.0, 0.045, and 100.10.","Multiply 2.50 × 3.1 and round.","Write the rule in notes."],40],
    ["Density by water displacement","practical","Foundations","A stone or steel nut, water only.",["Record mass if you can.","Record the water rise.","Density = mass ÷ volume, with units."],50],
    ["Configurations, five elements","solve","Atoms","Ground states on paper.",["Write Na, Cl, Fe, Cu, Br.","Mark the copper exception."],45],
    ["Mass-to-mass, one reaction","solve","Stoichiometry","CaCO3 → CaO + CO2 from 25.0 g CaCO3.",["Confirm the 1:1 ratio.","Convert grams to moles.","Convert moles of CaO to grams."],55],
    ["Cabbage indicator chart","practical","Solutions","Kitchen acids and bases. No bleach.",["Cool a cabbage-water extract.","Test four household items in separate cups.","Record color and acid or base."],60],
    ["Le Chatelier on paper","solve","Equilibrium","N2 + 3H2 ⇌ 2NH3, exothermic forward.",["Shift if H2 is added.","Shift if pressure rises.","Shift if temperature rises."],50],
