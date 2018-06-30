# Title
This is a project for Docker projects

## Examples
```
FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y wget
RUN apt-get install -y build-essential tcl8.5
RUN wget http://download.redis.io/releases/redis-stable.tar.gz
RUN tar xzf redis-stable.tar.gz
RUN cd redis-stable && make && make install
RUN ./redis-stable/utils/install_server.sh
EXPOSE 6379
ENTRYPOINT  ["redis-server"]
```
去掉的命令
```
RUN apt-get upgrade -y
RUN ls -la
RUN source ~/.profile  // For Ubuntu 14.04
RUN nvm install v10.4.0
RUN nvm use 10.4.0
// /home/yang/.nvm/versions/node/v10.4.0/bin/node

RUN which node
RUN node --version
ENTRYPOINT  ["redis-server"]


RUN ls -la
RUN source ~/.profile
RUN nvm install v10.4.0
RUN nvm use 10.4.0
RUN ln -s /home/yang/.nvm/versions/node/v10.4.0/bin/node /usr/bin/node
USER yang
RUN which node
RUN node --version

// last commit
WORKDIR /home/yang
RUN su yang -c "curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash && source ~/.profile"
RUN su yang -c "nvm install v10.4.0 && nvm use 10.4.0"
RUN ln -s /home/yang/.nvm/versions/node/v10.4.0/bin/node /usr/bin/node
USER yang
RUN ls -la && which node && node --version

From ubuntu:14:04 to csdk:0.16


```
