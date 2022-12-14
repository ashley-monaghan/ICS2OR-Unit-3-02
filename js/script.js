// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Unit-3-02/sw.js", {
    scope: "/ICS2OR-Unit-3-02/",
  })
}

/**
 * This function displays an alert.
 * Math
 */
function calculate() {
  // input
  const length = parseFloat(document.getElementById("length").value)
  const width = parseFloat(document.getElementById("width").value)
  const height = parseFloat(document.getElementById("height").value)

  // process
  const math = (length * width * height) / 3
  // output
  document.getElementById("math").innerHTML =
    "Numbers: " + math.toFixed(2) + " cm³"
}
