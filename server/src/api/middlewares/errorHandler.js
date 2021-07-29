const express = require("express");

function errorHandler(err, req, res, next) {
  console.log(err.message);
  res.status(500).send(err.message);
}

module.exports = {
  errorHandler,
};
