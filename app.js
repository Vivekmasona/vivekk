/*****pahilagana*******
Author: vivek-verma
Version: 1.0
URI: https://pahilagana.xyz/
*/
/*Few Stupid Inits*/
var vivekf1,vivekv1;
var ytoldV=(new URLSearchParams(window.location.search)).get('v');
function vivekGetURL(o){
var sig=(new URLSearchParams(o)).get('s');
var url=(new URLSearchParams(o)).get('url');
sig=eval(vivekv1+vivekf1+"('"+decodeURIComponent(sig)+"');");
url=decodeURIComponent(url);
return  url+"&sig="+sig;
}

/*Utils for Deciphers*/
var utils={
between:(haystack, left, right) => {
let pos;
if (left instanceof RegExp) {
const match = haystack.match(left);
if (!match) { return ''; }
pos = match.index + match[0].length;
} else {
pos = haystack.indexOf(left);
if (pos === -1) { return ''; }
pos += left.length;
}
haystack = haystack.slice(pos);
pos = haystack.indexOf(right);
if (pos === -1) { return ''; }
haystack = haystack.slice(0, pos);
return haystack;
},
cutAfterJSON :( mixedJson )=> {
let open, close;
if (mixedJson[0] === '[') {
open = '[';
close = ']';
} else if (mixedJson[0] === '{') {
open = '{';
close = '}';
}
if (!open) {
throw new Error(`Can't cut unsupported JSON (need to begin with [ or { ) but got: ${mixedJson[0]}`);
}
let isString = false;
let isEscaped = false;
let counter = 0;
let i;
for (i = 0; i < mixedJson.length; i++) {
if (mixedJson[i] === '"' && !isEscaped) {
isString = !isString;
continue;
}
isEscaped = mixedJson[i] === '\\' && !isEscaped;
if (isString) continue;
if (mixedJson[i] === open) {
counter++;
} else if (mixedJson[i] === close) {
counter--;
}
if (counter === 0) {
return mixedJson.substr(0, i + 1);
}
}
throw Error("Can't cut unsupported JSON (no matching closing bracket found)");
}
}
/*Decipher Code , Credits:NODE-YTDL-CORE*/
var extractFunctions = (body)=> {
const functions = [];
const extractManipulations = caller => {
const functionName = utils.between(caller, `a=a.split("");`, `.`);
if (!functionName) return '';
const functionStart = `var ${functionName}={`;
const ndx = body.indexOf(functionStart);
if (ndx < 0) return '';
const subBody = body.slice(ndx + functionStart.length - 1);
return `var ${functionName}=${utils.cutAfterJSON(subBody)}`;
};
const extractDecipher = () => {
const functionName = utils.between(body, `a.set("alr","yes");c&&(c=`, `(decodeURIC`);
if (functionName && functionName.length) {
const functionStart = `${functionName}=function(a)`;
const ndx = body.indexOf(functionStart);
if (ndx >= 0) {
const subBody = body.slice(ndx + functionStart.length);
let functionBody = `var ${functionStart}${utils.cutAfterJSON(subBody)}`;
functionBody = `${extractManipulations(functionBody)};${functionBody};`;
vivekf1=functionName;
vivekv1=functionBody;
}
}
};
extractDecipher();
};
var scripts = document.getElementsByTagName('script');
for(var i=0;i<scripts.length;i++){
if(scripts[i].src.indexOf("/base.js") > 0){
var request = new XMLHttpRequest();
request.open("GET", scripts[i].src, false);
request.send(null);
extractFunctions(request.responseText);
}
}



function vivekDownVid(){
var vivekDown=document.createElement("div");
var vivekDownDiv=document.createElement("div");
vivekDownDiv.setAttribute("id","downvivekdiv");
vivekDown.style.height="100%";
vivekDown.style.width="100%";
vivekDown.style.position="fixed";
vivekDown.style.display="flex";
vivekDown.style.background="rgba(0,0,0,.7)";
vivekDown.style.top="0";
vivekDown.style.left="0";
vivekDown.style.justifyContent="center";
vivekDown.style.alignItems="center";
vivekDown.style.zIndex="99999999999999";
vivekDownDiv.style.height="auto";
vivekDownDiv.style.width="80%";
vivekDownDiv.style.maxHeight="40%";
vivekDownDiv.style.overflow="scroll";
vivekDownDiv.style.background="rgba(44, 203, 183, 1)";
vivekDownDiv.style.justifyContent="center";
vivekDownDiv.style.alignItems="center";
vivekDownDiv.style.zIndex="99999999999999";
vivekDownDiv.style.padding="20px";
vivekDownDiv.style.borderRadius="5px";
vivekDownDiv.style.color="white";
vivekDownDiv.style.textAlign="center";
vivekDownDiv.innerHTML="<style>#downvivekdiv a{text-decoration:none;color:white;} #downvivekdiv li{list-style:none;color:#0dd;padding:10px;background:#fff;border:1px solid silver;margin:5px;text-align:lft;}</style>";
vivekDownDiv.innerHTML+="<span style='position:absolute;top:15px;left:15px;color:#04C5B9;font-size:30px;' onclick='"+"this.parentElement.parentElement.style.display="+'"'+"none"+'"'+";'>&#x2715;</span>Visite ❤️PAHILAGANA❤️For More Downloads <ul id='listurl'>";
document.body.appendChild(vivekDown);
vivekDown.appendChild(vivekDownDiv);
if("ytplayer" in window){
for(x in ytplayer.config.args.raw_player_response.streamingData.formats){
if("signatureCipher" in ytplayer.config.args.raw_player_response.streamingData.formats[x]){
vivekDownDiv.innerHTML+="<li data-vivektit='"+ytplayer.config.args.title+"'  onclick='YTDownVid(this)'  data-vivekurl='"+vivekGetURL(ytplayer.config.args.raw_player_response.streamingData.formats[x].signatureCipher)+"'>"+  (ytplayer.config.args.raw_player_response.streamingData.formats[x].qualityLabel ) +"</li>" ;
}else{
vivekDownDiv.innerHTML+="<li data-vivektit='"+ytplayer.config.args.title+"'  onclick='YTDownVid(this)'  data-vivekurl='"+ytplayer.config.args.raw_player_response.streamingData.formats[x].url+"'>"+  (ytplayer.config.args.raw_player_response.streamingData.formats[x].qualityLabel ) +"</li>" ;
}}}else {
alert("AN ERROR OCCURED , PLEASE UPDATE GO-TO pahilagana WEBSITE");
}
}
function YTDownVid(o){
Android.downvid((o.getAttribute("data-vivektit")+".mp4"),o.getAttribute("data-vivekurl"),navigator.userAgent+"");
}
/*THE 0NE AND 0NLY FUNCTION*/
function pkc(){
if(window.location.href.indexOf("youtube.com/watch") > -1){
/*Dark and Light Mode*/
var c ="#000";
if(document.cookie.indexOf("f6=400") > -1){c ="#fff";}else{c="#000";}
/*Fetch The Dislikes*/
fetch("https://pahilagana.xyz?api="+(new URLSearchParams(window.location.search)).get('v'))
.then(response => {
return response.json();
}).then(jsonObject => {
if('dislikes' in jsonObject){
document.querySelectorAll('[aria-label="Dislike this video"]')[0].children[0].children[1].innerHTML=jsonObject.dislikes;
}
}).catch(error => {});
/*Check If Element Already Exists*/
if(document.getElementById("vivekMainDivE") == null){
function insertAfter(referenceNode, newNode) {try{referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);}catch{}}
var vivekMainDiv=document.createElement("div");
vivekMainDiv.style.height="50px";
vivekMainDiv.style.width="100%";
vivekMainDiv.style.display="flex";
vivekMainDiv.setAttribute("id","vivekMainDivE");
vivekMainDiv.style.alignItems="center";
vivekMainDiv.style.justifyContent="center";
vivekMainDiv.style.overflow="hidden";
insertAfter(document.getElementsByClassName('slim-video-action-bar-actions')[0],vivekMainDiv);
var vivekDownVidElem=document.createElement("div");
vivekDownVidElem.style.display="block";
vivekDownVidElem.style.height="90%";
vivekDownVidElem.style.width="auto";
vivekDownVidElem.style.textAlign="center";
vivekDownVidElem.style.marginRight="10px";
vivekDownVidElem.style.fontSize="12px";
vivekDownVidElem.innerHTML='	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#04C5B9" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>								<br><font color=#00cdb8><b>PG  DOWNLOAD';
vivekMainDiv.appendChild(vivekDownVidElem);
vivekDownVidElem.addEventListener("click",
function(){vivekDownVid();});
var vivekPIPVidElem=document.createElement("div");
vivekPIPVidElem.style.display="block";
vivekPIPVidElem.style.height="90%";
vivekPIPVidElem.style.width="auto";
vivekPIPVidElem.style.textAlign="center";
vivekPIPVidElem.style.fontSize="12px";
vivekPIPVidElem.style.marginLeft="10px";
vivekPIPVidElem.innerHTML='	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"   fill="#04C5B9" viewBox="0 0 24 24"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"/></svg>								<br><font color=#00cdb8><b>PG  POPUP ';
vivekMainDiv.appendChild(vivekPIPVidElem);
vivekPIPVidElem.addEventListener("click",
function(){
document.getElementsByClassName('video-stream')[0].play();
try{document.getElementById("vivekMainAudDivE").remove();}catch{console.log("");}
Android.pipvid("pip");
});
var vivekAudElem=document.createElement("div");
vivekAudElem.style.display="block";
vivekAudElem.style.height="90%";
vivekAudElem.style.width="auto";
vivekAudElem.style.textAlign="center";
vivekAudElem.style.fontSize="12px";
vivekAudElem.style.marginLeft="20px";
vivekAudElem.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#04C5B9" class="bi bi-music-note-list" viewBox="0 0 16 16"><path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"/><path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/><path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/><path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/></svg><br><font color=#00cdb8><b>PG  MUSIC '
vivekMainDiv.appendChild(vivekAudElem);
vivekAudElem.addEventListener("click",
function(){
vivekAudPlayer();
});
}
/*Watch The old and New URL*/
if(ytoldV != (new URLSearchParams(window.location.search)).get('v')){
try{document.getElementById("vivekMainAudDivE").remove();}catch{console.log("");}
ytoldV=(new URLSearchParams(window.location.search)).get('v');
window.location.href=window.location.href;
}
}
}



/*vivek Audio Player*/
function vivekAudPlayer(){
var vivekTitle="";
var vivekURL="";
if("ytplayer" in window){
for(x in ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats){
if(ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[x].itag == "140"){
if("signatureCipher" in ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[x]){
vivekTitle=ytplayer.config.args.title ;
vivekURL=vivekGetURL(ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[x].signatureCipher);
}else{
vivekTitle=ytplayer.config.args.title;
vivekURL=ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[x].url;
}}}
try{document.getElementById("vivekMainAudDivE").remove();}catch{console.log("");}
var vivekAudDivElem=document.createElement("div");
var vivekAudPlayerElem=document.createElement("audio");
var vivekAudX=document.createElement("div");
vivekAudDivElem.style.position="fixed";
vivekAudDivElem.style.bottom="0";
vivekAudDivElem.style.left="0";
vivekAudDivElem.style.zIndex="99999999999";
vivekAudDivElem.style.height="70px";
vivekAudDivElem.style.width="100%";
vivekAudDivElem.style.background="#04C5B9";
vivekAudDivElem.setAttribute("id","vivekMainAudDivE");
vivekAudX.style.position="absolute";
vivekAudX.style.left="0px";
vivekAudX.style.height="40px";
vivekAudX.style.width="40px";
vivekAudX.style.background="rgba(0,0,0,.7)";
vivekAudDivElem.style.borderTop="0px solid #04C5B9";
vivekAudX.style.borderTop="0px solid #04C5B9";
vivekAudX.style.borderRight="0px solid #04C5B9";
vivekAudX.style.position="absolute";
vivekAudX.style.top="-43.25px";
vivekAudX.style.color="#04C5B9";
vivekAudX.style.textAlign="center";
vivekAudX.innerHTML="&#x2715;";
vivekAudX.style.fontSize="20px";
vivekAudPlayerElem.style.position="absolute";
vivekAudPlayerElem.style.top="-20px";
vivekAudPlayerElem.style.left="0";
vivekAudPlayerElem.style.height="80px";
vivekAudPlayerElem.style.width="100%";
vivekAudDivElem.innerHTML+="<style>audio::-webkit-media-controls-panel{background:#04C5B9;}</style>";
vivekAudPlayerElem.setAttribute("id","vivekaudss");
vivekAudPlayerElem.controls=true;
vivekAudPlayerElem.src=vivekURL;
document.body.appendChild(vivekAudDivElem);
vivekAudDivElem.appendChild(vivekAudPlayerElem);
vivekAudDivElem.appendChild(vivekAudX);
document.getElementsByClassName('video-stream')[0].pause();
vivekAudX.addEventListener("click",function(){this.parentElement.remove();});
/*Listen To the Song*/
vivekAudPlayerElem.onloadeddata = function() {
vivekAudPlayerElem.play();
Android.showToast("Now Playing \n"+vivekTitle);
Android.gohome("ok");
};
/*Watch The Audio Player*/
vivekAudPlayerElem.addEventListener("timeupdate",function(){
if(vivekAudPlayerElem.currentTime==vivekAudPlayerElem.duration){
window.location.href="https://m.youtube.com"+document.getElementsByTagName("lazy-list")[1].children[1].children[0].children[0].getAttribute("href")+"&auds=ab";
}
});
}
else {
alert("AN ERROR OCCURED , PLEASE UPDATE YT PRO");
}
}
setInterval(pkc,1);


/*YT ADS BLOCKER , I know it's Copy Paste*/
window.onload = function(){ 
var outerLayer = document.getElementsByClassName('video-ads ytp-ad-module');
var adPlayerOverlay = document.getElementsByClassName('ytp-ad-player-overlay'); // popup ads in video
var adImageOverlay = document.getElementsByClassName('ytp-ad-image-overlay');
var button = document.getElementsByClassName('ytp-ad-skip-button ytp-button');
var firstAd = document.getElementsByClassName('ytp-ad-text');
document.getElementsByClassName('video-stream')[0].muted=false;
function skipFirstInner(callback) {
if (adPlayerOverlay[0] && adPlayerOverlay.length > 0) {
adPlayerOverlay[0].style.visibility = 'hidden';
}
else if (adImageOverlay[0] && adImageOverlay.length > 0) {
adImageOverlay[0].style.visibility = 'hidden';
}
callback();
}
function clickSkipBtn() {
if(button[0] && button.length > 0) {
button[0].click();
}
}
setInterval(function(){ 
if (outerLayer && outerLayer.length > 0) {
clickSkipBtn();
skipFirstInner(function() {
if((firstAd && firstAd[2] && firstAd[2].innerHTML.includes('Ad')) ||
(firstAd && firstAd[1] && firstAd[1].innerHTML.includes('Ad')) ||
(firstAd && firstAd[0] && firstAd[0].innerHTML.includes('Ad'))) {
clickSkipBtn();
let videos = document.querySelectorAll('video');
for(let i=0; i<videos.length; i++) {
if(videos[i] && videos[i].duration) {
videos[i].currentTime = videos[i].duration;
}
}
}
});
}
}, 1);
if((new URLSearchParams(window.location.search)).get('auds') == "ab"){
vivekAudPlayer();
}
};
