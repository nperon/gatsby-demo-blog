webpackJsonp([0x5cf54670e10f],{430:function(e,t){e.exports={pathContext:{posts:[{html:'<h3>OAuth 2.0 in Spring Security 5</h3>\n<p>The legacy <a href="https://github.com/spring-projects/spring-security-oauth">Spring Security OAuth Project</a> includes support for implementing all of the three roles involved in OAuth: Client, Resource Server and Authorization Server. However, that project is now deprecated and to be maintained only for a limited time\nuntil not later than may 2022. </p>\n<p>The new OAuth 2 project (<a href="https://github.com/spring-projects-experimental/spring-authorization-server">https://github.com/spring-projects-experimental/spring-authorization-server</a>)\nwhich is part of Spring Security 5 is already available but not fully developed as yet. A\nclient and a resource server are already available. However,\nthe <a href="https://github.com/spring-projects-experimental/spring-authorization-server">authorization server</a> project is not completed as of december 2020. </p>\n<h3>The two types of clients</h3>\n<p>Client applications can be split into two categories: </p>\n<ul>\n<li>confidential clients where the client secret is kept safe.</li>\n<li>public clients which cannot keep their client id and client secret safe. It is the case of\napplications which are browser based like pure front end javascript applications. It is also\nthe case of some native applications stored in smartphones. It is the case of any application\nwhose code can be viewed or decompiled.</li>\n</ul>\n<h2>The different grant types i.e. ways an application gets an access token</h2>\n<p>Authorization code and Client credentials are the most common grant types. Implicit flow and Password grant are two other grant types of Oauth 2 which are now deprecated. There are now two additional possible grant types which can be relevant in some types of applications: PKCE Enhanced authorization code and Device code. Note that PKCE stands for Proof Key for Code Exchange.</p>\n<p>Here are five different types of applications with their relevant grant types:</p>\n<ul>\n<li>Server Side Web Apps: <strong>Authorisation Code</strong> ; Password grant (deprecated).</li>\n<li>Server Side Script with no UI : <strong>Client Credentials</strong></li>\n<li>Javascript Single Page Application with no back end: <strong>PKCE Enhanced Authorization Code</strong>; Implicit Flow (deprecated) ; Password Grant (deprecated).</li>\n<li>Mobile native app : <strong>Authorization Code</strong>; <strong>PKCE Enhanced Authorization Code</strong> ; Implicit Flow (deprecated) ; Password Grant (deprecated).</li>\n<li>Device : <strong>Device Code</strong>.</li>\n</ul>\n<p>Finally, Refresh Token is an additional Grant Type where a refresh token is exchanged for an access token.</p>',id:"/home/nicolas/Documents/workshop/src/pages/2020-11-15-oauth2-in-spring-boot/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-11-15T17:23:14.538Z",path:"/oauth2-in-spring-boot",title:"Oauth 2.0 in Spring Boot",excerpt:"",tags:["web security","OAuth 2.0","Spring Boot","Spring Security","Spring 5"]}},{html:'<h3>Setting up Zookeeper &#x26; Kafka Broker</h3>\n<pre><code class="language-bash">cd kafka_2.13-2.6.0/bin\n</code></pre>\n<p>Setting Up Kafka: follow instructions from <a href="https://github.com/dilipsundarraj1/kafka-for-developers-using-spring-boot/blob/master/SetUpKafka.md">github</a>.</p>\n<pre><code class="language-bash"></code></pre>',id:"/home/nicolas/Documents/workshop/src/pages/2020-11-20-kafka/index.md absPath of file >>> MarkdownRemark",frontmatter:{date:"2020-11-20T11:12:18.123Z",path:"/kafka",title:"Kafka",excerpt:"",tags:["Kafka","Java","Spring Boot","Spring 5"]}}],tagName:"Spring 5"}}}});
//# sourceMappingURL=path---tags-spring-5-eb4ea435cf657815f86b.js.map