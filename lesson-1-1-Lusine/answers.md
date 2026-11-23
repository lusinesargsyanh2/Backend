# Questions & Answers

## [Part A] Knowledge check

### 1. What was the C10k problem, and why did the "one thread per request" model of servers like Apache struggle with it?

**Answer:**
C10K խնդիրը միաժամանակ սերվերին միացած 10 000 օգտատիրոջ սպասարկելու մարտահրավերն է։ Յուրաքանչյուր մուտքային միացում ստեղծում էր առանձին հոսք (thread), ինչը հանգեցնում էր օպերատիվ հիշողության (RAM) չափազանց մեծ ծավալի օգտագործմանը և մուտքի/ելքի (I/O) գործողությունների ժամանակ արգելափակումների (blocking) առաջացմանը՝ նվազեցնելով սերվերի արտադրողականությունը։

### 2. What did Ryan Dahl notice about the Flickr upload progress bar, and what idea did it give him?

**Answer:**
Ֆայլի վերբեռնման ընթացքում progress bar ցուցադրելու համար բրաուզերը ստիպված էր լրացուցիչ հարցումներ ուղարկել սերվերին՝ պարզելու, թե ֆայլի որ տոկոսն է արդեն վերբեռնվել, քանի որ ինքը՝ սերվերը, հնարավորություն չուներ բաց պահել կապը՝ ընթացքը ստուգելու և ֆայլի պատրաստ լինելու մասին տեղեկացնելու համար։

### 3. Node.js did not write its own JS engine. Which engine does it use, who created it, and why was it a good choice in 2009?

**Answer:**
Node.js-ը օգտագործում է v8 JS engine քանի որ այն ապահովում է բարձր արտադրողականություն (High Performance) js-ը վերածվում է machine code-ի, արագ կատարում (Fast Execution) այն նախատեսված էր JS-ն արդյունավետ և արագ կատարելու համար։ Open source է և արդեն փորձարկված կոդ է։

### 4. Why was the creation of npm in 2010 so important for Node.js?

**Answer:**
npm-ի ստեղծումը թույլ տվեց ծրագրավորողներին կիսվել պատրաստի մոդուլներով ինչն էլ ապահովեց էկոհամակարգի արագ աճ։

### 5. Before Node.js, the web was split into "two worlds". What were they, and what changed after Node.js?

**Answer:**
Մինչ Node.js-ը վեբը բաժանված էր երկու մասի Backend- java, PHP, Ruby, Pyton, Frintend - JS: Node.js-ը թույլ տվեց մի լեզվով ստանալ և կայքի տեսքը և սեովերի հատվածը։

### 6. Explain the role of each folder in the Node.js repository: lib/ , src/ and deps/ . Which language is mainly used in each?

**Answer:**
lib/ - JS Layer: Պարունակում է Node.js-ի հիմնական JS կոդը։ Իրականացնում է բարձր մակարդակի API-ները, որոնք օգտագործում են ծրագրավորողները։ Հիմնական լեզուն՝ JS։
Օրինակ՝
fs, http, path, events մոդուլները։ Օրինակ՝ երբ գրում ենք fs.readFile(), դրա JS իրականացումը գտնվում է այս շերտում։

src/ - C++ Layer: Պարունակում է Node.js-ի ներքին C++ կոդը։ Կապ է ստեղծում JS-ի և ցածր մակարդակի համակարգային հնարավորությունների միջև։Կառավարում է V8-ի հետ ինտեգրումը և իրականացնում է Node.js-ի ներքին մեխանիզմները։ Հիմնական լեզուն՝ C++։
Օրինակ՝
fs.readFile()-ի JS կոդը դիմում է C++ շերտին, որը կազմակերպում է ֆայլային գործողությունը։

deps/ - Dependencies: Պարունակում է արտաքին գրադարաններ և նախագծեր, որոնցից օգտվում է Node.js-ը։ Դրանք անհրաժեշտ են տարբեր ֆունկցիոնալ հնարավորություններ ապահովելու համար։ Հիմնական լեզուները՝ C և C++, կախված կոնկրետ գրադարանից։
Օրինակ՝

- V8 – JS Engine։
- libuv – ապահովում է Event Loop-ը և asynchronous I/O-ն։

## 7. What is libuv, and why is it often called the "heart" of Node.js?

**Answer:**
libuv-ը C լեզվով գրված cross-platform գրադարան է, որն օգտագործվում է Node.js-ում՝ ասինխրոն գործողություններ և ոչ բլոկավորող I/O ապահովելու համար։ Այն հաճախ անվանում են Node.js-ի «սիրտ» (heart), քանի որ պատասխանատու է Node.js-ի ասինխրոն աշխատանքի հիմնական մեխանիզմների համար։

- Event Loop: Կառավարում է Event Loop-ը, որը հետևում է ասինխրոն գործողություններին և որոշում, թե երբ պետք է կատարվեն դրանց callback-ները։
- Non-blocking I/O: Ապահովում է, որ ֆայլերի, ցանցի և այլ I/O գործողությունները չարգելափակեն հիմնական JS thread-ը։
- Thread Pool: Ունի Worker Thread-երի pool, որի միջոցով կատարում է որոշ գործողություններ, օրինակ՝ ֆայլային համակարգի որոշ գործողություններ և DNS lookup-ներ։
- Cross-platform support: Թույլ է տալիս Node.js-ին նույն ձևով աշխատել տարբեր օպերացիոն համակարգերում, օգտագործելով դրանց համապատասխան մեխանիզմները։

### 8. Describe the path of fs.readFile('text.txt') through the three layers, from your JavaScript code to the operating system and back.

**Answer:**
Երբ կանչում ենք fs.readFile('text.txt'), lib/ շերտի JS կոդը հարցումը փոխանցում է src/ շերտի C++ կոդին, որն այն փոխանցում է libuv-ին (deps/)։ libuv-ը Thread Pool-ի միջոցով կազմակերպում է ֆայլի ասինխրոն ընթերցումը, իսկ OS-ը կարդում և վերադարձնում է տվյալները։ Այնուհետև արդյունքը վերադառնում է Node.js, և Event Loop-ի միջոցով callback-ը կատարվում է JS-ի հիմնական thread-ում՝ առանց այն արգելափակելու։

### 9. Why did Ryan Dahl later create Deno? Name one difference from Node.js.

**Answer:**
Ryan Dahl-ը ստեղծեց Deno, քանի որ ցանկանում էր ուղղել Node.js-ի նախագծման սկզբնական որոշ թերություններ, օրինակ՝ անվտանգության սահմանափակումների բացակայությունը և որոշ հին API-ների խնդիրները։
Մեկ տարբերություն: Deno-ն լռելյայն ավելի անվտանգ է․ այն պահանջում է հստակ թույլտվություն ֆայլային համակարգին, ցանցին կամ միջավայրի փոփոխականներին հասանելիություն ստանալու համար, մինչդեռ Node.js-ը լռելյայն նման սահմանափակումներ չունի։

### 10. In your own words: what does non-blocking I/O mean? Give one everyday example (not from computers).

**Answer:**
Non-blocking I/O նշանակում է երբ գործողությունը սկսվում է հիմնական գործողությունը չի բլոկավորվում։
Օրինակ՝ մատուցողը փոխանցում է պատվերը խոհանոց և չի սպասում այնտեղ պատվերի պատրաստ լինելուն, այլ սպասարկում է մյուս սեղաններ, երբ պատվերը պատրաստ է լինում մոտեցնում է սեղանին։

### Browser vs Node.js globals

| Name       | Type in Node.js | Type in browser |
| ---------- | --------------- | --------------- |
| globalThis | object          | object          |
| window     | undefined       | object          |
| document   | undefined       | object          |
| process    | object          | undefined       |
| console    | object          | object          |
| setTimeout | function        | function        |

### Why does Node.js have no window or document , and why does the browser have no process ?

**Answer:**
Node.js-ը չունի window կամ document, քանի որ այն աշխատում է բրաուզերից դուրս և չունի վեբ էջ կամ DOM (Document Object Model), որի հետ կարող է փոխազդել։
Բրաուզերը չունի process, քանի որ այն աշխատում է բրաուզերային միջավայրում, ոչ թե Node.js-ի միջավայրում։

### each of these libraries lives in one folder of the Node.js repository. Write which deps/ folder belongs to V8, libuv, OpenSSL, llhttp and zlib.

**Answer:**

- V8 - deps/v8
- libuv - deps/uv
- OpenSSL - deps/openssl
- llhttp - deps/llhttp
- zlib - deps/zlib

### Open lib/fs.js and find the line where internalBinding('fs') is used. Copy that line. What does it connect to?

**Answer:**
internalBinding('fs')-ը կապ է ստեղծում JS-ի ներքին fs մոդուլի և Node.js-ի C++ իրականացրած ֆայլային համակարգի ֆունկցիոնալության միջև։ Այն թույլ է տալիս JS կոդին հասանելիություն ունենալ C++-ում իրականացված ներքին մեխանիզմներին, օրինակ՝ FSReqCallback-ին։

### Find node_file.cc in src/ . In one sentence, what is its job?

**Answer:**
node_file.cc-ը պատասխանատու է Node.js-ում ֆայլային համակարգի C++ ֆունկցիոնալության իրականացման համար, ներառյալ libuv-ի միջոցով ֆայլերի ասինխրոն գործողությունների իրականացումը։

### . Open deps/ and list 5 folders you find there. For each one, write its role in one line (use the lesson notes).

**Answers:**

- v8/ - JS Engine, որը կատարում և օպտիմիզացնում է կոդը
- uv/ - Ապահովում է Event Loop-ը, Thread Pool-ը և asynchronous I/O-ն։
- openssl/ - Ապահովում է կրիպտոգրաֆիկ ֆունկցիաները և անվտանգ կապը (TLS/SSL)։
- zlib/ - Ապահովում է տվյալների սեղմումը և ապասեղմումը։
- llhttp/ - Ապահովում է HTTP հարցումների և պատասխանների վերլուծությունը (parsing)։
- npm/ - պարունակում է npm (Node Package Manager)-ի հետ կապված կոդը, որն օգտագործվում է JS փաթեթները (package) կառավարելու համար։

### Open lib/ and name 5 modules you recognise or think you will use as a backend developer

**Answer:**
timers, fs, path, net, dns

### Before running anything, read this code and write in answers.md the order in which the letters will be printed.

```javascript
console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
Promise.resolve().then(() => {
  console.log("C");
});
console.log("D");
```

1. Was your prediction correct? Write the real order.
   **Answer:**
   yes
2. The timer is 0 ms. Why is B still not printed right away?
   **Answer**
   Երբ ժամանակը լրանում է, callback-ը դառնում է պատրաստ կատարման։ Սակայն այն չի կարող կատարվել, քանի դեռ Call Stack-ը զբաղված է synchronous կոդով։ Երբ Event Loop-ը հասնում է համապատասխան փուլին և Call Stack-ը ազատ է, callback-ը կատարվում է։
3. Why does C (the promise) run before B (the timer)?
   **Answer**
   Քանի որ Promise-ի callback-ը կատարվում է Microtask Queue-ից, իսկ setTimeout()-ի callback-ը՝ Event Loop-ի Timers phase-ում։ Node.js-ում Microtask Queue-ն ավելի բարձր առաջնահերթություն ունի, քան Timer callback-ները։

### Example

```javascript
const start = Date.now();
setTimeout(() => {
  console.log(`Timer fired after ${Date.now() - start} ms (I asked for 100
ms)`);
}, 100);
// Busy loop: keeps the main thread busy for 2 seconds
while (Date.now() - start < 2000) {}
console.log("Busy loop finished");
```

1. We asked for 100 ms. How many milliseconds did the timer actually wait? Why?
   **Answer**
   2021ms 100ms-ի փոխարեն։ 100ms-ը սպասելու մինիմալ ժամանակն է: Նրա callback-ը չէր կարող կատարվել, մինչև հիմնական thread-ը չազատվեր։
2. Imagine this is a web server and the busy loop is a slow calculation. What happens to
   all other users while it runs?
   **Answer**
   Մյուս օգտատերերը պետք է սպասեն քանի որ հիմնական thread-ը զբաղված է։
3. Connect this to the lesson: why is Node.js built around non-blocking I/O, and why
   must we avoid long synchronous work on the main thread?
   **Answer**
   Node.js-ն օգտագործում է Non-blocking I/O, որպեսզի կարողանա արդյունավետ մշակել բազմաթիվ հարցումներ՝ առանց սպասելու I/O գործողությունների ավարտին։ Պետք է խուսափենք երկարատև synchronous գործողություններից, քանի որ դրանք արգելափակում են հիմնական thread-ը և թույլ չեն տալիս Event Loop-ին մշակել մյուս callback-ներն ու օգտատերերի հարցումները։
