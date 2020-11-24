import User from './components/user.js'
import { render } from './lib/react-dom.js'

render(new User({
    avatar: './images/ash.jpg',
    name: 'Ash'
}), document.getElementById('root'))