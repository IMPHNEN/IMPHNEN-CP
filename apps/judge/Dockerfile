FROM criyle/go-judge:latest as go-judge
FROM debian:latest

RUN apt update -y && apt upgrade -y
RUN apt install python g++ golang-go curl ca-certificates -y
RUN curl -fsSL https://deb.nodesource.com/setup_24.x -o /tmp/nodesource_setup.sh \
    && bash /tmp/nodesource_setup.sh \
    && apt-get install -y nodejs \
    && rm /tmp/nodesource_setup.sh \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /opt

COPY --from=go-judge /opt/go-judge /opt/mount.yaml /opt/
EXPOSE 5050/tcp 5051/tcp 5052/tcp

ENTRYPOINT [ "./go-judge" ]