let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://raw.githubusercontent.com/Hepheir/web_functions/master/dgu-eclass-vulnerable/linker-compressed.js');
xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE)
        eval(xhr.responseText);
};
xhr.send();