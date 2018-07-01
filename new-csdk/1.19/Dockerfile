FROM csdk:0.17
MAINTAINER yang o3
RUN useradd -m yang -g root && echo "yang:123456" | chpasswd && adduser yang sudo
WORKDIR /home/yang
ENV NVM_DIR /home/yang/.nvm
ENV NODE_VERSION 10.4.0

RUN su yang -c "curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install  v$NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default \
    && npm install -g typescript"
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
USER yang
RUN node --version
CMD /bin/bash
COPY ./run.sh /home/yang/







