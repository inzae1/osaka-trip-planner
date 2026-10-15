const routeMap = document.getElementById('routeMap');
const routes = {
  d1: 'https://maps.google.com/maps?saddr=34.434700,135.244100&daddr=34.637172,135.496961+to:34.691178,135.506714+to:34.689447,135.505280+to:34.685650,135.499150+to:34.690006,135.510029+to:34.691384,135.507812+to:34.682897,135.516740+to:34.696646,135.508181+to:34.698049,135.498052+to:34.696404,135.496276+to:34.698934,135.497954+to:34.706100,135.497100+to:34.703000,135.499400+to:34.690564,135.502848+to:34.692480,135.500620+to:34.689447,135.505280&output=embed',
  d2: 'https://maps.google.com/maps?saddr=34.689447,135.505280&daddr=34.687739,135.506752+to:34.691178,135.506714+to:34.759777,135.517284+to:34.762745,135.521630+to:34.759777,135.517284+to:34.706664,135.503947+to:34.689447,135.505280+to:34.706900,135.505480+to:34.704704,135.496544+to:34.703575,135.497887+to:34.703000,135.499400+to:34.703360,135.497764+to:34.691523,135.502753+to:34.687860,135.506520+to:34.689447,135.505280&output=embed',
  d3: 'https://maps.google.com/maps?saddr=34.689447,135.505280&daddr=34.691178,135.506714+to:34.666167,135.501331+to:34.668664,135.503053+to:34.668350,135.502000+to:34.667700,135.502200+to:34.659450,135.505350+to:34.664550,135.501550+to:34.663700,135.504100+to:34.665450,135.502350+to:34.666167,135.501331+to:34.662250,135.501150&output=embed'
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
