module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/robotWarz',
    pool: {
      min: 2,
      max: 10
    }
  }
};
