import React from 'react'
import ReactPlayer from 'react-player'

function Course() {
    return (<>

<div className='container my-3'>
    <div className='Hero'>
    <ReactPlayer controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc'  width='960px' height='540px' />
    </div>

</div>

    </>
       
    )
}

export default Course
