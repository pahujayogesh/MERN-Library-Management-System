<h1>MERN LIBRARY MANAGEMENT SYSEM</h1>
<hr><p>MERN LIBRARY MANAGEMENT SYSEM</p><h2>Technologies Used</h2>
<hr><ul>
<li>HTML</li>
</ul><ul>
<li>CSS</li>
</ul><ul>
<li>JavaScript</li>
</ul><ul>
<li>React</li>
</ul><ul>
<li>NodeJS</li>
</ul><ul>
<li>Express</li>
</ul><ul>
<li>MongoDB</li>
</ul><h2>Setup</h2>
<hr><p>notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other</p><h5>Steps</h5><ul>
<li>For Client</li>
</ul><ul>
<li>$ cd client          // go to client folder $ yarn # or npm i    // npm install packages $ npm run dev        // run it locally  // deployment for client app $ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level $ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site</li>
</ul><ul>
<li>For Server</li>
</ul><ul>
<li>run the script at the first level:  (You need to add a JWT_SECRET in .env to connect to MongoDB)  // in the root level $ cd server $ echo "JWT_SECRET=YOUR_JWT_SECRET" &gt;&gt; src/.env</li>
</ul><ul>
<li>$ cd server   // go to server folder $ npm i       // npm install packages $ npm run dev // run it locally $ npm run build // this will build the server code to es5 js codes and generate a dist file</li>
</ul>
