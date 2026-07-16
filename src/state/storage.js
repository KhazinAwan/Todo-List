const STORAGE_KEY = "todoListData";

function saveState(appState) {

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(appState)

    );

}

function loadState() {

    const data = localStorage.getItem(STORAGE_KEY);

    if (data === null) {

        return null;

    }

    return JSON.parse(data);

}

export {

    saveState,

    loadState

};