const routeMap = document.getElementById('routeMap');
const routes = {
  d1: 'https://maps.google.com/maps?saddr=34.684159,135.502891&daddr=34.685650,135.499150+to:34.682897,135.516740+to:34.690006,135.510029+to:34.691384,135.507812+to:34.696646,135.508181+to:34.698049,135.498052+to:34.696404,135.496276+to:34.698934,135.497954+to:34.7061,135.4971+to:34.7030,135.4994+to:34.684159,135.502891+to:34.680420,135.505580+to:34.683560,135.506420+to:34.684159,135.502891&output=embed',
  d2: 'https://maps.google.com/maps?saddr=34.684159,135.502891&daddr=34.683530,135.508040+to:34.681746,135.506129+to:34.759777,135.517284+to:34.762745,135.52163+to:34.759777,135.517284+to:34.706664,135.503947+to:34.706900,135.505480+to:34.704704,135.4965441+to:34.703575,135.497887+to:34.703495,135.498334+to:34.7030,135.4994+to:34.70336,135.497764+to:34.682230,135.497050+to:34.684159,135.502891&output=embed',
  d3: 'https://maps.google.com/maps?saddr=34.684159,135.502891&daddr=34.666167,135.501331+to:34.668664,135.503053+to:34.66835,135.5020+to:34.6677,135.5022+to:34.65945,135.50535+to:34.66455,135.50155+to:34.6637,135.5041+to:34.66545,135.50235+to:34.666167,135.501331+to:34.66225,135.50115&output=embed'
};
const routePlans = {
  d1: { label:'DAY 1 · 전체', color:'#eb4b36', stops:days[0].stops.map((x,i)=>[x[0],x[1],days[0].legs[i]||''])},
  d2: { label:'DAY 2 · 전체', color:'#2375d8', stops:days[1].stops.map((x,i)=>[x[0],x[1],days[1].legs[i]||''])},
  d3: { label:'DAY 3 · 난바', color:'#178b67', stops:days[2].stops.slice(0,-1).map((x,i)=>[x[0],x[1],days[2].legs[i]||''])}
};
routeMap.src=routes.d1;
document.querySelectorAll('.route-map-tabs button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.route-map-tabs button').forEach(item => item.classList.toggle('active', item === button));
    if(window.renderProRoute) window.renderProRoute(button.dataset.route); else routeMap.src = encodeURI(routes[button.dataset.route]);
  });
});
