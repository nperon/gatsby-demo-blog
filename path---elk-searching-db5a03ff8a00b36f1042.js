webpackJsonp([0xdbb63dce17c8],{378:function(e,a){e.exports={data:{markdownRemark:{html:'<h3>Query Lite alias URI Search</h3>\n<pre><code class="language-bash">curl -XGET "127.0.0.1:9200/movies/_search?q=title:star&#x26;pretty"\n</code></pre>\n<pre><code class="language-bash">curl -XGET "127.0.0.1:9200/movies/_search?q=+year>2010+title:trek&#x26;pretty"\n</code></pre>\n<h3>JSON Search</h3>\n<p>Some types of filters</p>\n<p>Term: filter by exact values\n{"term": {"year": 2014}}</p>\n<p>Terms: match if any exact values in a list match\n{"terms": {"genre": ["Sci-Fi", "Adventure"] } }</p>\n<p>Range: find numbers or dates in a given range (gt, gte, lt, lte)\n{"range": {"year": {"gte": 2010}}}</p>\n<p>Exists: find documents where a field exists\n{"exists": {"field": "tags"}}</p>\n<p>Missing: find documents where a field is missing\n{"missing": {"field": "tags"}}</p>\n<p>Bool: combine filters with boolean logic (must, must_not, should)</p>\n<p>Some types of Queries</p>\n<p>Match<em>all: returns all documents and is the default. Normally used with a filter.\n{"match</em>all": {}}</p>\n<p>Match: searches analyzed results, such as full text search.\n{"match": {"title": "star"}}</p>\n<p>Multi-match: run the same query on multiple fields.\n{"multi-match": {"query":"star", "fields": ["title", "synopsis"]}}</p>\n<p>Bool: works like a bool filter, but results are scored by relevance.</p>\n<p>Syntax:\nQueries are wrapped in a "query": { } block.\nFilters are wrapped in a "filter": { } block.</p>\n<p>You can combine filters inside queries, or queries inside filters too:</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d\'\n{\n    "query": {\n        "bool": {\n            "must": {"term": {"title": "trek"}},\n            "filter": {"range": {"year": {"gte": 2010}}}\n        }\n    }\n}\'\n</code></pre>\n<p>Example of a match query: </p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d\'\n{\n    "query": {\n        "match": {\n            "title": "star"\n        }\n    }\n}\'\n</code></pre>\n<p>Example of a bool query: </p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d\'\n{\n    "query": {\n        "bool": {\n            "must": {"term": {"title": "trek"}},\n            "filter": {"range": {"year": {"gte": 2010}}}\n        }\n    }\n}\'\n</code></pre>\n<p>Another example:</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d\'\n{\n    "query": {\n        "bool": {\n            "must": {"match_phrase": {"title": "Star Wars"}},\n            "filter": {"range": {"year": {"gte": 1980}}}\n        }\n    }\n}\'\n</code></pre>\n<h3>Phrase matching</h3>\n<p>Must find all terms, in the right order: </p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match_phrase": {\n            "title": "star wars"\n        }\n    }\n}\'\n</code></pre>\n<p>Assume order matters, but you\'re OK with some words being in between the terms. In that case use slop:</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match_phrase": {\n            "title": {"query": "star beyond", "slop": 1}\n        }\n    }\n}\'\n</code></pre>\n<p>The slop represents how far you\'re willing to let a term move to satisfy a phrase (in either direction!).</p>\n<h3>Pagination</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "from": 2,\n    "size": 2,\n    "query": {"match": {"genre": "Sci-Fi"}}\n}\'\n</code></pre>\n<h3>Sorting</h3>\n<h3>More with filters</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "bool": {\n            "must": {"match": {"genre": "Sci-Fi"}},\n            "must_not": {"match": {"title": "trek"}},\n            "filter": {"range": {"year": {"gte": 2010, "lt": 2015}}}\n        }\n    }\n}\'\n</code></pre>\n<h3>Fuzzy queries</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "fuzzy": {\n            "title": {"value": "intersteller", "fuzziness": 1}\n        }\n    }\n}\'\n</code></pre>\n<h3>Partial matching</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "prefix": {\n            "year": "201"\n        }\n    }\n}\'\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "wildcard": {\n            "year": "1*"\n        }\n    }\n}\'\n</code></pre>\n<pre><code class="language-bash">curl -XDELETE 127.0.0.1:9200/movies\n\ncurl -XPUT 127.0.0.1:9200/movies -d \'\n{\n    "mappings": {\n        "properties": {\n            "year": {\n                "type": "text"\n            }\n        }\n    }\n}\'\n\ncurl -XPUT 127.0.0.1:9200/_bulk --data-binary @movies.json\n</code></pre>\n<h3>Search as you type</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match_phrase_prefix": {\n            "title": {\n                "query": "star tr",\n                "slop": 10\n            }\n        }\n    }\n}\'\n</code></pre>',frontmatter:{title:"Searching with Elasticsearch",date:"August 29, 2020",path:"/elk-searching",tags:["Elastic Search","searching"],excerpt:""}}},pathContext:{prev:{html:'<p><a href="https://www.codewars.com/dashboard">Codewars</a></p>\n<p><a href="https://gpcchs.slack.com/threads/">Slack</a></p>\n<p><a href="https://jestjs.io/docs/en/asynchronous.html">Jest asynchronous</a></p>\n<p><a href="https://willowtreeapps.com/ideas/best-practices-for-unit-testing-with-a-react-redux-approach">unit-testing-with-a-react-redux-approach</a></p>\n<p><a href="https://www.datchley.name/es6-promises/">ES6 Promises</a></p>\n<p><a href="https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9">ES6 Async/Await</a></p>\n<p><a href="https://javascript.info/regexp-introduction">regexp</a></p>\n<p><a href="https://lodash.com/">lodash</a></p>\n<p><a href="https://lodash.com/docs/4.17.10">lodash documentation</a></p>\n<p><a href="https://en.wikipedia.org/wiki/Lodash">lodash wiki</a></p>\n<p><a href="https://github.com/lodash/lodash/wiki/FP-Guide">lodash-fp documentation</a></p>\n<p><a href="https://blog.codeminer42.com/functional-programming-with-lodash-fp-8fe0619b3024">Functional programming with lodash-fp</a></p>\n<p><a href="https://github.com/toddmotto/public-apis/blob/master/README.md">Public REST APIs</a></p>\n<p><a href="https://github.com/angular/angular-cli">Angular CLI</a></p>\n<p><a href="https://d3js.org/">d3</a></p>\n<p><a href="https://www.smashingmagazine.com/2018/02/react-d3-ecosystem">Bringing Together React, D3, And Their Ecosystem</a></p>\n<p><a href="https://medium.com/front-end-hacking/if-and-when-to-use-d3-js-with-react-639a651c6257">if-and-when-to-use-d3-js-with-react</a></p>\n<p><a href="https://hackernoon.com/how-and-why-to-use-d3-with-react-d239eb1ea274">How (and why) to use D3 with React</a></p>\n<p><a href="https://github.com/larkintuckerllc/hello-d3/tree/master/react-d3-introduction">react-d3-introduction</a></p>\n<p><a href="https://github.com/alanbuchanan/redux-form-course">Redux Form Course</a></p>',id:"/home/nicolas/Documents/workshop/src/pages/2018-07-23-bookmarks/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2018-07-23T21:34:19.235Z",path:"/bookmarks",title:"Bookmarks",excerpt:"Some bookmarks",tags:["bookmarks"]}},next:{html:'<h3>vi</h3>\n<p>Vi command for eliminating all occurences of colon ":" is the following:</p>\n<pre><code>:1,$s/://g\n</code></pre>\n<p>Here is the vi command for replacing all occurences of "old" with "new":</p>\n<pre><code>:1,$s/old/new/g\n</code></pre>\n<p>Vi command for searching string "xyz":</p>\n<pre><code>/xyz\n</code></pre>\n<h3>find</h3>\n<p>File search:</p>\n<pre><code class="language-bash">find ./fvsa/ -name "pvsve*"\n</code></pre>\n<h3>Memory usage with watch</h3>\n<pre><code class="language-bash">watch -n 5 free -m\n</code></pre>\n<h3>Modify filenames with rename</h3>\n<p>Delete 4 first characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/.{4}(.*)/$1/\' *\n</code></pre>\n<p>Delete 5 last characters in all file names in dir:</p>\n<pre><code class="language-bash">rename \'s/(.*).{5}/$1/\' *\n</code></pre>\n<h3>wc</h3>\n<p>Display total number of files in \'folder\':</p>\n<pre><code class="language-bash">ls folder | wc -l\n</code></pre>\n<h3>Disk usage</h3>\n<pre><code class="language-bash">sudo ncdu -rx /\n</code></pre>\n<pre><code class="language-bash">sudo du -shc /*\n</code></pre>\n<p>Displaying size occupied by Documents directory:</p>\n<pre><code class="language-bash">cd ~\nsudo du -sh Documents\n</code></pre>\n<h3>Managing JDKs on Debian</h3>\n<pre><code class="language-bash">update-java-alternatives -l\n</code></pre>\n<pre><code class="language-bash">sudo update-java-alternatives -s java-1.8.0-openjdk-amd64\n</code></pre>\n<p>Or in a more interactive way:</p>\n<pre><code class="language-bash">update-alternatives --config java\n</code></pre>\n<h3>Managing screens</h3>\n<pre><code class="language-bash">xrandr\n</code></pre>\n<pre><code class="language-bash">xrandr --addmode HDMI-1 2560x1080\n</code></pre>',id:"/home/nicolas/Documents/workshop/src/pages/2020-10-11-linux-utils/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-10-11T22:47:32.235Z",path:"/linux-utils",title:"Linux Utils",excerpt:"",tags:["Linux","utils","bash","vi","find","grep","rename"]}}}}}});
//# sourceMappingURL=path---elk-searching-db5a03ff8a00b36f1042.js.map