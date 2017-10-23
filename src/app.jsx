import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import MyRouter from './router/router'

myRender(MyRouter)

// hot reload
if(moudle.hot){
    module.hot.accept('./router/router', () => {
        const MyRouter = require('./router/router').default
        myRender(MyRouter)
    })
}

function myRender(MyRouter){
    render(
        <AppContainer>
            {MyRouter}
        </AppContainer>,
        document.getElementById('app')
    )
}
