// Create instances of your classes
// Create the loadData and renderData functions - these should use the relevant instance

const renderer = new Renderer()
const apimanager = new APIManager()

const loadData = function (){
    apimanager.loadData()
}

const renderData = function (){
    renderer.render(apimanager.data)
}