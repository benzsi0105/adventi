const storageKey = 'adventCalendar';
    let openedDoors = JSON.parse(localStorage.getItem(storageKey)) || [];
    let usedContentOptions = [];

    function openDoor(day) {
        if (day <= getCurrentDay() && !openedDoors.includes(day)) {
            openedDoors.push(day);
            localStorage.setItem(storageKey, JSON.stringify(openedDoors));
            displayContent(day);
            updateCalendar();
        }
    }

    function displayContent(day) {
        const content = generateContent();
        alert(content);
    }

    function getCurrentDay() {
        const currentDate = new Date();
        return currentDate.getDate();
    }

    function generateContent() {
        const contentOptions = [
        "Kellemes karácsonyi ünnepeket!",
        "Békés és boldog karácsonyt kívánok!",
        "Szeretetben és meghittségben gazdag ünnepeket!",
        "Együtt töltött boldog karácsonyi napokat!",
        "Fényekkel díszített, vidám karácsonyt!",
        "Az ünnepi varázst és örömöt kívánom neked!",
        "Sok szeretetteljes pillanatot a családoddal!",
        "Áldott karácsonyi ünnepeket!",
        "Az ajándékok mellett a szeretet is örömet hozzon!",
        "Sok nevetést és boldogságot az ünnepekre!",
        "Kellemes karácsonyi készülődést és várakozást!",
        "Remek karácsonyi vacsorát és finom süteményeket!",
        "Az év legszebb ünnepét kívánom neked!",
        "Szeretetteljes és meghitt ünnepi környezetet!",
        "A karácsony igazi csoda legyen az életedben!",
        "Szeretetteljes karácsonyi köszöntéseket küldök!",
        "Békességet és szeretetet az ünnepi időszakban!",
        "Boldogságot és melegséget a karácsonyi napokra!",
        "Együtt töltött boldog pillanatokat a szeretteiddel!",
        "Az ünnepi hangulat varázslatos pillanatokat hozzon!",
        "Sok örömteli meglepetést és vidám pillanatot!",
        "Az ajándékok között találd meg a szeretet igazi értékét!",
        "Kívánom, hogy a karácsonyod csillagos legyen!",
        "Békességet és boldogságot az új esztendőre is!"


        ];
        const availableContentOptions = contentOptions.filter(option => !usedContentOptions.includes(option));

        
        if (availableContentOptions.length === 0) {
            usedContentOptions = [];
        }

        const randomIndex = Math.floor(Math.random() * availableContentOptions.length);
        const selectedContent = availableContentOptions[randomIndex];

        usedContentOptions.push(selectedContent);

        return selectedContent;
    }

    function updateCalendar() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell, index) => {
            if (openedDoors.includes(index + 1)) {
                cell.classList.add('opened');
                cell.onclick = null;
            }
        });
    }

    const currentDay = getCurrentDay();
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        if (index + 1 > currentDay) {
            cell.classList.add('cell-disabled');
            cell.onclick = null;
        }
    });

    updateCalendar();

    function resetCalendar() {
        openedDoors = [];
        localStorage.removeItem(storageKey);
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.classList.remove('opened');
            cell.classList.remove('cell-disabled');
            cell.onclick = () => openDoor(parseInt(cell.innerText));
        });
    }