import React from 'react';
import Main from './components/MainComponent';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee)

export default function App() {
    return (
        <Main />
    );
}
