import { observer } from 'mobx-react-lite'
import React from 'react'

const Received = () => {
    return (
        <div>
            <h1 style={{color:"red"}}>received</h1>
        </div>
    )
}

export default observer(Received)
