try {
    if (!document.EclassUtils.repository_url) throw '';
}
catch (err) {
    document.EclassUtils = class {
        static load() {
            let base_url = document.EclassUtils.repository_url;
            document.EclassUtils.downloadScript(base_url + 'app-release.js')
                .then(eval)
                .then(() => {
                    alert('이클래스 유틸리티 기능이 활성화 되었습니다.');
                    document.EclassUtils.isActive = true;
                });
        }

        static load_vulnerable() {
            // 사용금지
            let base_url = document.EclassUtils.repository_url;
            document.EclassUtils.downloadScript(base_url + 'app-dev.js')
                .then(eval)
                .then(() => {
                    alert('[주의] 이클래스 유틸리티 개발자 모드 ON.');
                    document.EclassUtils.isActive = true;
                });
        }

        static unload() {
            if (confirm('종료하시겠습니까?\n(확인을 누르시면 창이 새로고침 됩니다.)')) {
                document.EclassUtils.isActive = false;
                location.reload();
            }
        }

        static downloadScript(url) {
            let xhr = new XMLHttpRequest();
            return new Promise((resolve, reject) => {        
                xhr.open('GET', url);
                xhr.onreadystatechange = () => {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        resolve(xhr.responseText);
                    }
                };
                xhr.send();
            });
        }
    };
    document.EclassUtils.repository_url = 'https://raw.githubusercontent.com/Hepheir/web_functions/dgu-eclass/dgu-eclass/';
}
finally {
    if (document.EclassUtils.isActive) {
        document.EclassUtils.unload();
    }
    else {
        if (document.hasOwnProperty('hack'))
            document.EclassUtils.load_vulnerable();
        else
            document.EclassUtils.load();
    }
}