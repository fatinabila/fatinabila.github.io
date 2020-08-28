import React from 'react';

const FooterComponent = () => {

let today = new Date()
let currYear = today.getFullYear()

return (



<div class="footer">
  <p > Copyright© {currYear}</p>
</div>
        
)

}

export default FooterComponent ;