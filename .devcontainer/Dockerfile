FROM node:20.15.1-slim

# https://code.visualstudio.com/remote/advancedcontainers/add-nonroot-user
ARG USERNAME=node

# Create the user
RUN apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# ********************************************************
# * Anything else you want to do like clean up goes here *
# ********************************************************

RUN apt-get -y install git lsof curl procps

# [Optional] Set the default user. Omit if you want to keep the default as root.
USER $USERNAME
