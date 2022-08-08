System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={d:(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{default:()=>f});var n={lessThanXSeconds:{one:{standalone:"мање од 1 секунде",withPrepositionAgo:"мање од 1 секунде",withPrepositionIn:"мање од 1 секунду"},dual:"мање од {{count}} секунде",other:"мање од {{count}} секунди"},xSeconds:{one:{standalone:"1 секунда",withPrepositionAgo:"1 секунде",withPrepositionIn:"1 секунду"},dual:"{{count}} секунде",other:"{{count}} секунди"},halfAMinute:"пола минуте",lessThanXMinutes:{one:{standalone:"мање од 1 минуте",withPrepositionAgo:"мање од 1 минуте",withPrepositionIn:"мање од 1 минуту"},dual:"мање од {{count}} минуте",other:"мање од {{count}} минута"},xMinutes:{one:{standalone:"1 минута",withPrepositionAgo:"1 минуте",withPrepositionIn:"1 минуту"},dual:"{{count}} минуте",other:"{{count}} минута"},aboutXHours:{one:{standalone:"око 1 сат",withPrepositionAgo:"око 1 сат",withPrepositionIn:"око 1 сат"},dual:"око {{count}} сата",other:"око {{count}} сати"},xHours:{one:{standalone:"1 сат",withPrepositionAgo:"1 сат",withPrepositionIn:"1 сат"},dual:"{{count}} сата",other:"{{count}} сати"},xDays:{one:{standalone:"1 дан",withPrepositionAgo:"1 дан",withPrepositionIn:"1 дан"},dual:"{{count}} дана",other:"{{count}} дана"},aboutXWeeks:{one:{standalone:"око 1 недељу",withPrepositionAgo:"око 1 недељу",withPrepositionIn:"око 1 недељу"},dual:"око {{count}} недеље",other:"око {{count}} недеље"},xWeeks:{one:{standalone:"1 недељу",withPrepositionAgo:"1 недељу",withPrepositionIn:"1 недељу"},dual:"{{count}} недеље",other:"{{count}} недеље"},aboutXMonths:{one:{standalone:"око 1 месец",withPrepositionAgo:"око 1 месец",withPrepositionIn:"око 1 месец"},dual:"око {{count}} месеца",other:"око {{count}} месеци"},xMonths:{one:{standalone:"1 месец",withPrepositionAgo:"1 месец",withPrepositionIn:"1 месец"},dual:"{{count}} месеца",other:"{{count}} месеци"},aboutXYears:{one:{standalone:"око 1 годину",withPrepositionAgo:"око 1 годину",withPrepositionIn:"око 1 годину"},dual:"око {{count}} године",other:"око {{count}} година"},xYears:{one:{standalone:"1 година",withPrepositionAgo:"1 године",withPrepositionIn:"1 годину"},dual:"{{count}} године",other:"{{count}} година"},overXYears:{one:{standalone:"преко 1 годину",withPrepositionAgo:"преко 1 годину",withPrepositionIn:"преко 1 годину"},dual:"преко {{count}} године",other:"преко {{count}} година"},almostXYears:{one:{standalone:"готово 1 годину",withPrepositionAgo:"готово 1 годину",withPrepositionIn:"готово 1 годину"},dual:"готово {{count}} године",other:"готово {{count}} година"}};function a(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}const i={date:a({formats:{full:"EEEE, d. MMMM yyyy.",long:"d. MMMM yyyy.",medium:"d. MMM yy.",short:"dd. MM. yy."},defaultWidth:"full"}),time:a({formats:{full:"HH:mm:ss (zzzz)",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} 'у' {{time}}",long:"{{date}} 'у' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};var o={lastWeek:function(t){switch(t.getUTCDay()){case 0:return"'прошле недеље у' p";case 3:return"'прошле среде у' p";case 6:return"'прошле суботе у' p";default:return"'прошли' EEEE 'у' p"}},yesterday:"'јуче у' p",today:"'данас у' p",tomorrow:"'сутра у' p",nextWeek:function(t){switch(t.getUTCDay()){case 0:return"'следеће недеље у' p";case 3:return"'следећу среду у' p";case 6:return"'следећу суботу у' p";default:return"'следећи' EEEE 'у' p"}},other:"P"};function r(t){return function(e,n){var a,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,r=i.width?String(i.width):o;a=t.formattingValues[r]||t.formattingValues[o]}else{var u=t.defaultWidth,d=i.width?String(i.width):t.defaultWidth;a=t.values[d]||t.values[u]}return a[t.argumentCallback?t.argumentCallback(e):e]}}const u={ordinalNumber:function(t){var e=Number(t);return String(e).concat(".")},era:r({values:{narrow:["пр.н.е.","АД"],abbreviated:["пр. Хр.","по. Хр."],wide:["Пре Христа","После Христа"]},defaultWidth:"wide"}),quarter:r({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. кв.","2. кв.","3. кв.","4. кв."],wide:["1. квартал","2. квартал","3. квартал","4. квартал"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:r({values:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],wide:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"]},defaultWidth:"wide",formattingValues:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],wide:["јануар","фебруар","март","април","мај","јун","јул","август","септембар","октобар","новембар","децембар"]},defaultFormattingWidth:"wide"}),day:r({values:{narrow:["Н","П","У","С","Ч","П","С"],short:["нед","пон","уто","сре","чет","пет","суб"],abbreviated:["нед","пон","уто","сре","чет","пет","суб"],wide:["недеља","понедељак","уторак","среда","четвртак","петак","субота"]},defaultWidth:"wide"}),dayPeriod:r({values:{narrow:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},abbreviated:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},wide:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"после подне",evening:"увече",night:"ноћу"}},defaultWidth:"wide",formattingValues:{narrow:{am:"АМ",pm:"ПМ",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},abbreviated:{am:"АМ",pm:"ПМ",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"поподне",evening:"увече",night:"ноћу"},wide:{am:"AM",pm:"PM",midnight:"поноћ",noon:"подне",morning:"ујутру",afternoon:"после подне",evening:"увече",night:"ноћу"}},defaultFormattingWidth:"wide"})};function d(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,i=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var r,u=o[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(d)?l(d,(function(t){return t.test(u)})):s(d,(function(t){return t.test(u)}));r=t.valueCallback?t.valueCallback(h):h,r=n.valueCallback?n.valueCallback(r):r;var c=e.slice(u.length);return{value:r,rest:c}}}function s(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function l(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var h,c={ordinalNumber:(h={matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(h.matchPattern);if(!n)return null;var a=n[0],i=t.match(h.parsePattern);if(!i)return null;var o=h.valueCallback?h.valueCallback(i[0]):i[0];o=e.valueCallback?e.valueCallback(o):o;var r=t.slice(a.length);return{value:o,rest:r}}),era:d({matchPatterns:{narrow:/^(пр\.н\.е\.|АД)/i,abbreviated:/^(пр\.\s?Хр\.|по\.\s?Хр\.)/i,wide:/^(Пре Христа|пре нове ере|После Христа|нова ера)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^пр/i,/^(по|нова)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?кв\.?/i,wide:/^[1234]\. квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:d({matchPatterns:{narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(јан|феб|мар|апр|мај|јун|јул|авг|сеп|окт|нов|дец)/i,wide:/^((јануар|јануара)|(фебруар|фебруара)|(март|марта)|(април|априла)|(мја|маја)|(јун|јуна)|(јул|јула)|(август|августа)|(септембар|септембра)|(октобар|октобра)|(новембар|новембра)|(децембар|децембра))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/(10|11|12|[123456789])/i],any:[/^ја/i,/^ф/i,/^мар/i,/^ап/i,/^мај/i,/^јун/i,/^јул/i,/^авг/i,/^с/i,/^о/i,/^н/i,/^д/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[пусчн]/i,short:/^(нед|пон|уто|сре|чет|пет|суб)/i,abbreviated:/^(нед|пон|уто|сре|чет|пет|суб)/i,wide:/^(недеља|понедељак|уторак|среда|четвртак|петак|субота)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^п/i,/^у/i,/^с/i,/^ч/i,/^н/i],any:[/^нед/i,/^пон/i,/^уто/i,/^сре/i,/^чет/i,/^пет/i,/^суб/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{any:/^(ам|пм|поноћ|(по)?подне|увече|ноћу|после подне|ујутру)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^поно/i,noon:/^под/i,morning:/ујутру/i,afternoon:/(после\s|по)+подне/i,evening:/(увече)/i,night:/(ноћу)/i}},defaultParseWidth:"any"})};const f={code:"sr",formatDistance:function(t,e,a){var i;return a=a||{},i="string"==typeof n[t]?n[t]:1===e?a.addSuffix?a.comparison>0?n[t].one.withPrepositionIn:n[t].one.withPrepositionAgo:n[t].one.standalone:e%10>1&&e%10<5&&"1"!==String(e).substr(-2,1)?n[t].dual.replace("{{count}}",e):n[t].other.replace("{{count}}",e),a.addSuffix?a.comparison>0?"за "+i:"пре "+i:i},formatLong:i,formatRelative:function(t,e,n,a){var i=o[t];return"function"==typeof i?i(e):i},localize:u,match:c,options:{weekStartsOn:1,firstWeekContainsDate:1}};return e})())}}}));