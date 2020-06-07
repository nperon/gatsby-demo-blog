webpackJsonp([0x9f0fe968e671],{356:function(e,t){e.exports={data:{markdownRemark:{html:'<h3>Create a container with a mongo database and connect to it</h3>\n<p>Start with displaying all currently running containers:</p>\n<pre><code class="language-bash">docker ps\n</code></pre>\n<p>Then create locally the container associated with the mongo docker image:</p>\n<pre><code class="language-bash">docker run -p 27017:27017 -d mongo\n</code></pre>\n<p>Executing another time <code>docker ps</code> results in information on the created container like the following being displayed:</p>\n<pre><code>CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES\n2c6a61aba41b        mongo               "docker-entrypoint.s…"   3 minutes ago       Up 3 minutes        0.0.0.0:27017->27017/tcp   clever_dubinsky\n</code></pre>\n<p>Connection to the database at url localhost:27017 can be opened using for instance the robo-3t nosql database editor.\nFinally, the container when not needed anymore can be stopped with:</p>\n<pre><code>docker stop 2c6a61aba41b\n</code></pre>\n<h3>Create a container with a PostgreSQL database with given the database name and the user credentials</h3>\n<p>Let us assume we need to connect to a database called course_data in a PostgreSQL SGBD with the following credentials: the user is postgres and the password is password. The command line to launch a docker container with such a database is:</p>\n<pre><code class="language-bash">docker run --name postgresdb -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=course_data -d -p 5432:5432 postgres\n</code></pre>\n<p>Terminal access to the database prompt is obtained by first accessing the container shell:</p>\n<pre><code class="language-bash">docker container exec -it postgresdb bash\n</code></pre>\n<p>Then the postgre prompt of user \'postgres\' may then be accessed with:</p>\n<pre><code class="language-bash">psql course_data postgres\n</code></pre>',frontmatter:{title:"Docker Recipes",date:"March 05, 2019",path:"/docker",tags:["docker","container","devops"],excerpt:"Some Docker Recipes"}}},pathContext:{prev:{html:'<h3>General documentation</h3>\n<h3>Bootstrap</h3>\n<p><a href="https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/">How to Add Bootstrap to an Angular CLI project</a></p>',id:"/home/nperon/Documents/workshop/src/pages/2019-03-05-styling/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2019-03-05T22:35:12.235Z",path:"/style",title:"Style",excerpt:"Documentation on style",tags:["style","css","bootstrap"]}},next:null}}}});
//# sourceMappingURL=path---docker-f1fe23a7fbe356cfb7dd.js.map