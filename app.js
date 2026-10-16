const C={1:'#ff5a36',2:'#4f7cff',3:'#00a77a'};
const src={
 apa:'https://www.apahotel.com/hotel/kansai/osaka/yodoyabashi-kitahamaekimae/',saru:'https://12ya.nen2.com/',iwai:'https://www.tablecheck.com/ja/iwaidori-yodoyabshi-honten',kingram:'https://kingram-liquor.jp/shop/',likaman:'https://www.likaman.co.jp/special/umeda/',cabin:'https://ticketcabin.com/shop/liquor',hitori:'https://kappa.hankyu.co.jp/shop/hitori_karubi1965/',akagaki:'https://www.akagakiya.com/shop/',asahi:'https://img.asahibeer.co.jp/brewery/suita/',maren:'https://page.line.me/462tlbql',black:'https://www.sapporobeer.jp/beer/thebar2026/osaka/',matsuba:'https://meisei-matsuba.com/shop/honten/',hanamaru:'https://page.line.me/121ujdyf',sumi:'https://www.kushi-ikka.com/kitahama.html',kinryu:'https://kinryuramen.com/home/goldendragon/',konamon:'https://konamontarounanba.owst.jp/',metro:'https://subway.osakametro.co.jp/station_guide/station/M20_%E3%81%AA%E3%82%93%E3%81%B0_%E6%A7%8B%E5%86%85%E5%9B%B3_r.pdf',kix:'https://www.kansai-airport.or.jp/access/from-airport/train'};
const P={
 apa:{n:'APA 호텔 요도야바시 기타하마역앞',a:'〒541-0043 大阪市中央区高麗橋2-3-10',c:[34.689447,135.505280],s:src.apa},
 tengachaya:{n:'난카이·Osaka Metro 덴가차야역',a:'〒557-0041 大阪市西成区岸里1-1-9',c:[34.637172,135.496961],s:'https://www.nankai.co.jp/traffic/station/tengachaya.html'},
 kitahamaSt:{n:'Osaka Metro 기타하마역',a:'大阪市中央区北浜1丁目 (K14)',c:[34.691178,135.506714],s:'https://subway.osakametro.co.jp/station_guide/K/k14/'},
 saru:{n:'사루식당 본점',a:'〒541-0051 大阪市中央区備後町4-3-4 大阪タイガービル1F',c:[34.685650,135.499150],s:src.saru},
 manpuku:{n:'만후쿠 베이커리',a:'〒540-0031 大阪市中央区北浜東5-1',c:[34.690006,135.510029],s:'https://www.google.com/maps/search/?api=1&query=大阪市中央区北浜東5-1'},
 moto:{n:'MOTO COFFEE',a:'〒541-0041 大阪市中央区北浜2-1-1 北浜ライオンビル',c:[34.691397,135.505231],s:'https://www.instagram.com/motocoffee_osaka/'},
 nakanoshima:{n:'나카노시마 강변 산책',a:'大阪市北区中之島1丁目 일대',c:[34.692312,135.503165],s:'https://osaka-info.jp/spot/nakanoshima/'},
 hana:{n:'하나다코',a:'〒530-0017 大阪市北区角田町9-26 新梅田食道街1F',c:[34.70336,135.497764],s:'https://shinume.com/'},
 kita:{n:'기타하마 카페·강변 산책',a:'大阪市中央区北浜1丁目 일대',c:[34.691384,135.507812],s:'https://osaka-info.jp/'},
 kingN:{n:'킹그램 리커 니시텐마점',a:'〒530-0047 大阪市北区西天満3-6-35 西天満GTCビル',c:[34.696646,135.508181],s:src.kingram},
 lika:{n:'리커마운틴 우메다점',a:'〒530-0002 大阪市北区曽根崎新地1-10-1 エスパシオンYAMADA 1F',c:[34.698049,135.498052],s:src.likaman},
 yama:{n:'야마야 도지마플라자점',a:'〒530-0003 大阪市北区堂島1-5-30 堂島プラザビル1F',c:[34.696404,135.496276],s:'https://www.yamaya.jp/'},
 cabin:{n:'캐빈리커 오사카역앞 제2빌딩점',a:'〒530-0001 大阪市北区梅田1-2-2 大阪駅前第2ビルB2F',c:[34.698934,135.497954],s:src.cabin},
 hanshinBeer:{n:'한신 비어스탠드',a:'〒530-8224 大阪市北区梅田1-13-13 阪神梅田本店B1F',c:[34.701312,135.496846],s:'https://www.hanshin-dept.jp/hshonten/map/index.html'},
 hitori:{n:'히토리카루비1965 갓파요코초',a:'〒530-0012 大阪市北区芝田1-7-2 阪急かっぱ横丁',c:[34.7061,135.4971],s:src.hitori},
 akaU:{n:'아카가키야 우메다점',a:'大阪市北区梅田地下街2-5 ホワイティうめだ',c:[34.7030,135.4994],s:src.akagaki},
 iwai:{n:'이와이도리 요도야바시 본점',a:'〒541-0042 大阪市中央区今橋3-2-16',c:[34.690564,135.502848],s:src.iwai},
 mcd:{n:'맥도날드 요도야바시점',a:'〒541-0041 大阪市中央区北浜4-1-1 淀屋橋ゲートタワーB1F',c:[34.692480,135.500620],s:'https://crewrecruiting.mcdonalds.co.jp/map/27836'},
 sukiya:{n:'스키야 기타하마점',a:'〒541-0046 大阪市中央区平野町1-8-11',c:[34.687739,135.506752],s:'https://maps.sukiya.jp/jp/detail/1965.html'},
 hsuita:{n:'한큐 스이타역',a:'〒564-0041 吹田市泉町1-3-40',c:[34.759777,135.517284],s:'https://www.hankyu.co.jp/station/suita.html'},
 asahi:{n:'아사히 맥주 뮤지엄 오사카·스이타',a:'〒564-0071 吹田市西の庄町1-45',c:[34.762745,135.52163],s:src.asahi},
 maren:{n:'MAREN 나카자키초',a:'〒530-0015 大阪市北区中崎西1-4-22',c:[34.706664,135.503947],s:src.maren},
 naka:{n:'나카자키초 산책 중심점',a:'大阪市北区中崎西1丁目 일대',c:[34.706900,135.505480],s:'https://osaka-info.jp/spot/nakazakicho/'},
 yatt:{n:'YATT Nakazakicho',a:'〒530-0015 大阪市北区中崎西1-10-11',c:[34.707708,135.503775],s:'https://www.instagram.com/yatt_nakazaki/'},
 black:{n:'삿포로 생맥주 흑라벨 THE BAR OSAKA',a:'1-1-1 Ofukacho, Kita Ward, Osaka 530-0011 · LINKS UMEDA 1F',c:[34.704704,135.4965441],s:src.black},
 matsu:{n:'쿠시카츠 마츠바 총본점',a:'〒530-0017 大阪市北区角田町9-20 新梅田食道街1F',c:[34.703575,135.497887],s:src.matsuba},
 hanamaru:{n:'하나마루테이 요도야바시점',a:'〒541-0041 大阪市中央区北浜3-2-14',c:[34.691523,135.502753],s:src.hanamaru},
 sumi:{n:'야키토리와 지자케 스미잇카',a:'〒541-0046 大阪市中央区平野町1-8-14',c:[34.687860,135.506520],s:src.sumi},
 toriki:{n:'토리키조쿠 기타하마점',a:'〒541-0044 大阪市中央区伏見町2-1-1 三井住友銀行高麗橋ビルB1F',c:[34.688907,135.506554],s:'https://map.torikizoku.co.jp/detail/185/'},
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
 {d:1,title:'11/12(목) · 기타하마 · 나카노시마 · 우메다 · 요도야바시',beer:'흑라벨 → 마루에후 → 프리몰 → 산토리 생 → 기린 → 일본 한정 캔맥',stops:[['09:30','kix','난카이 공항급행',''],['10:10','tengachaya','사카이스지선 환승',''],['10:35','kitahamaSt','',''],['10:40','apa','짐 맡기기',''],['11:00','saru','콘비런치 / 없으면 톤테키 정식','삿포로 흑라벨'],['12:05','moto','커피',''],['12:45','manpuku','메론빵',''],['13:05','nakanoshima','메론빵 먹으며 산책',''],['13:55','kingN','위스키 구경',''],['14:45','lika','주류 쇼핑',''],['15:30','cabin','위스키·구형병',''],['16:10','hanshinBeer','안주 없음','아사히 마루에후 1잔'],['17:05','hitori','탄카루비 + 하라미 + 텟짱','프리미엄 몰츠 1잔'],['18:00','matsu','치즈 쿠시카츠 2 + 돼지안심 1','산토리 생맥 1잔'],['19:00','iwai','세계의 츠쿠네 2 + 네기마 1 + 카다이후마키 토리 1','기린 생맥 1잔'],['21:50','mcd','치킨필레오 포장',''],['22:00','apa','치킨필레오 + 컵라면','일본 한정 캔맥 1개']],legs:['난카이 공항급행 약 40분','사카이스지선 약 15~20분','도보 2~3분','도보 12~15분','도보 12~15분','도보 10~15분','도보 8~10분','도보 15~20분','도보 15~20분','도보 10~15분','도보 8~10분','도보·지하상가 15~20분','도보 10~15분','미도스지선+도보 15~20분','자유시간 후 도보','도보 약 10분']},
 {d:2,title:'11/13(금) · 스이타 · 나카자키초 · 우메다 · 요도야바시',beer:'아사히 시음 → 흑라벨 → 기린 → 슈퍼드라이 → 프리몰 → 일본 한정 캔맥',stops:[['07:30','sukiya','네기타마 규동 보통(並盛)',''],['08:20','kitahamaSt','',''],['09:15','hsuita','박물관 이동·입장 대기',''],['09:50','asahi','견학','아사히 시음'],['11:20','hsuita','',''],['12:00','maren','차슈 쇼유 마제소바',''],['12:50','naka','골목 산책',''],['13:20','yatt','커피 + 휴식',''],['14:40','black','음식 없음','흑라벨 SECOND 1잔'],['15:25','akaU','도테야키 + 츠쿠네 1개','기린 이치방시보리 1잔'],['16:25','hanamaru','17시까지 요도야바시 산책·소화',''],['17:00','hanamaru','스태미나 야키소바','아사히 슈퍼드라이 1잔'],['18:15','toriki','모모 귀족구이 타레 2꼬치 + 츠쿠네 타레 2꼬치','프리미엄 몰츠 1잔'],['19:00','apa','컵라면','일본 한정 캔맥 1개']],legs:['호텔 준비 후 출발','사카이스지선·한큐 약 50~55분','도보·입장 대기 약 30분','도보 약 10분','한큐+도보 약 35~40분','도보·산책','도보 약 5~10분','도보 15~20분','도보 10~15분','미도스지선+도보 약 20분','산책 후 입장','도보 8~10분','도보 3~5분']},
 {d:3,title:'11/14(토) · 기타하마 · 난바 · 닛폰바시 · KIX',beer:'흑라벨 → 기린 이치방시보리',stops:[['07:00','apa','체크아웃',''],['07:03','kitahamaSt','',''],['07:20','metro','캐리어 보관',''],['07:35','kin','기본 라멘',''],['08:05','hozen','도톤보리·호젠지 산책',''],['08:45','melon','메론빵',''],['10:30','kingB','위스키 쇼핑',''],['11:00','kona','코나타로야키','삿포로 흑라벨 1잔'],['12:05','ultra','위스키 쇼핑',''],['12:45','akaN','난바스테이크','기린 이치방시보리 1잔'],['13:10','metro','짐 회수',''],['13:30','nankai','KIX행',''],['14:15경','kix','','']],legs:['도보 2~3분','사카이스지선+환승 약 20분','도보 8~10분','도보 4~6분','도보 2~4분','난바·닛폰바시 산책','도보 4~6분','도보 10~15분','도보 12~15분','도보·짐 회수 15~20분','도보 7~10분','난카이 공항급행 약 43분']}
];
function mapsUrl(p){return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.a)}`}
const dayCards=document.getElementById('dayCards');days.forEach(day=>{const el=document.createElement('article');el.className=`day-block day-${day.d}`;el.dataset.day=day.d;el.innerHTML=`<div class="day-title"><span class="day-kicker">0${day.d}</span><h3>DAY ${day.d}</h3><p>${day.title}</p><div class="beer-flow"><span>BEER FLOW</span><b>${day.beer}</b></div></div><div class="route-list">${day.stops.map(([t,k,food,beer],i)=>{const p=P[k];return `<div class="stop"><div class="stop-time">${t}</div><div class="stop-dot">${i+1}</div><div class="stop-body"><div class="stop-top"><h4>${p.n}</h4><a href="${mapsUrl(p)}" target="_blank" aria-label="${p.n} 지도 열기">↗</a></div><p class="address">${p.a}</p>${food||beer?`<div class="order-chips">${food?`<span class="food-chip"><i>FOOD</i>${food}</span>`:''}${beer?`<span class="beer-chip"><i>BEER</i>${beer}</span>`:''}</div>`:''}</div></div>${i<day.legs.length?`<div class="leg"><span>MOVE</span>${day.legs[i]}</div>`:''}`}).join('')}</div>`;dayCards.appendChild(el)});
document.querySelectorAll('.day-nav button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.day-nav button').forEach(x=>x.classList.toggle('active',x===b));const d=b.dataset.day;document.querySelectorAll('.day-block').forEach(x=>x.style.display=d==='all'||x.dataset.day===d?'grid':'none')});
const useDays={};days.forEach(d=>d.stops.forEach(([,k])=>useDays[k]=(useDays[k]||new Set()).add(d.d)));
const rows=document.getElementById('placeRows');function renderRows(q=''){rows.innerHTML='';Object.entries(P).filter(([k,p])=>(p.n+p.a).toLowerCase().includes(q.toLowerCase())).forEach(([k,p])=>{const tr=document.createElement('tr');tr.innerHTML=`<td>${[...(useDays[k]||[])].map(x=>'D'+x).join(' · ')}</td><td><b>${p.n}</b></td><td>${p.a}</td><td>${p.c[0].toFixed(6)}, ${p.c[1].toFixed(6)}</td><td><a href="${p.s}" target="_blank">출처 ↗</a></td>`;rows.appendChild(tr)})}renderRows();document.getElementById('searchInput').oninput=e=>renderRows(e.target.value);
document.getElementById('downloadCsv').onclick=()=>{const body=['day,name,address,latitude,longitude,source',...Object.entries(P).map(([k,p])=>`"${[...(useDays[k]||[])].join('/')}" ,"${p.n}","${p.a}",${p.c[0]},${p.c[1]},"${p.s}"`) ].join('\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+body],{type:'text/csv'}));a.download='osaka_verified_places.csv';a.click()};
