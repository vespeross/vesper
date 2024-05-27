APP_NAME := vesper
VERSION := $(shell git describe --tags --always --dirty)
BUILD_TIME := $(shell date -u '+%Y-%m-%d_%H:%M:%S')

# build the application
build:
	@echo "Building $(APP_NAME)..."
	pnpm build 