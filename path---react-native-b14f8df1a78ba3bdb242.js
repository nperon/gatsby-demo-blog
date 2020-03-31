webpackJsonp([0xf6125fe57ed9],{361:function(e,t){e.exports={data:{markdownRemark:{html:'<h3>General documentation</h3>\n<p><a href="https://facebook.github.io/react-native/docs/getting-started.html">Quickly get started (with create-react-native-app)</a></p>\n<p><a href="https://facebook.github.io/react-native/docs/tutorial.html">Keep the official docs in mind</a></p>\n<p><a href="https://github.com/react-community/create-react-native-app">The create-react-native-app Github repo</a></p>\n<h3>Styling</h3>\n<p><a href="https://github.com/vhpoet/react-native-styling-cheat-sheet">On react native supported style properties</a></p>\n<p><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">On flexbox in general (not specifically in React Native)</a></p>\n<p><a href="https://facebook.github.io/react-native/docs/images.html">More about images</a></p>\n<h3>Navigation</h3>\n<p><a href="https://github.com/wix/react-native-navigation">React Native Navigation</a></p>',frontmatter:{title:"React Native",date:"January 01, 2019",path:"/react-native",tags:["react native","mobile app"],excerpt:"Documentation on React Native"}}},pathContext:{prev:{html:'<h3>Communities</h3>\n<p><a href="https://www.codewars.com/users/nperon">codewars</a></p>\n<p><a href="https://stackoverflow.com/users/10363360">stackoverflow</a></p>\n<p><a href="https://github.com/nperon">github</a></p>\n<h3>Trainings / Online courses completed</h3>\n<p><a href="http://ude.my/UC-LTEODNLK"> via @udemy: Ionic 4 Crash Course</a></p>',id:"/Users/nperon/Documents/workshop/src/pages/2019-01-01-cv/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2019-01-01T22:09:20.235Z",path:"/cv",title:"Nicolas's CV",excerpt:"My CV",tags:["cv","work"]}},next:{html:'<pre><code class="language-javascript">const memoize = (fn) => {\n  let cache = {};\n  return (...args) => {\n    let n = args[0];\n    if (n in cache) {\n      return cache[n];\n    }\n    else {\n      let result = fn(n);\n      cache[n] = result;\n      return result;\n    }\n  }\n}\n</code></pre>\n<p>This memoize function can be\nused for instance in calculating Fibonacci\nseries as follows:</p>\n<pre><code class="language-javascript">const memoizeFib = memoize(fib);\n\nfunction fib(num) {\n  switch (num) {\n    case 0: {\n      return 0;\n    }\n    case 1: {\n      return 1;\n    }\n    default: {\n      return memoizeFib(num-2)+memoizeFib(num-1); \n    }\n  }\n}\n</code></pre>\n<p>In the following slightly different version of memoize,\narguments of the function, which operate as the cache keys,\nare stringified: </p>\n<pre><code class="language-javascript">const memoize = (fn) => {\n  let cache = {};\n  return (...args) => {\n    let stringifiedArgs = JSON.stringify(args);\n    let result = cache[stringifiedArgs] = cache[stringifiedArgs] || fn(...args);\n    return result;\n  }\n}\n</code></pre>',id:"/Users/nperon/Documents/workshop/src/pages/2018-07-21-memoizing-a-function/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2018-07-21T18:49:39.175Z",path:"/memoization",title:"Memoizing a function in es6",excerpt:"Function memoization implemented in a short snippet with some convenient functional programming features of javascript",tags:["javascript","es6","functional programming","memoization"]}}}}}});
//# sourceMappingURL=path---react-native-b14f8df1a78ba3bdb242.js.map