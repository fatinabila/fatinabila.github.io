import React from 'react';

const FooterComponent = () => {

let today = new Date()
let currYear = today.getFullYear()

return (



<div className="footer">
  <p > Copyright© {currYear}</p>
</div>
        
)

}

export default FooterComponent ;