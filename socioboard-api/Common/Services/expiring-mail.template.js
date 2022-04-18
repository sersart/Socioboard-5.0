export default function expiringEmailTemplate(days = 3, first_name = '') {
  let src =
    days == 1
      ? `https://social-media-board.com/wp-content/uploads/2021/08/expire-in-1-day.png`
      : days == 2
      ? `https://social-media-board.com/wp-content/uploads/2021/08/expire-in-2-days.png`
      : `https://social-media-board.com/wp-content/uploads/2021/08/expire-in-3-days.png`;
  return `<html xmlns="http://www.w3.org/1999/xhtml">

  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
      <title>Social Media Board</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet"> 
  </head>
  
  <body bgcolor="#f8f8f8">
  
      <!-- START OF HEADER BLOCK-->
      <table align="center" bgcolor="#fff" cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px;">
          <tbody>
              <tr>
                  <td valign="top" width="100%">
                      <table cellpadding="0" cellspacing="0" border="0">
                          <tbody>
                              <tr>
                                  <td width="100%">
                      
                                      <table bgcolor="#fff" class="table_scale" width="600" align="center"
                                          cellpadding="0" cellspacing="0" border="0">
                                          <tbody>
                                              <tr>
                                                  <td width="100%" height="30">&nbsp;</td>
                                              </tr>
                                          </tbody>
                                      </table>
  
                                      <table class="table_scale" width="600" bgcolor="#fff" cellpadding="0"
                                          cellspacing="0" border="0">
                                          <tbody>
                                              <tr>
                                                  <td width="100%">
                                                      <table width="600" cellpadding="0" cellspacing="0" border="0">
                                                          <tbody>
                                                              <tr>
                                                                  <td class="spacer" width="30"></td>
                                                                  <td width="540">
                               
                                                                      <table class="full" align="center" width="auto"
                                                                          cellpadding="0" cellspacing="0" border="0"
                                                                          style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td class="center" align="center"
                                                                                      style="padding: 0px; text-transform: uppercase; font-family: Lucida Sans Unicode; color:#666666; font-size:24px; line-height:34px;">
                                                                                      <span>
                                                                                          <a href="https://www.social-media-board.com/"
                                                                                              style="color:#0f48d5;" target="_blank">
                                                                                              <img src="http://social-media-board.com/wp-content/uploads/2022/04/social-media-board-logo.png"
                                                                                                  alt="Social Media Board"
                                                                                                  width="auto" height="80"
                                                                                                  border="0"
                                                                                                  style="display: inline;">
                                                                                          </a>
                                                                                      </span>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                              
                                                                  </td>
                                                                  <td class="spacer" width="30"></td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
      <table align="center" bgcolor="#fff" cellpadding="0" cellspacing="0" border="0">
          <tbody>
              <tr> 
                  <td valign="top" width="100%">
                      <table cellpadding="0" cellspacing="0" border="0">
                          <tbody>
                              <tr>
                                  <td width="100%">
                                      <table class="table_scale" width="600" bgcolor="#fff" cellpadding="0"
                                          cellspacing="0" border="0">
                                          <tbody>
                                              <tr>
                                                  <td width="100%">
                                                      <table width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#fff">
                                                          <tbody>
                                                              <tr>
                                                                  <td>
                                                                      <div style="height: 10px; line-height: 40px;"></div>
                                                                  </td>
                                                              </tr>
                                                              <tr>
                                                                  <td style="padding: 0px;" width="600" valign="middle">
                                                                      <a href="#">
                                                                      <img alt="Expire in ${days} days" src=${src} style="width: 100%; display:block;">
                                                                      </a>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
  
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
  
  <table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="background: #fff;">
      <tbody>
          <tr>
              <td valign="top" width="100%">
              <table border="0" cellpadding="0" cellspacing="0">
                  <tbody>
                      <tr>
                          <td width="100%">
                          <table bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" class="table_scale" width="600">
                              <tbody>
                                  <tr>
                                      <td width="100%">
                                      <table bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" width="600">
                                          <tbody>
                                              <tr>
                                                  <td style="padding: 0px; background: #fff;" valign="middle" width="600">
                                                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="full" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; " width="540">
                                                      <tbody>
                                                          <tr>
                                                              <td align="center">
                                                              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                  <tbody>
                                                                      <tr>
                                                                          <td>
                                                                          <div style="height: 30px; line-height: 40px;"></div>
                                                                          </td>
                                                                      </tr>
                                                                      <tr>
                                                                           <td class="left" style="background: #fff; margin: 0; margin:0; font-family: Open sans, Arial, Helvetica, sans-serif; font-size: 17px; color: #383737; line-height: 24px; mso-line-height-rule: exactly; text-align: left; padding: 0 5px 12px;" align="left">
                                                                               <b>Hi ${first_name},</b>
                                                                           </td>
                                                                      </tr>
                                                                      <tr>
                                                                           <td class="left" style="background: #fff; margin: 0; margin:0; font-family: Open sans, Arial, Helvetica, sans-serif; font-size: 17px; color: #383737; line-height: 24px; mso-line-height-rule: exactly; text-align: left; padding: 0 5px 12px;" align="left">
                                                                               <b>Unfortunately, your package will expire in ${days} days.</b>
                                                                           </td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td class="left" style="background: #fff; margin: 0; margin:0; font-family: Open sans, Arial, Helvetica, sans-serif; font-size: 17px; color: #383737; line-height: 24px;mso-line-height-rule: exactly; text-align: left; padding: 0 5px; padding-bottom:12px; " align="left">
                                                                              We would love to keep you as a customer. There is still time to renew your subscription. Visit your account dashboard to subscribe.
                                                                          </td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td class="left" style="background: #fff; margin: 0; margin:0; font-family: Open sans, Arial, Helvetica, sans-serif; font-size: 17px; color: #383737; line-height: 24px;mso-line-height-rule: exactly; text-align: left; padding: 0 5px; padding-bottom:12px; " align="left">
                                                                              Just a reminder, when your package expires, you will be automatically logged out from your account.
                                                                          </td>
                                                                      </tr>
                                                                  <tr>
                                                                      <td width="100%" height="20">&nbsp;</td>
                                                                  </tr>
                                                                  <tr>
                                                                      <td class="center" style="margin: 0; padding-bottom:0px; margin:0; font-family: Open sans, Arial, Helvetica, sans-serif; font-size: 16px; color: #e9e9e9; line-height: 25px;mso-line-height-rule: exactly; text-align: center;" align="center">
                                                                          <a target="_blank" href="https://app.social-media-board.com/plan-details-view" style="background: #f85c37; border: 0px; padding: 12px 20px; color: #fff; font-size: 18px; letter-spacing: 1px; margin-top: 14px; cursor: pointer; font-weight: 600; border-radius: 80px; text-decoration: none;">Upgrade Now</a>
                                                                      </td>
                                                                  </tr>
                                                                  <tr>
                                                                      <td width="100%" height="40">&nbsp;</td>
                                                                  </tr>
                                                                      <tr>
                                                                          <td class="left" style="background: #fff; margin: 0; margin:0; font-family: Open sans, Arial, Helvetica, sans-serif; font-size: 17px; color: #383737; line-height: 24px;mso-line-height-rule: exactly; text-align: left; padding: 0 5px; padding-bottom:12px; " align="left">
                                                                              If you face any issues, <a href="mailto:support@social-media-board.com" style="color: #f85c37; text-decoration: none;">drop an email</a>,  we're always happy to help you out.
                                                                          </td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td width="100%" height="20">&nbsp;</td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          </td>
                      </tr>
                  </tbody>
              </table>
              </td>
          </tr>
      </tbody>
  </table>
  
  <table align="center" bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" style="background: #fff;">
      <tbody>
          <tr>
              <td valign="top" width="100%">
              <table border="0" cellpadding="0" cellspacing="0">
                  <tbody>
                      <tr>
                          <td width="100%">
                          <table bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" class="table_scale" width="600">
                              <tbody>
                                  <tr>
                                      <td width="100%">
                                      <table bgcolor="#fff" border="0" cellpadding="0" cellspacing="0" width="600">
                                          <tbody>
                                              <tr>
                                                  <td style="padding: 0px; background: #fff;" valign="middle" width="600">
                                                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="full" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; " width="540">
                                                      <tbody>
                                                          <tr>
                                                              <td align="center">
                                                              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                  <tbody>
                                                                      <tr>
                                                                          <td width="100%" height="20">&nbsp;</td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td class="center" style="margin: 0; padding-bottom:12px; margin:0; font-family: Open sans, Arial, Helvetica, sans-serif; font-size: 17px; color: #383737; line-height: 25px;mso-line-height-rule: exactly;" align="center">
                                                                              <span>
                                                                                  Cheers,<br>
                                                                                  <b>Team Social Media Board</b> 
                                                                              </span>
                                                                          </td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td width="100%" height="40">&nbsp;</td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          </td>
                      </tr>
                  </tbody>
              </table>
              </td>
          </tr>
      </tbody>
  </table>
  
      <!---FOOTER BLOCK-->
      <table align="center" bgcolor="#26272b" cellpadding="0" cellspacing="0" border="0">
          <tbody>
              <tr>
                  <td valign="top" width="100%">
                      <table cellpadding="0" cellspacing="0" border="0">
                          <tbody>
                              <tr>
                                  <td width="100%">
                      
                                      <table bgcolor="#26272b" class="table_scale" width="600" align="center"
                                          cellpadding="0" cellspacing="0" border="0">
                                          <tbody>
                                              <tr>
                                                  <td width="100%" height="30">&nbsp;</td>
                                              </tr>
                                          </tbody>
                                      </table>
  
                                      <table class="table_scale" width="600" bgcolor="#26272b" cellpadding="0"
                                          cellspacing="0" border="0">
                                          <tbody>
                                              <tr>
                                                  <td width="100%">
                                                      <table width="600" cellpadding="0" cellspacing="0" border="0">
                                                          <tbody>
                                                              <tr>
                                                                  <td class="spacer" width="30"></td>
                                                                  <td width="540">
                               
                                                                      <table class="full" align="center" width="auto"
                                                                          cellpadding="0" cellspacing="0" border="0"
                                                                          style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td class="center" align="center"
                                                                                      style="padding: 0px; text-transform: uppercase; font-family: Lucida Sans Unicode; color:#666666; font-size:24px; line-height:0; padding-bottom: 0px;">
                                                                                      <span>
                                                                                          <a href="https://www.social-media-board.com/"
                                                                                              style="color:#0f48d5;"  target="_blank">
                                                                                              <img src="http://social-media-board.com/wp-content/uploads/2022/04/social-media-board-logo.png"
                                                                                                  alt="Social Media Board"
                                                                                                  width="auto" height="42"
                                                                                                  border="0"
                                                                                                  style="display: inline;">
                                                                                          </a>
                                                                                      </span>
                                                                                  </td>
                                                                              </tr>
                                                                               <tr>
                                                                                  <td width="100%" height="30">&nbsp;</td>
                                                                              </tr>
  
                                                                          </tbody>
                                                                      </table>
                              
                                                                  </td>
                                                                  <td class="spacer" width="30"></td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
      <table align="center" bgcolor="#26272b" cellpadding="0" cellspacing="0" border="0"
          style="">
          <tbody>
              <tr>
                  <td valign="top" width="100%" style="background: #26272b;">
                      <table cellpadding="0" cellspacing="0" border="0">
                          <tbody>
                              <tr>
                                  <td width="100%">
                                      <table class="table_scale"  width="600" bgcolor="#26272b" cellpadding="0"
                                          cellspacing="0" border="0">
                                          <tbody>
                                              <tr>
                                                  <td width="100%">
                                                      <table width="600" cellpadding="0" cellspacing="0" border="0">
                                                          <tbody>
                                                              <tr>
                                                                  <td class="spacer" width="30"></td>
                                                                  <td width="540">
                                                                      <!-- START OF RIGHT COLUMN FOR SOCIAL ICONS-->
                                                                      <table class="full" align="center" width="auto"
                                                                          cellpadding="0" cellspacing="0" border="0"
                                                                          style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td class="center" align="center"
                                                                                      style="margin: 0; font-size:14px ; color:#aaaaaa; font-family: Helvetica, Arial, sans-serif; line-height: 100%; padding-bottom: 30px;">
                                                                                      <span>
                                                                                          <a href="https://www.facebook.com/SocialMediaBoard"
                                                                                              target="_blank" style="padding-right: 28px; text-decoration: none;">
                                                                                              <img src="http://social-media-board.com/wp-content/uploads/2022/04/mail-fb-icon.png"
                                                                                                  style="width: 30px;" alt="facebook">
                                                                                          </a> &nbsp;
                                                                                          <a href="https://twitter.com/SocialMediaBoard"
                                                                                              target="_blank" style="padding-right: 28px; text-decoration: none;">
                                                                                              <img src="http://social-media-board.com/wp-content/uploads/2022/04/mail-tw-icon.png"
                                                                                                  style="width: 30px;" alt="twitter">
                                                                                          </a> &nbsp;
                                                                                          <a href="https://www.linkedin.com/company/SocialMediaBoard"
                                                                                              target="_blank" style=" text-decoration: none;">
                                                                                              <img src="http://social-media-board.com/wp-content/uploads/2022/04/mail-in-icon.png"
                                                                                                  style="width: 30px;" alt="linkedin">
                                                                                          </a>
                                                                                      </span>
                                                                                  </td>
                                                                              </tr>
                                                                              <tr>
                                                                                <td colspan="3">
                                                                                  <table width="auto" cellspacing="0" cellpadding="0" align="center">
                                                                                    <tbody><tr>
                                                                                      <th>
                                                                                        <a href="https://socioboard.org/privacy-policy/" style="color:#bdbdbd; font-family: Open sans, Arial, Helvetica, sans-serif; font-size:14px;font-weight:400;line-height:15px; text-decoration: none;" target="_blank">Privacy Policy</a>
                                                                                      </th>
                                                                                      <th width="10px" style="border-right: 1px solid #bdbdbd;"></th>
                                                                                      <th width="10px"></th>
                                                                                      <th>
                                                                                        <a href="https://www.social-media-board.com/" style="color:#bdbdbd;font-family: Open sans, Arial, Helvetica, sans-serif; font-size:14px;font-weight:400; line-height:15px; text-decoration: none;" target="_blank">social-media-board.com</a>
                                                                                      </th>
                                                                                      <th width="10px" style="border-right: 1px solid #bdbdbd;"></th>
                                                                                      <th width="10px"></th>
                                                                                      <th>
                                                                                        <a href="<%asm_preferences_raw_url%>" style="color:#bdbdbd; font-family: Open sans, Arial, Helvetica, sans-serif; font-size:14px;font-weight:400;line-height:15px; text-decoration: none;">Unsubscribe</a>
                                                                                      </th>
                                                                                    </tr>
                                                                                  </tbody></table>
                                                                                </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                      <!-- END OF RIGHT COLUMN FOR SOCIAL ICONS-->
                                                                  </td>
                                                                  <td class="spacer" width="30"></td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                      <!-- START OF VERTICAL SPACER-->
                                      <table bgcolor="#26272b" class="table_scale" width="600" align="center"
                                          cellpadding="0" cellspacing="0" border="0">
                                          <tbody>
                                              <tr>
                                                  <td width="100%" height="30">&nbsp;</td>
                                              </tr>
                                          </tbody>
                                      </table>
                                      <!-- END OF VERTICAL SPACER-->
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
      <table cellspacing="0" cellpadding="0" border="0" bgcolor="#26272b" align="center">
          <tbody>
              <tr>
                  <td width="100%" valign="top">
                      <table cellspacing="0" cellpadding="0" border="0" bgcolor="#26272b">
                          <tbody>
                              <tr>
                                  <td width="100%">
  
                                      <table class="table_scale" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#26272b" align="center">
                                          <tbody>
                                              <tr>
                                                  <td width="100%">
                                                      <table width="600" cellspacing="0" cellpadding="0" border="0">
                                                          <tbody>
                                                              <tr>
                                                                  <td class="spacer" width="30"></td>
                                                                  <td width="540">
                                                                      <!-- START OF LEFT COLUMN FOR HEADING-->
                                                                      <table class="full" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;" width="500" cellspacing="0" cellpadding="0" border="0" align="center">
                                                                          <tbody>
                                                                              <tr>
                                                                                  <td style="margin: 0; font-size:13px ; color:#bdbdbd; font-family: Open sans, Arial, Helvetica, sans-serif; line-height: 18px; text-align: center;" width="100%" height="20">
                                                                                      Copyright © 2014 - 2022 Social Media Board. All Rights Reserved.</td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                      <!-- END OF LEFT COLUMN FOR HEADING-->
                                                                  </td>
                                                                  <td class="spacer" width="30"></td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                      <!-- END OF VERTICAL SPACER-->
                                      <!-- START OF VERTICAL SPACER-->
                                      <table class="table_scale" width="600" cellspacing="0" cellpadding="0" border="0" bgcolor="#26272b" align="center">
                                          <tbody>
                                              <tr>
                                                  <td width="100%" height="30">&nbsp;</td>
                                              </tr>
                                          </tbody>
                                      </table>
                                      <!-- END OF VERTICAL SPACER-->
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table>
      <!-- END OF FOOTER BLOCK-->
  
  </body>
  
  </html>`;
}
