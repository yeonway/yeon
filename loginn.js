document.addEventListener('DOMContentLoaded', function() {
    // 로그인 폼 처리
    const handleLogin = (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');

        const validCredentials = [
            { username: 'dusdn', password: 'dusdn' },
            { username: 'hsh', password: '0305' },
            { username: 'dong', password: '123456' },
            { username: 'Mizle882', password: '0150pqtp' }
        ];

        const isValid = validCredentials.some(cred => cred.username === username && cred.password === password);

        if (!username || !password) {
            errorMessage.textContent = '모든 필드를 입력해야 합니다.';
        } else if (isValid) {
            localStorage.setItem('username', username);
            window.location.href = '../index.html';
        } else {
            errorMessage.textContent = '아이디나 비밀번호가 잘못되었습니다.';
        }
    };

    // 사용자 정보 업데이트
    const updateUserInfo = () => {
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
        } else {
            loginButton.style.display = 'block';
            userInfo.style.display = 'none';
        }
    };

    // 이벤트 리스너 등록
    const addEventListeners = () => {
        // 로그인 폼 이벤트
        const loginForm = document.getElementById('loginForm');
        if (loginForm) loginForm.addEventListener('submit', handleLogin);

        // 로그아웃 및 드롭다운 메뉴
        document.addEventListener('click', (event) => {
            switch (event.target.id) {
                case 'logoutButton':
                    if (confirm('정말 로그아웃 하시겠습니까?')) {
                        localStorage.removeItem('username');
                        window.location.href = 'index.html';
                    }
                    break;
                case 'profileButton':
                    window.location.href = 'profile.html';
                    break;
                case 'settingsButton':
                    window.location.href = 'setting.html';
                    break;
                default:
                    break;
            }
        });

        // 사용자 아이디 클릭 시 드롭다운 메뉴 표시/숨기기
        document.getElementById('user-info')?.addEventListener('click', function() {
            this.classList.toggle('show');
        });

        // 자유 게시판 버튼 클릭 시 로그인 상태 확인
        document.getElementById('freeBoardButton')?.addEventListener('click', function() {
            const username = localStorage.getItem('username');
            if (username) {
                window.open('free.html');
            } else {
                alert('로그인 후에 접근할 수 있습니다.');
                window.location.href = 'index.html';
            }
        });
    };

    // 페이지 로드 시 초기 설정
    updateUserInfo();
    addEventListeners();
});
