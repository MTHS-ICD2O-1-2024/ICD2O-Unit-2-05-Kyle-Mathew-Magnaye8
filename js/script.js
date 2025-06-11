// Copyright (c) 2025 kyle.matthew.magnaye All rights reserved
//
// Created by: kyle.matthew.magnaye
// Created on: Jun 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function finds out how much pay you take home and how much tax is taken.
 */
function calculateTakeHomePay() {
  // Get hours and wage from the boxes
  let hours = document.getElementById("hours-worked").value
  let wage = document.getElementById("hourly-wage").value

  // Make them numbers
  hours = Number(hours)
  wage = Number(wage)

  // Work out pay and taxes
  let pay = hours * wage
  let tax = pay * 0.18
  let takeHome = pay - tax

  // Show the answers on the page
  document.getElementById("take-home-pay").innerHTML = "Your pay will be: $" + takeHome.toFixed(2)
  document.getElementById("taxes").innerHTML = "The government will take: $" + tax.toFixed(2)
}
