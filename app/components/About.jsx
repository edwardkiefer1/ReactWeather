var React = require('react');


var About = (props) => {
  return (
    <div>
    <h1 className="text-center">About Component</h1>
     <p>This is a weather app builton React</p>
     <p>
          Here are some of the tools I have used
     </p>
     <ul>
         <li>
           <a href='https://facebook.github.io/react'>React</a> - This was the framework used.
         </li>
         <li>
           <a href="http://openweathermap.org">Open Weather Map</a> - I used open weather map to search by city name.

         </li>
       </ul>
      </div>



  )

};

module.exports = About;
