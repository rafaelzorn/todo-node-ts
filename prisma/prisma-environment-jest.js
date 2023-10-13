/* eslint-disable @typescript-eslint/no-var-requires */

const NodeEnvironment = require('jest-environment-node').TestEnvironment
const { execSync } = require('child_process')
const { resolve } = require('path')
const mysql = require('mysql2');

const prismaCli = './node_modules/.bin/prisma'

require('dotenv').config({
  path: resolve(__dirname, '..', '.env.test'),
})

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config)

    this.connectionString = `${process.env.DATABASE_URL}`
  }

  setup() {
    process.env.DATABASE_URL = this.connectionString
    this.global.process.env.DATABASE_URL = this.connectionString

    execSync(`${prismaCli} migrate dev`)
  }

  async teardown() {
    const database = process.env.DATABASE

    const connection = await mysql.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database,
    });

    try {
      await connection.promise().query(`DROP DATABASE IF EXISTS ${database}`)
    } catch (err) {
      console.error(err);
    } finally {
      connection.end();
    }
  }
}

module.exports = CustomEnvironment





