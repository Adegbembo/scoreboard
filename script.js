'use strict'

let homePts = 0;
let guestPts = 0;

const homePtsEl = document.querySelector('.home-pts');
const guestPtsEl = document.querySelector('.guest-pts');


function homescorePlus1() {
  homePts++;
  homePtsEl.textContent = homePts;
}

function homescorePlus2() {
  homePts+=2;
  homePtsEl.textContent = homePts;
}

function homescorePlus3() {
  homePts+=3;
  homePtsEl.textContent = homePts;
}

function guestscorePlus1() {
  guestPts++;
  guestPtsEl.textContent = guestPts; 
}

function guestscorePlus2() {
  guestPts+=2;
  guestPtsEl.textContent = guestPts; 
}

function guestscorePlus3() {
  guestPts+=3;
  guestPtsEl.textContent = guestPts; 
}

function restartBtn() {
  homePts = 0;
  guestPts = 0;
  homePtsEl.textContent = homePts;
  guestPtsEl.textContent = guestPts;
}


