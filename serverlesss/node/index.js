module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Serverless function is deply offline!",
      },
      null,
      2
    ),
  };
};
