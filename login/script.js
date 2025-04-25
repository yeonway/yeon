document.addEventListener('DOMContentLoaded', function() {
    // 로그인 폼 처리
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var errorMessage = document.getElementById('error-message');

            // 설정한 아이디와 비밀번호 목록
            var validCredentials = [
                { username: 'dusdn', password: 'dusdn' },
                { username: 'hsh', password: '0305' },
                { username: 'Mizle882', password: '0150pqtp' },
                { username: 'dong', password: '123456' },
            ];

            // 입력된 아이디와 비밀번호가 목록에 있는지 확인
            var isValid = validCredentials.some(function(cred) {
                return cred.username === username && cred.password === password;
            });

            if (username === '' || password === '') {
                errorMessage.textContent = '모든 필드를 입력해야 합니다.';
            } else if (isValid) {
                localStorage.setItem('username', username);
                // 로그인 성공 시 dusdn.store로 이동
                window.location.href = 'http://dusdn.store';
            } else {
                errorMessage.textContent = '아이디나 비밀번호가 잘못되었습니다.';
            }
        });
    }

    // 홈 페이지 로드 시 로그인 상태 확인 및 업데이트
    function updateUserInfo() {
        const username = localStorage.getItem('username');
        const loginButton = document.getElementById('loginButton');
        const userInfo = document.getElementById('user-info');

        if (username) {
            loginButton.style.display = 'none';
            userInfo.style.display = 'block';
            userInfo.innerHTML = `
                ${username}
                <div class="dropdown">
                    <button type="button" id="profileButton">프로필</button>
                    <button type="button" id="settingsButton">설정</button>
                    <button type="button" id="logoutButton">로그아웃</button>
                </div>`;
        }
    }

    // 로그아웃 처리
    document.addEventListener('click', function(event) {
        if (event.target.id === 'logoutButton') {
            const confirmLogout = confirm('정말 로그아웃 하시겠습니까?');
            if (confirmLogout) {
                localStorage.removeItem('username');
                window.location.href = 'index.html';
            }
        } else if (event.target.id === 'profileButton') {
            window.location.href = 'profile.html';
        } else if (event.target.id === 'settingsButton') {
            window.location.href = 'setting.html';
        }
    });

    // 사용자 아이디 클릭 시 드롭다운 메뉴 표시/숨기기
    document.getElementById('user-info').addEventListener('click', function() {
        this.classList.toggle('show');
    });

    // 페이지 로드 시 사용자 정보를 업데이트
    updateUserInfo();

    // 자유 게시판 버튼 클릭 시 로그인 상태 확인
    document.getElementById('freeBoardButton').addEventListener('click', function() {
        const username = localStorage.getItem('username');
        if (username) {
            window.open('free.html');
        } else {
            alert('로그인 후에 접근할 수 있습니다.');
            location.href = 'login/login.html';
        }
    });
});
