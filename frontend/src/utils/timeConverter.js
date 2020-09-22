export default (n) => {
  if(!n) return null;
  n = parseInt(n);
  if(n < 60){
    return `${n}m`
  }
  const days = (n / 1440);
  const rdays = Math.floor(days);
  const rrmin = (n%1440);
  const hours = !rrmin ? ((days-rdays) / 60) : (rrmin/60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  let finalStr = "";
  if(rdays){
    finalStr += `${rdays}d `
  }
  if(rhours){
    finalStr += `${rhours}h `
  }
  if(rminutes){
    finalStr += `${rminutes}m`
  }
  return finalStr;
}
