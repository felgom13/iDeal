import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <nav>
    <ul>
      <li>
        <Link to="add-reward">Add Reward</Link>
      </li>

      <li>
        <Link to="claim-reward">Claim Reward</Link>
      </li>

      <li>
        <Link to="customization">Customization</Link>
      </li>

      <li>
        <Link to="history">History</Link>
      </li>

      <li>
        <Link to="report">Report</Link>
      </li>

      <li>
        <Link to="strategy">Strategy</Link>
      </li>
    </ul>
  </nav>
)
