var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
    
const chrome = require("selenium-webdriver/chrome"); 

function debuggingPort() {
  return "59318";
}

module.exports = {

  chromeOptions: function() {
     opts = new chrome.Options();        
     opts.addArguments("--remote-debugging-port=" + debuggingPort());
     return opts;
  },
  
  debuggingChromeOptions: function() {
     opts = new chrome.Options();     
     opts.options_["debuggerAddress"] = "127.0.0.1:" + debuggingPort();
     return opts;
  },

  login: function(driver, username, password) {
    driver.findElement(webdriver.By.name('username')).sendKeys('agileway');
    driver.findElement(webdriver.By.name('password')).sendKeys('testwise');
    driver.findElement(webdriver.By.name('commit')).click();
  },
  
  
  
  sign_in: function(username, password) {
    driver.findElement(webdriver.By.name('username')).sendKeys('agileway');
    driver.findElement(webdriver.By.name('password')).sendKeys('testwise');
    driver.findElement(webdriver.By.name('commit')).click();
  },

};