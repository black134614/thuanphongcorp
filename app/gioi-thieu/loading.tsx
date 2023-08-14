import React from 'react'

export default function loading() {
  return (
    <div className='loading' role='status'>
      <div className='img-loading-wrap text-center'>
        <div className='spinner-grow text-warning '>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    </div>
  )
}
