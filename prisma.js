const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

module.exports = prisma;


//prisma client set up such that we do not require it to
//create each time
