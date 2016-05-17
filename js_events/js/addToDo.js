function addItem() {
    'use strict';
    var btnAdd = document.getElementById('btnAdd');
    var btnYes = document.getElementById('btnYes');
    var btnNo = document.getElementById('btnNo');
    var popup = document.getElementById('popup');
    var textInput = document.getElementById('textInpt');
    var list = document.getElementById('list');
    var quest = document.getElementById('quest');
    var popupNothing = document.getElementById('nothing');
    var btnClose = document.getElementById('btnClose');

    function countItems(listID) {
        var i = 0, itemsCount = 0;
        while(listID.getElementsByTagName('li') [i += 1]) {
            itemsCount += 1;
        }
        return itemsCount;
    }

    function addBtnEvent() {
        if (textInput.value === '' || textInput.value === ' '){
            popupNothing.style.display = 'block';
        } else {
            popup.style.display = 'block';
            var questText = 'Are you sure you want to add new ToDo item: '+ textInput.value +' ?';
            var questParagraph = document.createElement('p');
            questParagraph.innerHTML = questText;
            quest.appendChild(questParagraph);
        }
    }
    function closeNotification() {
        popupNothing.style.display = 'none';
        popup.style.display = 'none';
        textInput.value = '';
        quest.removeChild(quest.childNodes[0]);
    }

    function addApprove() {
        var count = countItems(list) + 2;
        var li = document.createElement('li');
        var inputChkbx = document.createElement('input');
        inputChkbx.type = 'checkbox';
        inputChkbx.id = 'check' + count;
        inputChkbx.value = count;
        inputChkbx.className = 'chkBox';
        inputChkbx.setAttribute('onchange', 'removeItems(this.id)');
        var label = document.createElement('label');
        label.htmlFor = 'check' + count;
        label.appendChild(document.createTextNode(' ' + textInput.value));
        li.appendChild(inputChkbx);
        li.appendChild(label);
        list.appendChild(li);
        closeNotification();
    }

    btnAdd.addEventListener('click', addBtnEvent);
    btnClose.addEventListener('click', closeNotification);
    btnYes.addEventListener('click', addApprove);
    btnNo.addEventListener('click', closeNotification);

}

function removeItems(checkbox) {
    var btnDelete = document.getElementById('btnDelete');
    checkbox = document.getElementById(checkbox);
    if (checkbox.checked) {
        btnDelete.style.display = 'block';

    } else {
        console.log('not checked');
        btnDelete.style.display = 'none';
    }

    btnDelete.addEventListener('click', function() {
        checkbox.parentNode.parentNode.removeChild(checkbox.parentNode);
        btnDelete.style.display = 'none';
    });
}

window.onload = function () {
    'use strict';
    addItem();
};
