webpackJsonp([0xc8cb325fe03d],{393:function(e,n){e.exports={pathContext:{posts:[{html:'<h3>vi</h3>\n<p>Vi command for eliminating all occurences of colon ":" is the following:</p>\n<pre><code>:1,$s/:/ /g\n</code></pre>\n<p>Here is the vi command for replacing all occurences of "alod" with "new":</p>\n<pre><code>:1,$s/old/new/g\n</code></pre>\n<p>Vi command for searching string "xyz":</p>\n<pre><code>/xyz\n</code></pre>\n<h3>find</h3>\n<p>File search:</p>\n<pre><code>find ./fvsa/ -name "pvsve*"\n</code></pre>\n<h3>Memory usage with watch</h3>\n<pre><code>watch -n 5 free -m\n</code></pre>\n<h3>Modify filenames with rename</h3>\n<p>Delete 4 first characters in all file names in dir:</p>\n<pre><code>rename \'s/.{4}(.*)/$1/\' *\n</code></pre>\n<p>Delete 5 last characters in all file names in dir:</p>\n<pre><code>rename \'s/(.*).{5}/$1/\' *\n</code></pre>\n<h3>wc</h3>\n<p>Display total number of files in \'folder\':</p>\n<pre><code>ls folder | wc -l\n</code></pre>\n<h3>Disk usage</h3>\n<pre><code>sudo ncdu -rx /\n</code></pre>\n<pre><code>sudo du -shc /*\n</code></pre>\n<h3>Managing JDKs on Debian</h3>\n<pre><code>update-java-alternatives -l\n</code></pre>\n<pre><code>sudo update-java-alternatives -s java-1.8.0-openjdk-amd64\n</code></pre>\n<p>Or in a more interactive way:</p>\n<pre><code>update-alternatives --config java\n</code></pre>\n<h3>Managing screens</h3>\n<pre><code>xrandr\n</code></pre>\n<pre><code>xrandr --addmode HDMI-1 2560x1080\n</code></pre>',id:"/home/nperon/Documents/workshop/src/pages/2020-10-11-linux-utils/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-10-11T22:47:32.235Z",path:"/linux-utils",title:"Linux Utils",excerpt:"",tags:["Linux","utils","bash","vi","find","grep","rename"]}}],tagName:"find"}}}});
//# sourceMappingURL=path---tags-find-34cbf77d523c5070bc32.js.map