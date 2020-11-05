'use strict'

const delay = ms => new Promise(res => setTimeout(res, ms));

module.exports = async (event, context) => {
  const result = {
    'status': 'Received input: ' + JSON.stringify(event.body)
  }

  // await delay(1000);

  console.log(result)

  return context.status(200)
}
