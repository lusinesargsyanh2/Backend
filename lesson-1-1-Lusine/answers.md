# Questions & Answers

## [Part A] Knowledge check

### 1. What was the C10k problem, and why did the "one thread per request" model of servers like Apache struggle with it?

**Answer:**
C10K խնդիրը միաժամանակ սերվերին միացած 10 000 օգտատիրոջ սպասարկելու մարտահրավերն է։ Յուրաքանչյուր մուտքային միացում ստեղծում էր առանձին հոսք (thread), ինչը հանգեցնում էր օպերատիվ հիշողության (RAM) չափազանց մեծ ծավալի օգտագործմանը և մուտքի/ելքի (I/O) գործողությունների ժամանակ արգելափակումների (blocking) առաջացմանը՝ նվազեցնելով սերվերի արտադրողականությունը։

**2. What did Ryan Dahl notice about the Flickr upload progress bar, and what idea did it give him?** 

**Answer:**
Ֆայլի վերբեռնման ընթացքում progress bar ցուցադրելու համար բրաուզերը ստիպված էր լրացուցիչ հարցումներ ուղարկել սերվերին՝ պարզելու, թե ֆայլի որ տոկոսն է արդեն վերբեռնվել, քանի որ ինքը՝ սերվերը, հնարավորություն չուներ բաց պահել կապը՝ ընթացքը ստուգելու և ֆայլի պատրաստ լինելու մասին տեղեկացնելու համար։

**3. Node.js did not write its own JavaScript engine. Which engine does it use, who created it, and why was it a good choice in 2009?** 

**Answer:**
Node.js-ը օգտագործում է v8 JavaScript engine քանի որ այն ապահովում է բարձր արտադրողականություն (High Performance) js-ը վերածվում է machine code-ի, արագ կատարում (Fast Execution) այն նախատեսված էր JavaScript-ն արդյունավետ և արագ կատարելու համար։ Open source է և արդեն փորձարկված կոդ է։

**4. Why was the creation of npm in 2010 so important for Node.js?** 

**Answer:**
npm-ի ստեղծումը թույլ տվեց ծրագրավորողներին կիսվել պատրաստի մոդուլներով ինչն էլ ապահովեց էկոհամակարգի արագ աճ։

**5. Before Node.js, the web was split into "two worlds". What were they, and what changed after Node.js?**

**Answer:**
Մինչ Node.js-ը վեբը բաժանված էր երկու մասի Backend- java, PHP, Ruby, Pyton,  Frintend - JavaScript: Node.js-ը թույլ տվեց մի լեզվով ստանալ և կայքի տեսքը և սեովերի հատվածը։

**6. Explain the role of each folder in the Node.js repository: lib/ , src/ and deps/ . Which language is mainly used in each?**

**Answer:**
lib/ - JavaScript Layer: Պարունակում է Node.js-ի հիմնական JavaScript կոդը։ Իրականացնում է բարձր մակարդակի API-ները, որոնք օգտագործում են ծրագրավորողները։ Հիմնական լեզուն՝ JavaScript։
Օրինակ՝ 
fs, http, path, events մոդուլները։ Օրինակ՝ երբ գրում ենք fs.readFile(), դրա JavaScript իրականացումը գտնվում է այս շերտում։

src/ - C++ Layer: Պարունակում է Node.js-ի ներքին C++ կոդը։ Կապ է ստեղծում JavaScript-ի և ցածր մակարդակի համակարգային հնարավորությունների միջև։Կառավարում է V8-ի հետ ինտեգրումը և իրականացնում է Node.js-ի ներքին մեխանիզմները։ Հիմնական լեզուն՝ C++։
Օրինակ՝
fs.readFile()-ի JavaScript կոդը դիմում է C++ շերտին, որը կազմակերպում է ֆայլային գործողությունը։

deps/ - Dependencies: Պարունակում է արտաքին գրադարաններ և նախագծեր, որոնցից օգտվում է Node.js-ը։ Դրանք անհրաժեշտ են տարբեր ֆունկցիոնալ հնարավորություններ ապահովելու համար։ Հիմնական լեզուները՝ C և C++, կախված կոնկրետ գրադարանից։
Օրինակ՝
- V8 – JavaScript Engine։
- libuv – ապահովում է Event Loop-ը և asynchronous I/O-ն։