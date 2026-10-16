'use strict';
const {chromium}=require('playwright-core');
const path=require('path'),fs=require('fs');
const ROOT=path.join(__dirname,'..'),SHOTS=path.join(ROOT,'shots');
fs.mkdirSync(SHOTS,{recursive:true});
const URL='file://'+path.join(ROOT,'index.html');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{
  const browser=await chromium.launch({channel:'chrome',headless:true});
  const ctx=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true,locale:'zh-CN'});
  const page=await ctx.newPage();
  await page.goto(URL);await page.waitForSelector('#scr-home.active');await sleep(400);
  await page.screenshot({path:path.join(SHOTS,'home-390.png'),fullPage:false});
  // chapter tab 11-20
  await page.locator('[data-act="chapter"][data-c="1"]').click();await sleep(300);
  await page.screenshot({path:path.join(SHOTS,'chapter-390.png'),fullPage:false});
  // play room 1
  await page.locator('[data-act="chapter"][data-c="0"]').click();await sleep(200);
  await page.locator('[data-act="play"][data-i="0"]').click();
  await page.waitForSelector('#scr-room.active');
  await page.waitForSelector('#mask.show');
  await page.locator('#sheet [data-act="close"]').last().click();
  await page.waitForFunction(()=>!document.querySelector('#mask').classList.contains('show'));
  await sleep(300);
  await page.screenshot({path:path.join(SHOTS,'room-play-390.png'),fullPage:false});
  await browser.close();
  console.log('shots ok',fs.readdirSync(SHOTS).join(', '));
})().catch(e=>{console.error(e);process.exit(1);});
