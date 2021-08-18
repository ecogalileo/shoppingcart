import React, { useState } from 'react';

const TimeGreeting = () => {
  const styles = {
    color: 'white',
    fontSize: 25,
  };

  const day = new Date();
  const hourOfDay = day.getHours();
  // const hourOfDay = 11;
  const [time, setTime] = useState(day.toLocaleString());
  let greeting;

  setTimeout(() => {
    setTime(day.toLocaleString());
  }, 1000);

  if (hourOfDay < 12) {
    greeting = 'Good Morning!';
    styles.color = 'green';
  } else if (hourOfDay < 17) {
    greeting = 'Good Afternoon!';
    styles.color = 'white';
  } else {
    greeting = 'Good Evening!';
    styles.color = 'red';
  }

  return (
    <div>
      <p>
        <center class="mt-3">{time}</center> <h3 style={styles}>{greeting}</h3>
      </p>
    </div>
  );
};

export default TimeGreeting;
