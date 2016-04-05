

/*
    This is a higher order function that wraps a component with functionality
    that save's it's state to local storage. This means the components state
    will persist across page refreshes under the same domain and rules of localStorage.

*/


/*
    Global if localStorage is available on the system
*/

let hasLocalStorage = localStorage

if (hasLocalStorage) {
    let testKey = 'react-localstorage.hoc.test-key';
    try {
        // Access to global `localStorage` property must be guarded as it
        // fails under iOS private session mode.
        localStorage.setItem( testKey, 'foo' )
        localStorage.removeItem(testKey)
    } catch (e) {
        hasLocalStorage = false;
    }
}


/*
    A HOC function that accepts a component and wraps it in another Component
    that saves it's state to local storage
*/

let WrapWithLocalStorate = Component => {

    // Return Component if no localStorage is available
    if( !hasLocalStorage ) return Component

    let name = component.displayName || component.constructor.displayName || component.constructor.name

    class LocalStorageComponent extends component {

        componentWillMount(){
            this.setState( JSON.parse( localStorage.getItem( name )))
        }

        componentWillUpdate( nextProps, nextState ){
            localStorage.setItem( name, JSON.stringify( nextState ))
        }

    }

    LocalStorageComponent.displayName = name

    return LocalStorageComponent

}


export default WrapWithLocalStorate
