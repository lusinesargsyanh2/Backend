## E1. The module wrapper

### Why does arguments exist at the top of a file? What are the 5 arguments, in order?

**Answer:**
Node.js-ում յուրաքանչյուր CommonJS ֆայլ նախքան աշխատեցնելը փաթեթավորվում է հատուկ ֆունկցիայի մեջ, որը կոչվում է Module Wrapper Function։

1. exports - Հղում դեպի module.exports
2. require - Այլ մոդուլներ ներմուծելու ֆունկցիա
3. module - Ընթացիկ մոդուլի օբյեկտը
4. \_\_filename - Ընթացիկ ֆայլի ամբողջական ճանապարհը
5. \_\_dirname - Ընթացիկ ֆայլի պարունակող թղթապանակի ճանապարհը

```javascript
(function (exports, require, module, __filename, __dirname) {
  // Քո ֆայլի ամբողջ կոդը
});
```

2. What are arguments[3] and arguments[4] ?
   **Answer:**

- arguments[3] - \_\_filename - Ընթացիկ ֆայլի ամբողջական ճանապարհը
- arguments[4] - \_\_dirname - Ընթացիկ ֆայլի պարունակող թղթապանակի ճանապարհը

3. A return at the top level of a file is normally a syntax error. Why does it work here?
   **Answer:**
   Node.js-ում յուրաքանչյուր CommonJS ֆայլ նախքան աշխատեցնելը փաթեթավորվում է ֆունկցիայի մեջ, այսպիսով return-ը ֆունկցիայի մեջ է և աշխատում է։
4. Is secret available in other files? Why not?
   **Answer:**
   secret հայտարարված է Module Wrapper Function-ի ներսում և Function Scope է հասանելի չէ այլ ֆայլերում։

## E2. exports vs module.exports

1. What does each module export? Explain c.js and d.js carefully.
   **Answer**
   - c.js - exports փոփոխականին վերագրվում է նոր օբյեկտի հղումը, բայց module.exports-ը շարունակում է հղում անել սկզբնական դատարկ օբյեկտին։ Քանի որ require()-ը վերադարձնում է module.exports-ը, նոր օբյեկտը export չի լինում։
   - d.js - first: 1 արժեք է ստաբում module.exports = { second: 2 } հղվում է նոր օբյեկտի և first - ը export չի լինում։
2. Write one rule in your own words: when is it safe to use exports, and when must you use module.exports ?
   **Answer**
   exports եթե ցանկանում եք հատկություն ավելացնել գոյություն ունեցող օբյեկտին։ module.exports ամբողջությամբ փոխարինել export արվող օբյեկտը։

## E3. Caching

1. How many times was "counter.js is running" printed before deleting the cache? Why?
   **Answer:**
   - Առաջին require('./counter') կանչի ժամանակ Node.js-ը կատարում է counter.js ֆայլը և պահում այն cache-ում։
   - Երկրորդ require('./counter') կանչի ժամանակ Node.js-ը գտնում է մոդուլը cache-ում և վերադարձնում արդեն ստեղծված օբյեկտը՝ առանց ֆայլը կրկին կատարելու։

2. Why does c2.increment() return 3?
   **Answer:**
   Պատճառն այն է, որ c1-ը և c2-ը հղում են նույն օբյեկտին։ Քանի որ երկու անգամ կանչել ենք c1.increment()-ը, count-ը դարձել է 2։ c2.increment() count-ը դարձնում է 3։

3. What changed after deleting from require.cache ? What are the keys of require.cache ?
   **Answer:**
   Այս հրամանը ջնջում է counter.js մոդուլի գրառումը Node.js-ի cache-ից։ c3 = require("./counter") ստեղծվում է նոր count = 0։ require.cache-ը օբյեկտ է, որտեղ բանալիները մոդուլների ամբողջական (absolute) ֆայլային ճանապարհներն են, իսկ արժեքները՝ համապատասխան մոդուլների օբյեկտները։

4. Name one real situation where caching modules is useful (hint: a database connection or app config).
   **Answer:**
   Օրինակ՝ տվյալների բազայի միացման (Database Connection) դեպքում։ Պատկերացնենք՝ մեր Node.js հավելվածը միանում է MongoDB տվյալների բազային։ Եթե ամեն անգամ, երբ որևէ ֆայլում օգտագործում ենք require('./database'), նոր միացում ստեղծվի, դա կարող է ավելորդ ծանրաբեռնել սերվերը։
