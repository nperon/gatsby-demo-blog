webpackJsonp([0xfaf43bcfa5ed],{402:function(e,n){e.exports={data:{markdownRemark:{html:'<h3>Installing Jhipster</h3>\n<pre><code>npm install -g generator-jhipster\n</code></pre>\n<pre><code>jhipster --version\n</code></pre>\n<h3>Generating an app</h3>\n<pre><code>mkdir myPOC &#x26;&#x26; cd myPOC\n</code></pre>\n<pre><code>jhipster\n</code></pre>\n<pre><code>code .\n</code></pre>\n<pre><code>npm install\n</code></pre>\n<p>Hints on available spring boot options can be displayed with:</p>\n<pre><code>mvn spring-boot:help\n</code></pre>\n<p>The application can be started with the dev profile with: </p>\n<pre><code>mvn spring-boot:build-info\n</code></pre>\n<p>followed with:</p>\n<pre><code>mvn spring-boot:run\n</code></pre>\n<p>As an alternative to all of the mvn spring-boot commands above, the user may just run the mvnw available in the application root:</p>\n<pre><code>./mvnw\n</code></pre>\n<pre><code>npm start\n</code></pre>\n<p>To generate entities according to the application requirements, open a text editor like gedit and code a jdl language snipet with a <code>.jh</code> extension describing the different entities and their relationships:</p>\n<pre><code>gedit src/main/resources/entities.jh &#x26;\n</code></pre>\n<p>Sample jh files with entities are available for instance in the <a href="https://github.com/jhipster/jdl-samples">jdl-samples jhipster project on github</a>. Skip the <code>application { ... }</code> statement in your snippet as your application options are already set and you only want to describe your entities at this stage. Once your <code>entities.jh</code> file is ready, go ahead and generate the entities with:</p>\n<pre><code>jhipster import-jdl src/main/resources/entities.jh\n</code></pre>\n<p>To package the application as a “production” JAR in the target directory, type:</p>\n<pre><code>./mvnw -Pprod clean verify\n</code></pre>\n<h3>Leveraging docker according to the selected Jhipster options</h3>\n<p>A number of possible options in using Jhipster are described in the README.md file of the project folder.</p>\n<p>In case the JHipster Registry option was selected, the registry app can be run from the Docker image available in the application src/main/docker directory with: </p>\n<pre><code>docker-compose -f src/main/docker/jhipster-registry.yml up\n</code></pre>\n<p>If you chose OAuth 2.0 as your authentication, Keycloak is used as the default identity provider. Running </p>\n<pre><code>docker-compose -f src/main/docker/keycloak.yml up\n</code></pre>\n<p>starts up Keycloak automatically. A number of other docker-compose scripts can be availabla in the <code>src/main/docker/</code> directory, depending on the options set initially while generating the app. For instance it could well be that a <code>mysql.yml</code> docker-compose script is available to run a container with a mysql database required in dev mode. All of these docker-compose scripts can be run following the same <code>docker-compose</code> command pattern as stated above.</p>\n<h3>Jhipster Marketplace modules of interest</h3>\n<p>Kafka</p>\n<p>Stripe Payment </p>\n<p>Paypal</p>\n<p>Blockchain</p>\n<h3>Links</h3>\n<p><a href="https://www.jhipster.tech/">JHipster Homepage</a></p>\n<p><a href="https://start.jhipster.tech/jdl-studio/">JDL Studio</a></p>\n<p><a href="https://github.com/jhipster">JHipster github page</a></p>',frontmatter:{title:"Generate and deploy a Java app on the cloud with Jhipster",date:"July 05, 2020",path:"/jhipster",tags:["jhipster","aws"],excerpt:""}}},pathContext:{prev:{html:'<h3>Create a container with a mongo database and connect to it</h3>\n<p>Start with displaying all currently running containers:</p>\n<pre><code class="language-bash">docker ps\n</code></pre>\n<p>Then create locally the container associated with the mongo docker image:</p>\n<pre><code class="language-bash">docker run -p 27017:27017 -d mongo\n</code></pre>\n<p>Executing another time <code>docker ps</code> results in information on the created container like the following being displayed:</p>\n<pre><code>CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                      NAMES\n2c6a61aba41b        mongo               "docker-entrypoint.s…"   3 minutes ago       Up 3 minutes        0.0.0.0:27017->27017/tcp   clever_dubinsky\n</code></pre>\n<p>Connection to the database at url localhost:27017 can be opened using for instance the robo-3t nosql database editor.\nFinally, the container when not needed anymore can be stopped with:</p>\n<pre><code>docker stop 2c6a61aba41b\n</code></pre>\n<h3>Create a container with a PostgreSQL database given the database name and the user credentials</h3>\n<p>Let us assume we need to connect to a database called course_data in a PostgreSQL SGBD with the following credentials: the user is postgres and the password is password. The command line to launch a docker container with such a database is:</p>\n<pre><code class="language-bash">docker run --name postgresdb -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=course_data -d -p 5432:5432 postgres\n</code></pre>\n<p>Terminal access to the database prompt is obtained by first accessing the container shell:</p>\n<pre><code class="language-bash">docker container exec -it postgresdb bash\n</code></pre>\n<p>The postgre prompt of user \'postgres\' may then be accessed with:</p>\n<pre><code class="language-bash">psql course_data postgres\n</code></pre>',id:"/home/nicolas/projects/workshop/src/pages/2020-03-31-docker-recipes/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-03-31T16:09:12.235Z",path:"/docker",title:"Docker Recipes",excerpt:"Some Docker Recipes",tags:["docker","container","devops"]}},next:{html:'<h3>Starting</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/_cat/indices\n</code></pre>\n<pre><code class="language-bash">curl -XDELETE 127.0.0.1:9200/movies\n</code></pre>\n<h3>Create an index called movies with a mapping</h3>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/movies -d \'\n{\n    "mappings": {\n        "properties": {\n            "year": {\n                "type": "date"\n            }\n        }\n    }\n}\'\n</code></pre>\n<h3>Import a document into our movies index</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_mapping\n</code></pre>\n<h3>Post a new document into our movies index</h3>\n<pre><code class="language-bash">curl -XPOST 127.0.0.1:9200/movies/_doc/109487 -d \'\n{\n    "genre" : ["IMAX", "Sci-Fi"],\n    "title": "Interstellar",\n    "year": 2014\n}\'\n</code></pre>\n<h3>Perform search</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty\n</code></pre>\n<h3>Insert a bunch of movies</h3>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/_bulk -d \'\n{ "create" : { "_index" : "movies", "_id" : "135569" } }\n{ "id": "135569", "title" : "Star Trek Beyond", "year":2016 , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "movies", "_id" : "122886" } }\n{ "id": "122886", "title" : "Star Wars: Episode VII - The Force Awakens", "year":2015 , "genre":["Action", "Adventure", "Fantasy", "Sci-Fi", "IMAX"] }\n{ "create" : { "_index" : "movies", "_id" : "109487" } }\n{ "id": "109487", "title" : "Interstellar", "year":2014 , "genre":["Sci-Fi", "IMAX"] }\n{ "create" : { "_index" : "movies", "_id" : "58559" } }\n{ "id": "58559", "title" : "Dark Knight, The", "year":2008 , "genre":["Action", "Crime", "Drama", "IMAX"] }\n{ "create" : { "_index" : "movies", "_id" : "1924" } }\n{ "id": "1924", "title" : "Plan 9 from Outer Space", "year":1959 , "genre":["Horror", "Sci-Fi"] }\n\'\n</code></pre>\n<h3>Updating data</h3>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/movies/_doc/109487/?pretty -d \'\n{\n    "genres": ["IMAX", "Sci-Fi"],\n    "title": "interstellar foo",\n    "year": 2014\n}\n\'\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_doc/109487?pretty\n</code></pre>\n<pre><code class="language-bash">curl -XPOST 127.0.0.1:9200/movies/_doc/109487/_update -d \'\n{\n    "doc": {\n        "title": "Interstellar"\n    }\n}\n\'\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_doc/109487?pretty\n</code></pre>\n<h3>Deleting documents</h3>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?q=Dark\n</code></pre>\n<pre><code class="language-bash">curl -XDELETE 127.0.0.1:9200/movies/_doc/58559?pretty\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?q=Dark\n</code></pre>\n<h3>Using analyzers and tokenizers for controlling full-text search</h3>\n<p>Sometimes text fields should be exact-match. In that case use keyword mapping instead of text.</p>\n<p>Search on analyzed text fields will return anything remotely relevant. Depending on the analyzer, results will be case-insensitive, stemmed, stopwords removed, synonyms applied, etc. Searches with multiple terms need not match them all.</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match": {\n            "title": "Star Trek"\n        }\n    }   \n}\n\'\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match_phrase": {\n            "genre": "sci"\n        }\n    }   \n}\n\'\n</code></pre>\n<p>Blow away the entire index and redefine it. </p>\n<pre><code class="language-bash">curl -XDELETE 127.0.0.1:9200/movies\n</code></pre>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/movies -d \'\n{\n    "mappings": {\n        "properties": {\n            "id": {"type": "integer"},\n            "year": {"type": "date"},\n            "genre": {"type": "keyword"},\n            "title": {"type": "text", "analyzer": "english"}\n        }\n    }\n}\'\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_mapping\n</code></pre>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/movies/_search?pretty -d \'\n{\n    "query": {\n        "match_phrase": {\n            "genre": "Sci-Fi"\n        }\n    }   \n}\n\'\n</code></pre>\n<h3>Defining a mapping with a parent/child relationship in Elastic Search</h3>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/series -d \'\n{\n    "mappings": {\n        "properties": {\n            "film_to_franchise": {\n                "type": "join",\n                "relations": {"franchise": "film"}\n            }       \n        }\n    }\n}\'\n</code></pre>\n<pre><code class="language-bash">curl -XPUT 127.0.0.1:9200/_bulk?pretty --data-binary @series.json\n</code></pre>\n<p>Here content in a file called series.json like the following is involved:</p>\n<pre><code class="language-json">{ "create" : { "_index" : "series", "_id" : "1", "routing" : 1} }\n{ "id": "1", "film_to_franchise": {"name": "franchise"}, "title" : "Star Wars" }\n{ "create" : { "_index" : "series", "_id" : "260", "routing" : 1} }\n{ "id": "260", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode IV - A New Hope", "year":"1977" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series", "_id" : "1196", "routing" : 1} }\n{ "id": "1196", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode V - The Empire Strikes Back", "year":"1980" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series", "_id" : "1210", "routing" : 1} }\n{ "id": "1210", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode VI - Return of the Jedi", "year":"1983" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series", "_id" : "2628", "routing" : 1} }\n{ "id": "2628", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode I - The Phantom Menace", "year":"1999" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series",  "_id" : "5378", "routing" : 1} }\n{ "id": "5378", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode II - Attack of the Clones", "year":"2002" , "genre":["Action", "Adventure", "Sci-Fi", "IMAX"] }\n{ "create" : { "_index" : "series", "_id" : "33493", "routing" : 1} }\n{ "id": "33493", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode III - Revenge of the Sith", "year":"2005" , "genre":["Action", "Adventure", "Sci-Fi"] }\n{ "create" : { "_index" : "series", "_id" : "122886", "routing" : 1} }\n{ "id": "122886", "film_to_franchise": {"name": "film", "parent": "1"}, "title" : "Star Wars: Episode VII - The Force Awakens", "year":"2015" , "genre":["Action", "Adventure", "Fantasy", "Sci-Fi", "IMAX"] }\n</code></pre>\n<p>The following query will search for all films in the Star Wars franchise:</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/series/_search?pretty -d \'{\n    "query": {\n        "has_parent": {\n            "parent_type": "franchise",\n            "query": {\n                "match": {\n                    "title": "Star Wars"\n                }\n            }\n        }\n    }\n}\'\n</code></pre>\n<p>Here now is how to get a parent given the child:</p>\n<pre><code class="language-bash">curl -XGET 127.0.0.1:9200/series/_search?pretty -d \'{\n    "query": {\n        "has_child": {\n            "type": "film",\n            "query": {\n                "match": {\n                    "title": "The Force Awakens"\n                }\n            }\n        }\n    }\n}\'\n</code></pre>\n<h3>Flattened Datatype</h3>\n<p>Commands are given are url <a href="https://media.sundog-soft.com/es/flattened.txt">https://media.sundog-soft.com/es/flattened.txt</a>.</p>',id:"/home/nicolas/projects/workshop/src/pages/2020-08-28-ELK-1/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-08-28T00:39:17.235Z",path:"/elk-mapping",title:"Mapping and Indexing Data into Elastic Search",excerpt:"",tags:["Elastic Search","Logstash","mapping","indexing"]}}}}}});
//# sourceMappingURL=path---jhipster-7398d1733b916abc4011.js.map