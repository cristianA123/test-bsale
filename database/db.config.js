module.exports = {
    NAME_DB: process.env.NAME_DB  || 'airline',
    USER_DB: process.env.USER_DB  || 'bsale_test',
    PASSWORD_DB: process.env.PASSWORD_DB  || 'bsale_test',
    HOST_DB: process.env.HOST_DB || 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    dialect: "mysql"
  };
  