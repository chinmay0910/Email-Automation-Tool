const sendMail = require('./sendMail');

const emails = [
    {
      "email": "chinmayrmhatre@gmail.com",
      "name": "Chinmay R Mhatre"
    },
  ]; // Array of emails

const subject = 'Mini Marvel Showcase: Your team is in!';
// const body = "";

// Call sendMail function for each email in the array
emails.forEach(email => {
    sendMail(email.email, subject, `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <!--[if gte mso 9]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="x-apple-disable-message-reformatting">
      <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
      <title></title>
      
        <style type="text/css">
          @media only screen and (min-width: 620px) {
      .u-row {
        width: 600px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
    
      .u-row .u-col-100 {
        width: 600px !important;
      }
    
    }
    
    @media (max-width: 620px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }
      .u-row {
        width: 100% !important;
      }
      .u-col {
        width: 100% !important;
      }
      .u-col > div {
        margin: 0 auto;
      }
    }
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'] {
      color: inherit !important;
      text-decoration: none !important;
    }
    
    table, td { color: #000000; } #u_body a { color: #cca250; text-decoration: none; } @media (max-width: 480px) { #u_content_image_4 .v-src-width { width: auto !important; } #u_content_image_4 .v-src-max-width { max-width: 57% !important; } #u_content_heading_3 .v-container-padding-padding { padding: 10px 20px !important; } #u_content_heading_3 .v-font-size { font-size: 28px !important; } #u_content_image_3 .v-container-padding-padding { padding: 46px 10px 10px !important; } #u_content_image_3 .v-src-width { width: auto !important; } #u_content_image_3 .v-src-max-width { max-width: 100% !important; } #u_content_text_3 .v-container-padding-padding { padding: 10px 22px 26px !important; } }
        </style>
      
      
    
    <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
    
    </head>
    
    <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #f9f9f9;color: #000000">
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #f9f9f9;width:100%" cellpadding="0" cellspacing="0">
      <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #f9f9f9;"><![endif]-->
        
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #111114;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #111114;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table id="u_content_image_4" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px;font-family:'Montserrat',sans-serif;" align="left">
            
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right: 0px;padding-left: 0px;" align="center">
          <a href="https://cesa-vit.vercel.app/" target="_blank">
          <img align="center" border="0" src="https://res.cloudinary.com/des9bm6u1/image/upload/v1712168600/CESA%20EMAIL%20TEMPLATE/i1gbqrzhmnlppidmd6je.png" alt="Logo" title="Logo" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 44%;max-width: 255.2px;" width="255.2" class="v-src-width v-src-max-width"/>
          </a>
        </td>
      </tr>
    </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table id="u_content_heading_3" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 55px;font-family:'Montserrat',sans-serif;" align="left">
            
      <!--[if mso]><table width="100%"><tr><td><![endif]-->
        <h1 class="v-font-size" style="margin: 0px; color: #d2d2d2; line-height: 160%; text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif; font-size: 16px; font-weight: 400;"><table style="border-collapse: collapse; color: #222222; white-space: normal; min-width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td style="margin: 0px; padding-top: 9px;" valign="top">
    <table class="m_-7184006032059425677mcnTextContentContainer" style="border-collapse: collapse; max-width: 100%; min-width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
    <tbody>
    <tr>
    <td class="m_-7184006032059425677mcnTextContent" style="margin: 0px; word-break: break-word; color: #656565; line-height: 18px; text-align: left; padding: 0px 18px 9px;" valign="top">
    <div style="text-align: center; font-size: 1.4rem;"><span style="color: #353576;"><span>Hello, ${email.name}!</span></span></div>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table style="border-collapse: collapse; color: #222222; white-space: normal; min-width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0">
    <tbody>
    <tr>
    <td style="margin: 0px; padding-top: 9px;" valign="top">
    <table class="m_-7184006032059425677mcnTextContentContainer" style="border-collapse: collapse; max-width: 100%; min-width: 100%;" border="0" width="100%" cellspacing="0" cellpadding="0" align="left">
    <tbody>
    <tr>
    <td class="m_-7184006032059425677mcnTextContent" style="margin: 0px; word-break: break-word; color: #656565; line-height: 18px; text-align: left; padding: 0px 18px 9px;" valign="top">
    <h1 style="display: block; margin: 0px; padding: 0px; color: #202020; line-height: 32.5px; text-align: center; font-size: 2.4rem;"><span style="color: #353576;"><span>Your Team is accepted to attend Mini Marvel Showcase in Plethora 2024, how awesome is that?</span></span></h1>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table></h1>
      <!--[if mso]></td></tr></table><![endif]-->
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table id="u_content_image_3" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:55px 10px 10px;font-family:'Montserrat',sans-serif;" align="left">
            
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right: 0px;padding-left: 0px;" align="center">
          
          <img align="center" border="0" src="https://res.cloudinary.com/des9bm6u1/image/upload/v1712168601/CESA%20EMAIL%20TEMPLATE/wjrs5mcoh88hetdhtxc7.png" alt="Tick Icon" title="Tick Icon" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 580px;" width="580" class="v-src-width v-src-max-width"/>
          
        </td>
      </tr>
    </table>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table id="u_content_text_3" style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 60px 50px;font-family:'Montserrat',sans-serif;" align="left">
            
      <div class="v-font-size" style="font-size: 14px; color: #0000ee; line-height: 170%; text-align: left; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 170%;"><span style="color: #202020; font-family: 'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif; font-size: 18px; text-align: left; white-space: normal; background-color: #ffffff; float: none; display: inline; line-height: 30.6px;">We loved your profile and are sure you must have build something amazing for Plethora-2024 Mini  Marvels Showcase ( Project Competition ). We can't wait to see you here. </span></p>
    <p style="font-size: 14px; line-height: 170%;"><span style="color: #202020; font-family: 'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif; font-size: 18px; text-align: left; white-space: normal; background-color: #ffffff; float: none; display: inline; line-height: 30.6px;">As one last step in the Competition, we are pleased to invite you to the offline round, which will take place at Vidyalankar Institute of Technology Campus, Vadala. The event is scheduled for April 4th, at the Boxing area near Gate 2. Make sure you report by 3:30 pm to ensure a smooth start.  </span></p>
    <p style="font-size: 14px; line-height: 170%;"> </p>
    <p style="font-size: 14px; line-height: 170%;"><span style="color: #202020; font-family: 'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif; font-size: 18px; text-align: left; white-space: normal; background-color: #ffffff; float: none; display: inline; line-height: 30.6px;">Please join the WhatsApp group for any queries:<br /></span><span style="color: #202020; font-family: 'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif; font-size: 18px; text-align: left; white-space: normal; background-color: #ffffff; float: none; display: inline; line-height: 30.6px;"></span></p>
    <p style="font-size: 14px; line-height: 170%;"><span style="color: #202020; font-family: 'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif; font-size: 18px; text-align: left; white-space: normal; background-color: #ffffff; float: none; display: inline; line-height: 30.6px;"><a href="https://chat.whatsapp.com/IMmyiJJ0Vkb31SgfPiGoRP">https://chat.whatsapp.com/IMmyiJJ0Vkb31SgfPiGoRP</a></span></p>
    <p style="font-size: 14px; line-height: 170%;"><br style="color: #202020; font-family: 'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif; font-size: 18px; text-align: left; white-space: normal; background-color: #ffffff;" /><br style="color: #202020; font-family: 'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif; font-size: 18px; text-align: left; white-space: normal; background-color: #ffffff;" /><strong style="color: #202020; font-family: 'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif; font-size: 18px; text-align: left; white-space: normal; background-color: #ffffff;">Note: Use this mail to get Entry in Vidyalankar Campus</strong><br style="color: #202020; font-family: 'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif; font-size: 18px; text-align: left; white-space: normal; background-color: #ffffff;" /><br style="color: #202020; font-family: 'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif; font-size: 18px; text-align: left; white-space: normal; background-color: #ffffff;" /><span style="color: #202020; font-family: 'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif; font-size: 18px; text-align: left; white-space: normal; background-color: #ffffff; float: none; display: inline; line-height: 30.6px;">Best Regards,</span><br style="color: #202020; font-family: 'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif; font-size: 18px; text-align: left; white-space: normal; background-color: #ffffff;" /><span style="color: #202020; font-family: 'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif; font-size: 18px; text-align: left; white-space: normal; background-color: #ffffff; float: none; display: inline; line-height: 30.6px;">CESA VIT TEAM</span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
      
      
    <div class="u-row-container" style="padding: 0px;background-color: transparent">
      <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #111114;">
        <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #111114;"><![endif]-->
          
    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
    <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
      <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
      <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
      
    <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:32px 10px 0px;font-family:'Montserrat',sans-serif;" align="left">
            
      <div class="v-font-size" style="font-size: 14px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
        <p style="line-height: 140%;"><a rel="noopener" href="https://cesa-vit.vercel.app/" target="_blank"><span style="font-size: 18px; line-height: 25.2px;"><strong>CESA VIT</strong></span></a></p>
    <div>
    <div>Email: cesa.vidyalankar@gmail.com</div>
    <div>Contact Person: Atharva Ingole</div>
    <div>Cell No: 8080718581</div>
    </div>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
            
      <div class="v-font-size" style="font-size: 14px; color: #b0b1b4; line-height: 180%; text-align: center; word-wrap: break-word;">
        <p style="font-size: 14px; line-height: 180%;"><span style="color: #d1d3d4; font-family: 'Source Sans Pro', sans-serif; font-size: 16px; text-align: left; white-space: normal; background-color: #0f2e47; float: none; display: inline; line-height: 28.8px;">Vidyalankar Institute of Technology, Vidyalankar College Marg, Wadala(E), Mumbai-400 037</span></p>
      </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
    <table style="font-family:'Montserrat',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
      <tbody>
        <tr>
          <td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;" align="left">
            
    <div align="center">
      <div style="display: table; max-width:211px;">
      <!--[if (mso)|(IE)]><table width="211" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:211px;"><tr><![endif]-->
      
        
        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 21px;" valign="top"><![endif]-->
        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 21px">
          <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <a href="https://www.facebook.com/vitcesastudentchapter/" title="Facebook" target="_blank">
              <img src="https://res.cloudinary.com/des9bm6u1/image/upload/v1712168601/CESA%20EMAIL%20TEMPLATE/kcfbbwn5zlnm1k2viksw.png" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
            </a>
          </td></tr>
        </tbody></table>
        <!--[if (mso)|(IE)]></td><![endif]-->
        
        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 21px;" valign="top"><![endif]-->
        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 21px">
          <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <a href="https://instagram.com/cesavit_/" title="Instagram" target="_blank">
              <img src="https://res.cloudinary.com/des9bm6u1/image/upload/v1712168600/CESA%20EMAIL%20TEMPLATE/uaa758nxvnunpwbv0zfs.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
            </a>
          </td></tr>
        </tbody></table>
        <!--[if (mso)|(IE)]></td><![endif]-->
        
        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 21px;" valign="top"><![endif]-->
        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 21px">
          <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <a href="https://www.linkedin.com/company/cesa-vit/" title="LinkedIn" target="_blank">
              <img src="https://res.cloudinary.com/des9bm6u1/image/upload/v1712168600/CESA%20EMAIL%20TEMPLATE/s5kpkug3ou3y1vk6b7zt.png" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
            </a>
          </td></tr>
        </tbody></table>
        <!--[if (mso)|(IE)]></td><![endif]-->
        
        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
        <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
          <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
            <a href="https://www.youtube.com/channel/UCHGGuIFztDY0d6_wN-GpxkQ" title="YouTube" target="_blank">
              <img src="https://res.cloudinary.com/des9bm6u1/image/upload/v1712168600/CESA%20EMAIL%20TEMPLATE/yyxw03lqitikpoqpyviz.png" alt="YouTube" title="YouTube" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
            </a>
          </td></tr>
        </tbody></table>
        <!--[if (mso)|(IE)]></td><![endif]-->
        
        
        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
    
          </td>
        </tr>
      </tbody>
    </table>
    
      <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
      </div>
    </div>
    <!--[if (mso)|(IE)]></td><![endif]-->
          <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
      </div>
      
    
    
        <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
    </body>
    
    </html>
    `);
});
