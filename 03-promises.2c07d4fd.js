!function(){var e=document.querySelector(".form");e.addEventListener("input",(function(t){var c=t.target,r=c.name,u=c.value;r&&(n[r]=u);e.addEventListener("submit",o)}));var n={};function t(e,n){var t=Math.random()>.3;new Promise((function(o,c){setTimeout((function(){t?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):c("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}function o(e){e.preventDefault();for(var o=n.amount,c=n.delay,r=n.step,u=0;u<o;u++)0===u?t(1,Number(c)):1===u?t(2,Number(c)+Number(r)):t(u+1,Number(c)+Number(r*u))}}();
//# sourceMappingURL=03-promises.2c07d4fd.js.map
