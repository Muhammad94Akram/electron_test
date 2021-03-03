const {ipcRenderer} = require('electron')



document.getElementById('button').addEventListener('click', ev => {
    ipcRenderer.send('test')
})


ipcRenderer.on('test_response', (event, args) => {
    console.log('from test_response channel')
})


document.getElementById('openDialog').addEventListener('click',() => {

    ipcRenderer.send('show-dialog')
})