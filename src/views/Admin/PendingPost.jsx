import { useState } from 'react';
import HeaderDash from '../../components/HeaderDash'
import RecentPost from '../../components/RecentPost'

function PendingPost() {

  return (
    <HeaderDash>
      <div>
        <h5 className="title_pending">Postagens Pendentes</h5>

        <div className="widget widget-sigma-recent-posts style-3 pending_post">

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
            gap: '50px',
            flexWrap: 'wrap'
          }}>

            <RecentPost styled={'recent_post_margin'} modal={true} />
            <RecentPost styled={'recent_post_margin'} modal={true} />
            <RecentPost styled={'recent_post_margin'} modal={true} />
            <RecentPost styled={'recent_post_margin'} modal={true} />
            <RecentPost styled={'recent_post_margin'} modal={true} />
            <RecentPost styled={'recent_post_margin'} modal={true} />
            <RecentPost styled={'recent_post_margin'} modal={true} />
            <RecentPost styled={'recent_post_margin'} modal={true} />
            <RecentPost styled={'recent_post_margin'} modal={true} />

          </div>
        </div>
      </div>
    </HeaderDash>
  )
}

export default PendingPost