"use strict";(self.webpackChunkdocusaurus_bertcatsburg=self.webpackChunkdocusaurus_bertcatsburg||[]).push([[645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1257:(e,t,n)=>{n.d(t,{r:()=>o,I:()=>a});var r=n(7294);const o=e=>r.createElement("a",{href:e.to,target:"_blank"},e.children),i=[{description:"smiling face with open mouth",value:"\ud83d\ude03"},{description:"winking face",value:"\ud83d\ude09"},{description:"face with stuck-out tongue and winking eye",value:"\ud83d\ude1c"},{description:"astonished face",value:"\ud83d\ude32"},{description:"white heavy check mark",value:"\u2705"}],a=e=>{const t=i.find((t=>t.description===e.description));return t?t.value:null}},5489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905)),i=n(1257);const a={sidebar_position:2},l="Setting up Nginx",s={unversionedId:"nginx-in-docker/setting-up-the-project",id:"nginx-in-docker/setting-up-the-project",title:"Setting up Nginx",description:"The complete deployment is a project in itself.",source:"@site/docs/nginx-in-docker/02-setting-up-the-project.mdx",sourceDirName:"nginx-in-docker",slug:"/nginx-in-docker/setting-up-the-project",permalink:"/docs/nginx-in-docker/setting-up-the-project",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/nginx-in-docker/intro"},next:{title:"Running Nginx in Docker",permalink:"/docs/nginx-in-docker/first-run"}},c={},d=[{value:"Docker Network",id:"docker-network",level:2},{value:"create_network.sh",id:"create_networksh",level:2},{value:"Setting up the ProxyServer (Nginx)",id:"setting-up-the-proxyserver-nginx",level:2},{value:"ProxyServer - docker-compose file",id:"proxyserver---docker-compose-file",level:2},{value:"Ports",id:"ports",level:3},{value:"Network",id:"network",level:3},{value:"Volumes",id:"volumes",level:3},{value:"Specify the external network",id:"specify-the-external-network",level:3},{value:"Full docker-compose.yml file",id:"full-docker-composeyml-file",level:3},{value:"Creating the Nginx directories and files",id:"creating-the-nginx-directories-and-files",level:2},{value:"nginx.conf, located in deployment/etc/nginx/conf",id:"nginxconf-located-in-deploymentetcnginxconf",level:3},{value:"A default.conf file for the catch-all website",id:"a-defaultconf-file-for-the-catch-all-website",level:3},{value:"Create the Catch-All Website",id:"create-the-catch-all-website",level:3},{value:"Directory and file structure",id:"directory-and-file-structure",level:3}],p={toc:d},h="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-nginx"},"Setting up Nginx"),(0,o.kt)("p",null,"The complete deployment is a project in itself.\nThe good thing then is that you can put it on GitHub and share/version-control it with colleagues.\nWe do have to watch out for Secrets and put them somewhere else though."),(0,o.kt)("p",null,"Create a folder/directory (although this article is written on OSX, I'll stick to 'directory')\nsomewhere on your dev machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir deployProject\ncd deployProject\n")),(0,o.kt)("p",null,"In there all the Services and the Proxyserver each have\ntheir own directory."),(0,o.kt)("h2",{id:"docker-network"},"Docker Network"),(0,o.kt)("p",null,"If you use only 1 docker-compose.yml file with all services in it,\nthen networking is done for you by docker.\nThe different services can be accessed by their service name (the service-name in docker-compose)."),(0,o.kt)("p",null,"But, since in our setup each service gets its own docker-compose.yml file,\nwe need to use an ",(0,o.kt)(i.r,{to:"https://docs.docker.com/compose/compose-file/06-networks/#external",mdxType:"Link"},"external Docker Network")," and use IP addresses\nto let the services talk to each other."),(0,o.kt)("p",null,"An external docker network is a network created outside some\ndocker-compose file. In the compose file you 'attach' to that\nnetwork. It should already be created before\nrunning the first docker-compose file."),(0,o.kt)("h2",{id:"create_networksh"},"create_network.sh"),(0,o.kt)("p",null,"Create a 'create_network.sh' file with the following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"create_network.sh","create_network.sh":!0},"#! /bin/bash\n\ndocker network create \\\n  --driver=bridge \\\n  --subnet=172.30.0.0/16 \\\n  --ip-range=172.30.0.0/16 \\\n  --gateway=172.30.0.1 my-net\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"driver=bridge, ",(0,o.kt)(i.r,{to:"https://docs.docker.com/network/bridge/",mdxType:"Link"},"Allows containers connected to the same bridge network to communicate"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"subnet=127.30.0.0/16,"),(0,o.kt)("p",{parentName:"li"},"This defines the network itself. In this case from 127.30.0.0 to 127.30.255.255.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ip-range=172.30.0.0/16, Containers can use IP addresses within this range")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"gateway=172.30.0.1, The gateway to this network is this address. Meaning: Everything goes via this address."))),(0,o.kt)("p",null,"Set the correct permissions on the 'create_network.sh' file and run it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ chmod +x create_network.sh\n$ ./create_network.sh\n1f5f0af217c5642fe146a2f4f31ee26bbd267cd77206e50f79a2cc7c4d33fbd2\n\n$ docker network ls\nNETWORK ID     NAME                 DRIVER    SCOPE\n05edd37872ae   bridge               bridge    local\n34ec89b76309   deployment_default   bridge    local\nc3d54e8a6716   host                 host      local\n646c86930e37   my-net               bridge    local\n98e8b6a26fcc   none                 null      local\n")),(0,o.kt)("h2",{id:"setting-up-the-proxyserver-nginx"},"Setting up the ProxyServer (Nginx)"),(0,o.kt)("p",null,"Let's start off easy with a bare nginx proxyserver\nand a very simple website."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd deployProject\nmkdir proxyserver\ncd proxyserver\n")),(0,o.kt)("h2",{id:"proxyserver---docker-compose-file"},"ProxyServer - docker-compose file"),(0,o.kt)("p",null,"In the proxyserver directory create a file called 'docker-compose.yml'."),(0,o.kt)("p",null,"Below the file is in parts with explanation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.9'\n\nservices:\n\n  proxyserver:\n    image: nginx:1.21.4\n    container_name: proxyserver\n    working_dir: /usr/share/nginx/html\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker-Service is called 'proxyserver', but is not used anywhere else."),(0,o.kt)("li",{parentName:"ul"},"For the image we take one of the latest (at the time of this writing) versions of the nginx image"),(0,o.kt)("li",{parentName:"ul"},"Always good to specify a container_name, that looks better in your list of containers. In this case we are building the 'proxyserver'."),(0,o.kt)("li",{parentName:"ul"},"The working directory is like the home when you enter the container. /usr/share/nginx/html is the default homedirectory for the standard nginx image.")),(0,o.kt)("h3",{id:"ports"},"Ports"),(0,o.kt)("p",null,'In the container the Nginx is listening on port 80.\nThe host should also listen on port 80 and pass all that traffic on to the proxyserver container.\nTherefore, a Ports section is needed wich maps the Container "80" (the second "80" in "80:80")\nto the port on the Host (the first "80" in "80:80")'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'    ports:\n      - "80:80"\n')),(0,o.kt)("p",null,"This Ports section will be extended with other services like SFTP, SMTP and 443 for SSL traffic."),(0,o.kt)("p",null,"Make sure that on the Host itself (the Unix box you are doing this on) no Nginx is running and port 80 is not yet taken by any other service."),(0,o.kt)("h3",{id:"network"},"Network"),(0,o.kt)("p",null,"We make use of that Docker Network we created earlier by calling the 'my-net' network for this service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    networks:\n      my-net:\n        ipv4_address: 172.30.0.2\n")),(0,o.kt)("p",null,"The ProxyServer is running on 172.30.0.2 which fits nicely in the network created."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IP of the Proxyserver",src:n(1304).Z,width:"491",height:"561"})),(0,o.kt)("h3",{id:"volumes"},"Volumes"),(0,o.kt)(i.r,{to:"https://docs.docker.com/compose/compose-file/compose-file-v3/#volumes",mdxType:"Link"},"Volumes")," map host directories to directories inside the container. When the container is removed these directories still exist on the host.",(0,o.kt)("p",null,"A good practice is to have all the files, which change, mapped from the host to the container.\nThen it is possible to make use of standard images from Docker Hub instead of making your own Images."),(0,o.kt)("p",null,"The Nginx environment has a number of files which are specific for your own installation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All files in the /etc/nginx/conf.d directory."),(0,o.kt)("li",{parentName:"ul"},"The /etc/nginx/nginx.conf file"),(0,o.kt)("li",{parentName:"ul"},"We need a dummy website in case the request is pointing to this proxyserver (IP-address)\nbut not to a service we specified. This dummy website is like a catch all"),(0,o.kt)("li",{parentName:"ul"},"A number of logfiles which will be created by Nginx")),(0,o.kt)("p",null,"First the Volumes section, then the files themselves in a next paragraph"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    volumes:\n      - ./deployment/etc/nginx/conf.d:/etc/nginx/conf.d:ro\n      - ./deployment/etc/nginx/nginx.conf:/etc/nginx/nginx.conf:ro\n      - ./deployment/usr/share/nginx/html:/usr/share/nginx/html:ro\n      - ./deployment/var/log/nginx:/var/log/nginx\n")),(0,o.kt)("p",null,'The ":ro" in the configuration files means that the Container itself cannot change these.\nChanges need to be done on the Host.'),(0,o.kt)("h3",{id:"specify-the-external-network"},"Specify the external network"),(0,o.kt)("p",null,"In the service 'proxyserver' we specified that this service makes use of a network called 'my-net'.\nWe need to speficy this network somewhere. Since it's an external network (as we created at the top of this article),\nit's specified at the bottom of the docker-compose file as a reference to the external network in a separate 'networks' section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"networks:\n  my-net:\n    external: true\n    name: my-net\n")),(0,o.kt)("h3",{id:"full-docker-composeyml-file"},"Full docker-compose.yml file"),(0,o.kt)("p",null,"The complete file looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.9'\n\nservices:\n\n  proxyserver:\n    image: nginx:1.21.4\n    container_name: proxyserver\n    working_dir: /usr/share/nginx/html\n    ports:\n      - \"80:80\"\n    volumes:\n      - ./deployment/etc/nginx/conf.d:/etc/nginx/conf.d:ro\n      - ./deployment/etc/nginx/nginx.conf:/etc/nginx/nginx.conf:ro\n      - ./deployment/usr/share/nginx/html:/usr/share/nginx/html:ro\n      - ./deployment/var/log/nginx:/var/log/nginx\n    networks:\n      my-net:\n        ipv4_address: 172.30.0.2\n\nnetworks:\n  my-net:\n    external: true\n    name: my-net\n")),(0,o.kt)("h2",{id:"creating-the-nginx-directories-and-files"},"Creating the Nginx directories and files"),(0,o.kt)("p",null,"To keep a clear view which files are mapped to the Container, a special subdirectory is created called 'deployment'.\nFiles inside this subdirectory are all mapped to the Container. (At least that is my convention. Cange it if you like)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd deployProject/proxyserver\nmkdir deployment\ncd deployment\n")),(0,o.kt)("p",null,"Inside the deployment subdirectory the Nginx files are created in a directory structure which looks like the one on the Container:\n(again: convention, not a must)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p etc/nginx/conf\nmkdir -p usr/share/nginx/html\nmkdir -p var/log/nginx\n")),(0,o.kt)("h3",{id:"nginxconf-located-in-deploymentetcnginxconf"},"nginx.conf, located in deployment/etc/nginx/conf"),(0,o.kt)("p",null,"This is the main configuration file of Nginx, nothing special about this,\ntaken from a standard Nginx installation.\nFor tweaking on this file, check out the ",(0,o.kt)(i.r,{to:"https://docs.nginx.com/",mdxType:"Link"},"Nginx docs")),(0,o.kt)("p",null,"This file is placed in deployment/proxyserver/etc/nginx/ and is called nginx.conf"),(0,o.kt)("p",null,"Check out the last line where all *.conf files from the 'conf.d' directory are imported in the Nginx configuration. That's where the other Websites and Services will be defined."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'user  nginx;\nworker_processes  1;\n\nerror_log  /var/log/nginx/error.log warn;\npid        /var/run/nginx.pid;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       /etc/nginx/mime.types;\n    default_type  application/octet-stream;\n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile        on;\n\n    keepalive_timeout  65;\n\n    include /etc/nginx/conf.d/*.conf;\n}\n')),(0,o.kt)("h3",{id:"a-defaultconf-file-for-the-catch-all-website"},"A default.conf file for the catch-all website"),(0,o.kt)("p",null,"A minimal deault.conf is required to configure the catch-all website when no domainname is given\nand a request comes in on port 80."),(0,o.kt)("p",null,"The file is placed as default.conf in proxyserver/deployment/etc/nginx/conf.d (and mapped to /etc/nginx/conf.d/default.conf in the Docker Container)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"server {\n    listen 80;\n\n    location / {\n        root   /usr/share/nginx/html;\n        index  index.html;\n        try_files $uri $uri/ /index.html;\n    }\n\n    location ~ /\\.ht {\n        deny  all;\n    }\n}\n")),(0,o.kt)("p",null,"Again, nothing fancy. Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://nginx.org/en/docs/beginners_guide.html"},"Nginx Docs")," if more functionality is needed"),(0,o.kt)("h3",{id:"create-the-catch-all-website"},"Create the Catch-All Website"),(0,o.kt)("p",null,"A simple index.html to act as a catch-all when no other service fullfills the request to the ProxyServer."),(0,o.kt)("p",null,"The index.html is placed in proxyserver/deployment/usr/share/nginx/html (where the Nginx default config expects it)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <title>ProxyServer</title>\n</head>\n<body>\n    <h3>Nothing to see here</h3>\n</body>\n</html>\n')),(0,o.kt)("h3",{id:"directory-and-file-structure"},"Directory and file structure"),(0,o.kt)("p",null,"After the commands above the folder structure will look like this:\n",(0,o.kt)("img",{alt:"Folder Structure",src:n(84).Z,width:"580",height:"688"})),(0,o.kt)("p",null,"(The logfiles will be created automatically after the ProxyServer is started and mapped back to the Host, so you can read them on the Host)"))}u.isMDXComponent=!0},1304:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ip-address-proxyserver-f15227f9bace11cc50fa1cef4fd871e9.png"},84:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/nginx_folder_structure-ccf0c62f3dc2da03e2a928d247d63076.png"}}]);