import React from 'react'

import style from 'Component/Base/Button/Button.module.css'

export default React.memo(p => <button className={style.button} {...p} />)
