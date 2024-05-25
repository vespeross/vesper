#!/usr/bin/env bash

platform=$(uname -ms)

# Check if the platform is supported
if [[ $platform != "Linux x86_64" ]] && [[ $platform != "Linux arm64" ]] && [[ $platform != "Darwin x86_64" ]] && [[ $platform != "Darwin arm64" ]]; then
  echo "Unsupported platform: $platform"
  exit 1
fi


# check if nodejs, pnpm, docker, docker-compose, git, curl, kubectl, helm, and skaffold are installed
if ! command -v node &> /dev/null; then
  echo "Node.js is not installed. Please install Node.js from https://nodejs.org"
  exit 1
fi

if ! command -v pnpm &> /dev/null; then
  echo "pnpm is not installed. Please install pnpm by running 'npm install -g pnpm'"
  exit 1
fi

if ! command -v docker &> /dev/null; then
  echo "Docker is not installed. Please install Docker from https://docs.docker.com/get-docker/"
  exit 1
fi

if ! command -v docker-compose &> /dev/null; then
  echo "Docker Compose is not installed. Please install Docker Compose from https://docs.docker.com/compose/install/"
  exit 1
fi

if ! command -v git &> /dev/null; then
  echo "Git is not installed. Please install Git from https://git-scm.com"
  exit 1
fi

if ! command -v curl &> /dev/null; then
  echo "curl is not installed. Please install curl from https://curl.se"
  exit 1
fi

if ! command -v kubectl &> /dev/null; then
  echo "kubectl is not installed. Please install kubectl from https://kubernetes.io/docs/tasks/tools/install-kubectl/"
  exit 1
fi

if ! command -v helm &> /dev/null; then
  echo "helm is not installed. Please install helm from https://helm.sh/docs/intro/install/"
  exit 1
fi

if ! command -v skaffold &> /dev/null; then
  echo "skaffold is not installed. Please install skaffold from https://skaffold.dev/docs/install/"
  exit 1
fi