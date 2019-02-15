import React from 'react'

import css from 'Component/Base/Button/Button.module.css'

export default React.memo(p => <button className={css.button} {...p} />)
