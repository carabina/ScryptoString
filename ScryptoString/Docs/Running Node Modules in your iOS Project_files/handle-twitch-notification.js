(function(){let httpRequest
const HOST='https://twitch-notification.risingstack.com'
function updateViewers(){function getLiveViewers(){httpRequest=new XMLHttpRequest()
if(!httpRequest){console.log('failed httprequest')
return false}
httpRequest.onreadystatechange=updateLiveViewCount
httpRequest.open('GET',`${HOST}/update-viewers`)
httpRequest.send()}
getLiveViewers()
function updateLiveViewCount(){if(httpRequest.readyState===XMLHttpRequest.DONE){if(httpRequest.status===200){let div=document.getElementById('twitch-view-counter')
let getViewers=httpRequest.responseText
if(getViewers===''){console.log('Stream is offline, no views.')
div.style.display="none"}else{console.log('Getting viewers for stream...')
div.innerHTML=getViewers}}else{console.log('GETVIEWERS - Problem with XMLHTTPRequest')}}}}
function getNotification(){httpRequest=new XMLHttpRequest()
if(!httpRequest){console.log('failed httprequest')
return false}
httpRequest.onreadystatechange=alertContents
httpRequest.open('GET',`${HOST}/notify`)
httpRequest.send()}
getNotification()
function alertContents(){if(httpRequest.readyState===XMLHttpRequest.DONE){if(httpRequest.status===200){let div=document.getElementById('twitch-notification')
let content=httpRequest.responseText
if(content===''){console.log('Stream is NOT LIVE.')
div.style.display="none"}else{console.log('Stream is LIVE.')
div.innerHTML=content
updateViewers()}}else{console.log('ISTWITCHUP - Problem with XMLHTTPRequest')}}}})()