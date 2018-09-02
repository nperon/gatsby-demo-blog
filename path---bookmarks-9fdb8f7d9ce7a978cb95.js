webpackJsonp([44495949915592],{314:function(n,e){n.exports={data:{markdownRemark:{html:'<p><a href="https://www.codewars.com/dashboard">Codewars</a></p>\n<p><a href="https://gpcchs.slack.com/threads/">Slack</a></p>\n<p><a href="https://jestjs.io/docs/en/asynchronous.html">Jest asynchronous</a></p>\n<p><a href="https://willowtreeapps.com/ideas/best-practices-for-unit-testing-with-a-react-redux-approach">unit-testing-with-a-react-redux-approach</a></p>\n<p><a href="https://www.datchley.name/es6-promises/">ES6 Promises</a></p>\n<p><a href="https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9">ES6 Async/Await</a></p>\n<p><a href="https://javascript.info/regexp-introduction">regexp</a></p>\n<p><a href="https://lodash.com/">lodash</a></p>\n<p><a href="https://lodash.com/docs/4.17.10">lodash documentation</a></p>\n<p><a href="https://en.wikipedia.org/wiki/Lodash">lodash wiki</a></p>\n<p><a href="https://github.com/lodash/lodash/wiki/FP-Guide">lodash-fp documentation</a></p>\n<p><a href="https://blog.codeminer42.com/functional-programming-with-lodash-fp-8fe0619b3024">Functional programming with lodash-fp</a></p>\n<p><a href="https://github.com/toddmotto/public-apis/blob/master/README.md">Public REST APIs</a></p>\n<p><a href="https://github.com/angular/angular-cli">Angular CLI</a></p>',frontmatter:{title:"Bookmarks",date:"July 23, 2017",path:"/bookmarks",tags:["bookmarks","blog"],excerpt:"Some bookmarks"}}},pathContext:{prev:null,next:{html:'<pre><code class="language-javascript">const memoize = (fn) => {\n  let cache = {};\n  return (...args) => {\n    let n = args[0];\n    if (n in cache) {\n      return cache[n];\n    }\n    else {\n      let result = fn(n);\n      cache[n] = result;\n      return result;\n    }\n  }\n}\n</code></pre>\n<p>This memoize function can be\nused for instance in calculating Fibonacci\nseries as follows:</p>\n<pre><code class="language-javascript">const memoizeFib = memoize(fib);\n\nfunction fib(num) {\n  switch (num) {\n    case 0: {\n      return 0;\n    }\n    case 1: {\n      return 1;\n    }\n    default: {\n      return memoizeFib(num-2)+memoizeFib(num-1); \n    }\n  }\n}\n</code></pre>\n<p>In the following slightly different version of memoize,\narguments of the function, which operate as the cache keys,\nare stringified: </p>\n<pre><code class="language-javascript">const memoize = (fn) => {\n  let cache = {};\n  return (...args) => {\n    let stringifiedArgs = JSON.stringify(args);\n    let result = cache[stringifiedArgs] = cache[stringifiedArgs] || fn(...args);\n    return result;\n  }\n}\n</code></pre>',id:"/home/nperon/Documents/blog/src/pages/2018-07-21-memoizing-a-function/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2018-07-21T18:49:39.175Z",path:"/memoization",title:"Memoizing a function in es6",excerpt:"Function memoization implemented in a short snippet with some convenient functional programming features of javascript",tags:["javascript","es6","functional programming","memoization"]}}}}}});
//# sourceMappingURL=path---bookmarks-9fdb8f7d9ce7a978cb95.js.map