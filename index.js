
const main = async () => {
  const {Device} = require('ps4-waker');
 
  let ps4 = new Device();

  await ps4.turnOn();

  // モンハンワールド起動
  await ps4.startTitle('CUSA06027');

  ps4.close();
}

main();
