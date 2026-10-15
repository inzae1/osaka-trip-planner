const C={1:'#eb4b36',2:'#2375d8',3:'#178b67'};
const src={
 apa:'https://www.apahotel.com/hotel/kansai/osaka/yodoyabashi-kitahamaekimae/',saru:'https://12ya.nen2.com/',apre:'https://www.google.com/maps/search/?api=1&query=大阪市中央区鎗屋町1-1-1+愛知ビル3F',iwai:'https://www.tablecheck.com/ja/iwaidori-yodoyabshi-honten',kingram:'https://kingram-liquor.jp/shop/',likaman:'https://www.likaman.co.jp/special/umeda/',cabin:'https://ticketcabin.com/shop/liquor',hitori:'https://kappa.hankyu.co.jp/shop/hitori_karubi1965/',akagaki:'https://www.akagakiya.com/shop/',asahi:'https://img.asahibeer.co.jp/brewery/suita/',maren:'https://page.line.me/462tlbql',black:'https://www.sapporobeer.jp/beer/thebar2026/osaka/',matsuba:'https://meisei-matsuba.com/shop/honten/',hanamaru:'https://page.line.me/121ujdyf',sumi:'https://www.kushi-ikka.com/kitahama.html',kinryu:'https://kinryuramen.com/home/goldendragon/',konamon:'https://konamontarounanba.owst.jp/',metro:'https://subway.osakametro.co.jp/station_guide/station/M20_%E3%81%AA%E3%82%93%E3%81%B0_%E6%A7%8B%E5%86%85%E5%9B%B3_r.pdf',kix:'https://www.kansai-airport.or.jp/access/from-airport/train'};
const P={
 apa:{n:'APA 호텔 요도야바시 기타하마역앞',a:'〒541-0043 大阪市中央区高麗橋2-3-10',c:[34.689447,135.505280],s:src.apa},
 tengachaya:{n:'난카이·Osaka Metro 덴가차야역',a:'〒557-0041 大阪市西成区岸里1-1-9',c:[34.637172,135.496961],s:'https://www.nankai.co.jp/traffic/station/tengachaya.html'},
 kitahamaSt:{n:'Osaka Metro 기타하마역',a:'大阪市中央区北浜1丁目 (K14)',c:[34.691178,135.506714],s:'https://subway.osakametro.co.jp/station_guide/K/k14/'},
 saru:{n:'사루식당 본점',a:'〒541-0051 大阪市中央区備後町4-3-4 大阪タイガービル1F',c:[34.685650,135.499150],s:src.saru},
 manpuku:{n:'만후쿠 베이커리',a:'〒540-0031 大阪市中央区北浜東5-1',c:[34.690006,135.510029],s:'https://www.google.com/maps/search/?api=1&query=大阪市中央区北浜東5-1'},
 hana:{n:'하나다코',a:'〒530-0017 大阪市北区角田町9-26 新梅田食道街1F',c:[34.70336,135.497764],s:'https://shinume.com/'},
 kita:{n:'기타하마 카페·강변 산책',a:'大阪市中央区北浜1丁目 일대',c:[34.691384,135.507812],s:'https://osaka-info.jp/'},
 apre:{n:'아프레리쿼',a:'〒540-0027 大阪市中央区鎗屋町1-1-1 愛知ビル3F',c:[34.682897,135.516740],s:src.apre},
 kingN:{n:'킹그램 리커 니시텐마점',a:'〒530-0047 大阪市北区西天満3-6-35 西天満GTCビル',c:[34.696646,135.508181],s:src.kingram},
 lika:{n:'리커마운틴 우메다점',a:'〒530-0002 大阪市北区曽根崎新地1-10-1 エスパシオンYAMADA 1F',c:[34.698049,135.498052],s:src.likaman},
 yama:{n:'야마야 도지마플라자점',a:'〒530-0003 大阪市北区堂島1-5-30 堂島プラザビル1F',c:[34.696404,135.496276],s:'https://www.yamaya.jp/'},
 cabin:{n:'캐빈리커 오사카역앞 제2빌딩점',a:'〒530-0001 大阪市北区梅田1-2-2 大阪駅前第2ビルB2F',c:[34.698934,135.497954],s:src.cabin},
 hitori:{n:'히토리카루비1965 갓파요코초',a:'〒530-0012 大阪市北区芝田1-7-2 阪急かっぱ横丁',c:[34.7061,135.4971],s:src.hitori},
 akaU:{n:'아카가키야 우메다점',a:'大阪市北区梅田地下街2-5 ホワイティうめだ',c:[34.7030,135.4994],s:src.akagaki},
 iwai:{n:'이와이도리 요도야바시 본점',a:'〒541-0042 大阪市中央区今橋3-2-16',c:[34.690564,135.502848],s:src.iwai},
 mcd:{n:'맥도날드 요도야바시점',a:'〒541-0041 大阪市中央区北浜4-1-1 淀屋橋ゲートタワーB1F',c:[34.692480,135.500620],s:'https://crewrecruiting.mcdonalds.co.jp/map/27836'},
 sukiya:{n:'스키야 기타하마점',a:'〒541-0046 大阪市中央区平野町1-8-11',c:[34.687739,135.506752],s:'https://maps.sukiya.jp/jp/detail/1965.html'},
 hsuita:{n:'한큐 스이타역',a:'〒564-0041 吹田市泉町1-3-40',c:[34.759777,135.517284],s:'https://www.hankyu.co.jp/station/suita.html'},
 asahi:{n:'아사히 맥주 뮤지엄 오사카·스이타',a:'〒564-0071 吹田市西の庄町1-45',c:[34.762745,135.52163],s:src.asahi},
 maren:{n:'MAREN 나카자키초',a:'〒530-0015 大阪市北区中崎西1-4-22',c:[34.706664,135.503947],s:src.maren},
 naka:{n:'나카자키초 산책 중심점',a:'大阪市北区中崎西1丁目 일대',c:[34.706900,135.505480],s:'https://osaka-info.jp/spot/nakazakicho/'},
 black:{n:'삿포로 생맥주 흑라벨 THE BAR OSAKA',a:'1-1-1 Ofukacho, Kita Ward, Osaka 530-0011 · LINKS UMEDA 1F',c:[34.704704,135.4965441],s:src.black},
 matsu:{n:'쿠시카츠 마츠바 총본점',a:'〒530-0017 大阪市北区角田町9-20 新梅田食道街1F',c:[34.703575,135.497887],s:src.matsuba},
 hanamaru:{n:'하나마루테이 요도야바시점',a:'〒541-0041 大阪市中央区北浜3-2-14',c:[34.691523,135.502753],s:src.hanamaru},
 sumi:{n:'야키토리와 지자케 스미잇카',a:'〒541-0046 大阪市中央区平野町1-8-14',c:[34.687860,135.506520],s:src.sumi},
 metro:{n:'Osaka Metro 난바역',a:'大阪市中央区難波3丁目 (M20/Y15/S16)',c:[34.666167,135.501331],s:src.metro,w:true},
 kin:{n:'킨류라멘 도톤보리점',a:'〒542-0077 大阪市中央区道頓堀1-7-26',c:[34.668664,135.503053],s:src.kinryu},
 melon:{n:'메론브레드 체크 포인트',a:'〒542-0071 大阪市中央区道頓堀1-5-8',c:[34.66835,135.5020],s:'https://www.google.com/maps/search/?api=1&query=大阪市中央区道頓堀1-5-8'},
 hozen:{n:'호젠지',a:'〒542-0076 大阪市中央区難波1-2-16',c:[34.6677,135.5022],s:'https://houzenji.jp/'},
 kingB:{n:'킹그램 리커 난바점',a:'〒542-0075 大阪市中央区難波千日前7-10 COCONAMBA 3F',c:[34.6637,135.5041],s:src.kingram},
 kona:{n:'코나몬타로 난바센니치마에점',a:'〒542-0075 大阪市中央区難波千日前11-24',c:[34.66455,135.50155],s:src.konamon},
 ultra:{n:'ULTRA WHISKY',a:'〒556-0005 Osaka, Naniwa Ward, Nipponbashi, 4 Chome−8−10 三鑛ビル',c:[34.65945,135.50535],s:'https://www.google.com/maps/search/?api=1&query=大阪市浪速区日本橋4-8-10'},
 akaN:{n:'아카가키야 난바점',a:'〒542-0076 大阪市中央区難波3-1-32',c:[34.66545,135.50235],s:src.akagaki},
 nankai:{n:'난카이 난바역',a:'〒542-8503 大阪市中央区難波5-1-60',c:[34.66225,135.50115],s:'https://www.nankai.co.jp/traffic/station/namba.html',w:true},
 kix:{n:'간사이국제공항 제1터미널',a:'〒549-0001 大阪府泉佐野市泉州空港北1',c:[34.4347,135.2441],s:src.kix}
};
const days=[
 {d:1,title:'KIX · 기타하마 · 혼마치 · 우메다 · 요도야바시',stops:[['09:00','kix'],['09:45','tengachaya'],['10:20','kitahamaSt'],['10:25','apa'],['10:55','saru'],['12:00','manpuku'],['12:20','kita'],['13:15','apre'],['14:10','kingN'],['14:50','lika'],['15:10','yama'],['15:25','cabin'],['16:45','hitori'],['17:55','akaU'],['19:20','iwai'],['20:35','mcd'],['20:50','apa']],legs:['난카이 공항급행 약 40분','사카이스지선 약 25분','도보 2~3분','도보 11~13분','도보 18~22분','도보 8~10분','도보 18~22분','도보 25~30분','도보 18~22분','도보 4~6분','도보 7~10분','도보·전철 15~25분','도보 8~12분','미도스지선+도보 18~25분','도보 6~8분','도보 7~10분']},
 {d:2,title:'스이타 · 나카자키초 · 우메다 · 요도야바시',stops:[['08:00','apa'],['08:10','sukiya'],['08:45','kitahamaSt'],['09:25','hsuita'],['09:40','asahi'],['11:45','hsuita'],['12:30','maren'],['14:00','apa'],['15:30','naka'],['16:00','black'],['16:40','matsu'],['17:20','akaU'],['18:00','hana'],['18:45','hanamaru'],['20:00','sumi'],['20:50','apa']],legs:['도보 5~7분','도보 5~7분','사카이스지선·한큐 약 35~40분','도보 10분','도보 10분','한큐+지하철 약 35~45분','지하철+도보 20~25분','지하철+도보 20~25분','도보 15~20분','도보 5~8분','도보 3~5분','도보 2~4분','미도스지선+도보 15~20분','도보 10~12분','도보 3~5분']},
 {d:3,title:'기타하마 · 난바 · 닛폰바시 · KIX',stops:[['06:40','apa'],['06:45','kitahamaSt'],['07:15','metro'],['07:35','kin'],['08:10','melon'],['08:25','hozen'],['10:00','kingB'],['11:00','kona'],['11:50','ultra'],['12:25','akaN'],['12:50','metro'],['13:00','nankai'],['14:00경','kix']],legs:['도보 2~3분','사카이스지선+환승 15~20분','도보 8~10분','도보 2~4분','도보 4~6분','도보 7~10분','도보 4~6분','도보 10~14분','도보 12~16분','도보 4~6분','도보 7~10분','난카이 공항급행 약 43분']}
];
function mapsUrl(p){return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.a)}`}
const dayCards=document.getElementById('dayCards');days.forEach(day=>{const el=document.createElement('article');el.className=`day-block day-${day.d}`;el.dataset.day=day.d;el.innerHTML=`<div class="day-title"><h3>DAY ${day.d}</h3><p>${day.title}</p></div><div class="route-list">${day.stops.map(([t,k],i)=>{const p=P[k];return `<div class="stop"><div class="stop-time">${t}</div><div class="stop-dot">${i+1}</div><div class="stop-body"><h4>${p.n}</h4><p>${p.a}</p></div></div>${i<day.legs.length?`<div class="leg">${day.legs[i]}</div>`:''}`}).join('')}</div>`;dayCards.appendChild(el)});
document.querySelectorAll('.day-nav button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.day-nav button').forEach(x=>x.classList.toggle('active',x===b));const d=b.dataset.day;document.querySelectorAll('.day-block').forEach(x=>x.style.display=d==='all'||x.dataset.day===d?'grid':'none')});
const useDays={};days.forEach(d=>d.stops.forEach(([,k])=>useDays[k]=(useDays[k]||new Set()).add(d.d)));
const rows=document.getElementById('placeRows');function renderRows(q=''){rows.innerHTML='';Object.entries(P).filter(([k,p])=>(p.n+p.a).toLowerCase().includes(q.toLowerCase())).forEach(([k,p])=>{const tr=document.createElement('tr');tr.innerHTML=`<td>${[...(useDays[k]||[])].map(x=>'D'+x).join(' · ')}</td><td><b>${p.n}</b></td><td>${p.a}</td><td>${p.c[0].toFixed(6)}, ${p.c[1].toFixed(6)}</td><td><a href="${p.s}" target="_blank">출처 ↗</a></td>`;rows.appendChild(tr)})}renderRows();document.getElementById('searchInput').oninput=e=>renderRows(e.target.value);
document.getElementById('downloadCsv').onclick=()=>{const body=['day,name,address,latitude,longitude,source',...Object.entries(P).map(([k,p])=>`"${[...(useDays[k]||[])].join('/')}" ,"${p.n}","${p.a}",${p.c[0]},${p.c[1]},"${p.s}"`) ].join('\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+body],{type:'text/csv'}));a.download='osaka_verified_places.csv';a.click()};
