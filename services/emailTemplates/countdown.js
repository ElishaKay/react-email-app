const keys = require('../../config/keys');

module.exports = email => {
  return `
   <body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" yahoo="fix" style="font-family: Georgia, Times, serif">

  <!-- Wrapper -->
  <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">


    <!-- Start Header-->
    <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="border-complete deviceWidth" bgcolor="#e9e9e9">
      <tr>
        <td width="100%">
          <!-- Logo -->
          <table border="0" cellpadding="0" cellspacing="0" align="center" class="deviceWidth">
            <tr>
              <td id="logo" align="center">
                <a href="#"><img src="http://1stwebdesigner.com/demos/responsive-email-template/img/logo.png" alt="" border="0" /></a>
              </td>
            </tr>
          </table>
          <!-- End Logo -->
        </td>
      </tr>
    </table>

    <!-- End Header -->


    <!-- Image Banner -->
    <table width="600" class="border-lr deviceWidth" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#eeeeed">
      <tr>
        <td>
          <a href="#"><img class="deviceWidth" src="http://lorempixel.com/600/253/" alt="" border="0" /></a>
        </td>
      </tr>

    </table>
    <!-- End Image Banner -->


    <!-- Banner Text -->
    <table width="600" height="108" border="0" cellpadding="0" cellspacing="0" align="center" class="border-lr deviceWidth" bgcolor="#3baaff">
      <tr>
        <td align="center">
          <p id="banner-txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <a href="#" class="white-btn" align="center"> LEARN MORE</a>
        </td>
      </tr>


    </table>
    <!-- End of Banner Text -->


    <!-- Our Products -->
    <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="border-lr deviceWidth" bgcolor="#fff">
      <tr>
        <td align="center">
          <h2 id="our-products">Our Products </h2> </td>
      </tr>
      <tr>
        <td class="center">

          <table width="48%" border="0" cellpadding="0" cellspacing="0" align="left" class="deviceWidth">

            <tr>
              <td align="center">
                <h3 class="our-products">Product No. 1 </h3>
                <a href="#"><img width="262" src="http://1stwebdesigner.com/demos/responsive-email-template/img/image1.jpg" alt="" border="0" class="deviceWidth" /></a>
                </p>
                <p class="our-products"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </td>
            </tr>

          </table>

          <table width="48%" border="0" cellpadding="0" cellspacing="0" align="right" class="deviceWidth">
            <tr>
              <td align="center">
                <h3 class="our-products">Product No. 2 </h3>
                <a href="#"><img width="262" src="http://1stwebdesigner.com/demos/responsive-email-template/img/image1.jpg" alt="" border="0" class="deviceWidth" /></a>
                </p>
                <p class="our-products"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
    <!-- End of Our Products -->


    <!-- Special Offer -->
    <table width="600" height="151" cellpadding="0" cellspacing="0" align="center" class="border-lr deviceWidth" bgcolor="#3baaff">

      <tr>
        <td align="center">
          <h2 class="special">Special Offer </h2>
          <p class="special">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </td>
      </tr>
    </table>
    <!-- End of Special Offer -->


    <!--Coupons -->
    <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="border-lr deviceWidth" bgcolor="#fff">

      <tr>
        <td style="text-align: center;">
          <h2 id="coupons"> Check our site for coupons </h2>
          <p id="coupons">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <a href="#" class="blue-btn" align="center"> LEARN MORE</a>
        </td>
      </tr>
    </table>
    <!-- End of Coupons-->


    <!-- Footer -->
    <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="border-complete deviceWidth" bgcolor="#eeeeed">
      <tr>
        <td align="center" valign="top" id="socials">
          <table id="social-icons" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td>
                <a href="#"><img src="http://1stwebdesigner.com/demos/responsive-email-template/img/fb.png" width="32" height="32" style="display:block;" /></a>
              </td>
              <td>
                <a href="#"><img src="http://1stwebdesigner.com/demos/responsive-email-template/img/twitter.png" width="32" height="32" style="display:block;" /></a>
              </td>
              <td>
                <a href="#"><img src="http://1stwebdesigner.com/demos/responsive-email-template/img/pinterest.png" width="32" height="32" style="display:block;" /></a>
              </td>
              <td>
                <a href="#"><img src="http://1stwebdesigner.com/demos/responsive-email-template/img/google.png" width="32" height="32" style="display:block;" /></a>
              </td>

            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="text-align: center;">
          <p id="footer-txt"> <b>© Copyright 2013 - Email Template - All Rights Reserved</b>
            <br/> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </td>
      </tr>
    </table>
    <!-- End of Footer-->
  </table>
  <!-- End Wrapper -->
</body>

<style>

	body {
	  width: 100%;
	  background-color: #ffffff;
	  margin: 0;
	  padding: 0;
	  -webkit-font-smoothing: antialiased;
	  font-family: Georgia, Times, serif
	}
	
	table {
	  border-collapse: collapse;
	}
	
	td#logo {
	  margin: 0 auto;
	  padding: 14px 0;
	}
	
	img {
	  border: none;
	  display: block;
	}
	
	a.blue-btn {
	  display: inline-block;
	  margin-bottom: 34px;
	  border: 3px solid #3baaff;
	  padding: 11px 38px;
	  font-size: 12px;
	  font-family: arial;
	  font-weight: bold;
	  color: #3baaff;
	  text-decoration: none;
	  text-align: center;
	}
	
	a.blue-btn:hover {
	  background-color: #3baaff;
	  color: #fff;
	}
	
	a.white-btn {
	  display: inline-block;
	  margin-bottom: 30px;
	  border: 3px solid #fff;
	  background: transparent;
	  padding: 11px 38px;
	  font-size: 12px;
	  font-family: arial;
	  font-weight: bold;
	  color: #fff;
	  text-decoration: none;
	  text-align: center;
	}
	
	a.white-btn:hover {
	  background-color: #fff;
	  color: #3baaff;
	}
	
	.border-complete {
	  border-top: 1px solid #dadada;
	  border-left: 1px solid #dadada;
	  border-right: 1px solid #dadada;
	}
	
	.border-lr {
	  border-left: 1px solid #dadada;
	  border-right: 1px solid #dadada;
	}
	
	#banner-txt {
	  color: #fff;
	  padding: 15px 32px 0px 32px;
	  font-family: arial;
	  font-size: 13px;
	  text-align: center;
	}
	
	h2#our-products {
	  font-family: 'Pacifico';
	  margin: 23px auto 5px auto;
	  font-size: 27px;
	  color: #3baaff;
	}
	
	h3.our-products {
	  font-family: arial;
	  font-size: 15px;
	  color: #7c7b7b;
	}
	
	p.our-products {
	  text-align: center;
	  font-family: arial;
	  color: #7c7b7b;
	  font-size: 12px;
	  padding: 10px 10px 24px 10px;
	}
	
	h2.special {
	  margin: 0;
	  color: #fff;
	  color: #fff;
	  font-family: 'Pacifico';
	  padding: 15px 32px 0px 32px;
	}
	
	p.special {
	  color: #fff;
	  font-size: 12px;
	  color: #fff;
	  text-align: center;
	  font-family: arial;
	  padding: 0px 32px 10px 32px;
	}
	
	h2#coupons {
	  color: #3baaff;
	  text-align: center;
	  font-family: 'Pacifico';
	  margin-top: 30px;
	}
	
	p#coupons {
	  color: #7c7b7b;
	  text-align: center;
	  font-size: 12px;
	  text-align: center;
	  font-family: arial;
	  padding: 0 32px;
	}
	
	#socials {
	  padding-top: 12px;
	}
	
	p#footer-txt {
	  text-align: center;
	  color: #303032;
	  font-family: arial;
	  font-size: 12px;
	  padding: 0 32px;
	}
	
	#social-icons {
	  width: 28%;
	}
	
	@media only screen and (max-width: 640px) {
	  body[yahoo] .deviceWidth {
	    width: 440px!important;
	    padding: 0;
	  }
	  body[yahoo] .center {
	    text-align: center!important;
	  }
	  #social-icons {
	    width: 40%;
	  }
	}
	
	@media only screen and (max-width: 479px) {
	  body[yahoo] .deviceWidth {
	    width: 280px!important;
	    padding: 0;
	  }
	  body[yahoo] .center {
	    text-align: center!important;
	  }
	  #social-icons {
	    width: 60%;
	  }
	}

</style>
  `;
};

