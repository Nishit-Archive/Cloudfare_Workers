module.exports.handler = async (event, context) => {
  const name = event.queryStringParameters && event.queryStringParameters.name;
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = `Good morning, ${name || "Stranger"}!`;
  } else if (currentHour < 18) {
    greeting = `Good afternoon, ${name || "Stranger"}!`;
  } else {
    greeting = `Good evening, ${name || "Stranger"}!`;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: greeting }),
  };
};
