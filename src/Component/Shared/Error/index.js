import React from 'react'

import Default from 'Asset/Error/Default.svg'

import css from 'Component/Shared/Error/Error.module.css'

export default React.memo(({ message = 'Oops!', picture = Default }) => (
  <div className={css.wrapper}>
    <img alt="" className={css.picture} src={picture} />
    <h2 className={css.message}>{message}</h2>
  </div>
))
