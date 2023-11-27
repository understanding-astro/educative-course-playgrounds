# Use the official Ubuntu 20.04 base image
FROM ubuntu:20.04

# Set the environment variable to non-interactive
ENV DEBIAN_FRONTEND=noninteractive

# Install necessary dependencies, including "unzip"
RUN apt-get update && apt-get install -y \
    curl nano unzip git tmux && \
    apt-get upgrade -y

# Install Bun without user interaction
RUN curl -fsSL https://bun.sh/install | bash

# Add bun to the PATH
ENV PATH="/root/.bun/bin:${PATH}"

# Copy the contents of your current directory into the /app directory in the container
COPY . /

RUN apt-get install -y ca-certificates curl gnupg && \
    mkdir -p /etc/apt/keyrings && \
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg


RUN NODE_MAJOR=18 && \
    echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list


RUN apt-get update && apt-get install nodejs -y

RUN ls 

RUN cd astro-beginner-project && bun install

