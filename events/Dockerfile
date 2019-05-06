FROM node:10-alpine
RUN apk update --no-cache
RUN apk upgrade --no-cache
RUN apk add --no-cache tzdata make
ARG TZ="Asia/Singapore"
RUN cp /usr/share/zoneinfo/${TZ} /etc/localtime
RUN printf -- "${TZ}" > /etc/timezone
ENV TZ=${TZ}
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm install
COPY . /app
ENTRYPOINT ["make", "_ics"]
