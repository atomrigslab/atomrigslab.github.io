// JSON 파일을 불러올 URL
const team_game_platform_info = './js/game_platform_sector/team_game_platform_info.json';

// 데이터를 가져와서 HTML에 삽입하는 함수
function displayData_game_platform(team_game_platform_info) {
  const container = document.getElementById('team_game_platform');
  let html = '';
  let card = document.createElement("li");
  for (let item of team_game_platform_info) {
    html += `<li id="members_${item.url}">`;
    html += `   <div class="team_img"><img src="./img/team/${item.url}.png" alt=""></div>`;
    html += `   <div class="members_name"><h6 class="eName">${item.eName}</h6><span>&nbsp|&nbsp</span></span><h6 class="kName">${item.kName}</h6></div>`;
    html += `   <p class="team_position">${item.team_position}</p>`;
    html += `   <ul class="team_sns">`;
    html += `       <ol class="linkedin"><a href="${item.linkedin}" target="_blank"></a></ol>`;
    html += `       <ol class="email"><a href="mailto:${item.email}" target="_blank"></a></ol>`;
    html += `       <ol class="facebook"><a href="${item.facebook}" target="_blank"></a></ol>`;
    html += `       <ol class="twitter"><a href="${item.twitter}" target="_blank"></a></ol>`;
    html += `       <ol class="telegram"><a href="${item.telegram}" target="_blank"></a></ol>`;
    html += `   </ul>`;
    html += `</li>`;
  }
  container.innerHTML = html;
}

// JSON 파일을 가져오는 fetch 함수 호출
fetch(team_game_platform_info)
  .then(response => response.json())
  .then(team_game_platform_info => displayData_game_platform(team_game_platform_info))
  .catch(error => console.error(error));
