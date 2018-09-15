const keys = require('../../config/keys');

module.exports = survey => {
  return `
    <html>
      <body>
          <p>${survey.body}</p>

        <div style="text-align: center;">
          <p>You can also include images within these emails. For example: </p>
        </div>

        <div style="text-align: center;">
          <img src="https://lh5.googleusercontent.com/8LaaGj8kpOKNnqnioaCyVci3SkVCCparz5cBfi0dBdgreCTqYOjR8hEsNEp8z_5I666d0yOEuE2fpZl1ND2d=w1920-h916-rw">
        </div>
      </body>
    </html>
  `;
};
