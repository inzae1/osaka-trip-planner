(() => {
  const STORE='osakaPlannerGoogleMapsKey';
  const gate=document.getElementById('apiGate');
  const form=document.getElementById('apiForm');
  const input=document.getElementById('apiKey');
  const canvas=document.getElementById('gmapsCanvas');
  const fallback=document.getElementById('routeMap');
  let map, currentKey='d1', markers=[], renderers=[], hoverInfo, activeInfo;
  const planIds={d1:['kix','tengachaya','kitahamaSt','apa','saru','moto','manpuku','nakanoshima','kingN','lika','cabin','hanshinBeer','hitori','matsu','iwai','mcd','apa'],d2:['sukiya','kitahamaSt','hsuita','asahi','hsuita','maren','naka','yatt','black','akaU','hanamaru','hanamaru','toriki','apa'],d3:['apa','kitahamaSt','metro','kin','hozen','melon','kingB','kona','ultra','akaN','metro','nankai']};
  const planTimes={}; Object.entries(routePlans).forEach(([k,v])=>planTimes[k]=v.stops.map(x=>x[0]));
  function clearMap(){markers.forEach(x=>x.setMap(null));renderers.forEach(x=>x.setMap(null));markers=[];renderers=[];hoverInfo?.close();activeInfo?.close();activeInfo=null}
  function modeFor(key,index){return (key==='d1'&&(index<=1||index===13))||(key==='d2'&&(index===1||index===4||index===9))||(key==='d3'&&index===1)?google.maps.TravelMode.TRANSIT:google.maps.TravelMode.WALKING}
  function drawSegment(a,b,path,mode,color,duration,planned,isFallback){
    const line=new google.maps.Polyline({map,path,strokeOpacity:0,strokeWeight:6,clickable:true,zIndex:1,icons:[{icon:{path:google.maps.SymbolPath.CIRCLE,fillColor:color,fillOpacity:1,strokeColor:'#fff',strokeOpacity:1,strokeWeight:1,scale:3.5},offset:'0',repeat:'15px'}]});
    const modeText=mode===google.maps.TravelMode.TRANSIT?'JR·대중교통':'도보';
    const shownDuration=duration||planned||'예상시간 확인';
    const content=`<div class="leg-pop"><b>${modeText} ${shownDuration}</b><span>${P[a].n} → ${P[b].n}</span>${isFallback?'<small>직선 안내선 · 정확한 길은 아래 길찾기 버튼 확인</small>':planned?`<small>일정표 기준: ${planned}</small>`:''}</div>`;
    const show=e=>{hoverInfo.setContent(content);hoverInfo.setPosition(e.latLng);hoverInfo.open({map})};
    line.addListener('mouseover',show);line.addListener('mouseout',()=>hoverInfo.close());line.addListener('click',show);renderers.push(line);
  }
  function requestSegment(a,b,mode,color,planned){return new Promise(resolve=>{const origin={lat:P[a].c[0],lng:P[a].c[1]},destination={lat:P[b].c[0],lng:P[b].c[1]};const service=new google.maps.DirectionsService();service.route({origin,destination,travelMode:mode},(result,status)=>{if(status==='OK'&&result.routes[0]){drawSegment(a,b,result.routes[0].overview_path,mode,color,result.routes[0].legs[0]?.duration?.text,planned,false)}else{drawSegment(a,b,[origin,destination],mode,color,null,planned,true)}resolve()})})}
  async function render(key){
    if(!map)return;currentKey=key;clearMap();
    const ids=planIds[key],color=routePlans[key].color,bounds=new google.maps.LatLngBounds(),groups=new Map();
    ids.forEach((id,i)=>{bounds.extend({lat:P[id].c[0],lng:P[id].c[1]});if(!groups.has(id))groups.set(id,[]);groups.get(id).push({number:i+1,time:planTimes[key][i]})});
    groups.forEach((visits,id)=>{const pos={lat:P[id].c[0],lng:P[id].c[1]},numbers=visits.map(v=>v.number).join('·'),times=visits.map(v=>`${v.number}번 ${v.time}`).join(' · '),grouped=visits.length>1;const marker=new google.maps.Marker({map,position:pos,zIndex:1000+visits[visits.length-1].number,optimized:false,icon:{path:google.maps.SymbolPath.CIRCLE,scale:grouped?22:15,fillColor:color,fillOpacity:1,strokeColor:'#fff',strokeWeight:3},label:{text:numbers,color:'#fff',fontWeight:'800',fontSize:grouped?'10px':'12px'},title:`${numbers}. ${times} ${P[id].n}`});const info=new google.maps.InfoWindow({content:`<div class="gm-info"><b>${numbers}. ${P[id].n}</b><p><strong>${times}</strong></p><p>${P[id].a}</p><a href="${mapsUrl(P[id])}" target="_blank">Google 지도에서 열기 ↗</a></div>`});marker.addListener('click',()=>{activeInfo?.close();activeInfo=info;info.open({map,anchor:marker})});markers.push(marker)});
    map.fitBounds(bounds,55);for(let i=0;i<ids.length-1;i++)await requestSegment(ids[i],ids[i+1],modeFor(key,i),color,routePlans[key].stops[i][2]);
  }
  window.renderProRoute=render;
  window.initOsakaPlannerMap=()=>{map=new google.maps.Map(canvas,{center:{lat:34.7005,lng:135.5},zoom:14,mapTypeControl:false,streetViewControl:false,fullscreenControl:true,gestureHandling:'greedy'});hoverInfo=new google.maps.InfoWindow({disableAutoPan:true});map.addListener('click',()=>{activeInfo?.close();activeInfo=null;hoverInfo.close()});fallback.style.display='none';gate.classList.add('hidden');render(currentKey)};
  function load(key){const old=document.getElementById('gmapsSdk');if(old)old.remove();const s=document.createElement('script');s.id='gmapsSdk';s.async=true;s.defer=true;s.src=`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&language=ko&region=KR&callback=initOsakaPlannerMap`;s.onerror=()=>{gate.classList.remove('hidden');alert('API 키 또는 API 활성화 상태를 확인해 주세요.')};document.head.appendChild(s)}
  form.addEventListener('submit',e=>{e.preventDefault();const key=input.value.trim();if(!key)return;localStorage.setItem(STORE,key);load(key)});
  document.getElementById('apiSettings').addEventListener('click',()=>{gate.classList.remove('hidden');input.value='';input.focus()});
  const saved=localStorage.getItem(STORE);if(saved)load(saved);
})();
