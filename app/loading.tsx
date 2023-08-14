import React, { useState, useEffect } from 'react'

const Loading = () => {
  return (
    <>
      <div className='loading'>
        <div className='img-loading-wrap'>
          <img
            className='animate__animated animate__infinite animate__pulse'
            src='/assets/imgs/logo-tp.png'
          />
        </div>
      </div>
    </>
  )
}

export default Loading
