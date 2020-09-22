export default () => {
  let timeOut = null;
  return (fn, timer) => {
    if(timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(fn, timer)
  }
}