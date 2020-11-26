import {Component, createElement} from '../lib/react/index.js'
// import User from './user.js'
// import Wrapper from './wrapper.js'
// import UserStyled from './user-styled.js'

class App extends Component {
    render() {
        return createElement('div', {
            class: 'app',
            children: [
                createElement('h1', { class: 'title' }, 'Hola')
            ]
        }, 'Esta es la app')
    }
}
// ${new Wrapper({
//     children: `
//         ${new User({name: 'Ash', avatar: './images/ash.jpg'}).render()}
//         ${new UserStyled({name: 'Ash', avatar: './images/ash.jpg'}).render()}
//     `
// }).render()}

export default App