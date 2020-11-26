import { Component, createElement } from '../lib/react/index.js'

class Wrapper extends Component {
    render() {
        const { children } = this.props
        return createElement('div', {
            class: 'wrapper',
            children,
            onClick: function(){
                console.log('Hola click')
            }
        })
    }
}

export default Wrapper