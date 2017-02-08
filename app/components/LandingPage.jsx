import React, { Component } from 'react';
import ProductNavigation from './ProductNavigation';
import NavBar from './NavBar';

export default () => {

	return (
		<div>
		 <NavBar/>
  		<div id="container" style={{'backgroundImage': 'url(images/backgroundimage.jpg)', backgroundRepeat: 'repeat'}}>
  			<div className='heroimage'>
  				<img src="/images/BannerImage.jpg" style={{'display': 'block', 'margin': 'auto', 'height': '50vh', 'width':'auto'}}/>
  			</div>
  			<div className='productsnav'>
				<ProductNavigation />
			</div>
  		</div>
		</div>
 )
}