# Root Makefile for dev-handbook

CC := gcc
CFLAGS := -Wall -Wextra -Werror -g

# Typescript
TS := $(shell find . -type f -name '*.ts' ! -path './node_modules/*')
JS := $(TS:.ts=.js)

# C
SRC := $(shell find . -type f -name '*.c')
OUT := $(SRC:.c=.out)

.PHONY: all clean check ts c

# Default build target
all: c ts

# C Compilation
c: $(OUT)

# Pattern rule: build file.c into file.out
%.out: %.c
	@echo "Compiling $< -> $@"
	$(CC) $(CFLAGS) $< -o $@

# TypeScript Compilation
ts: $(JS)

%.js: %.ts
	@echo "Transpiling $< -> $@"
	tsc $<

check: all
	@echo "Running compiled C examples..."
	@for bin in $(OUT); do \
		echo ">> $$bin"; \
		./$$bin || echo "Error in $$bin"; \
	done
	@echo "Running compiled TypeScript examples..."
	@for js in $(JS); do \
		echo ">> $$js"; \
		node $$js || echo "Error in $$js"; \
	done

clean:
	@echo "Cleaning up compiled files..."
	find . -path ./node_modules -prune -o -type f \( -name '*.out' -o -name '*.js' \) -exec rm -f {} +

lint:
	@echo "Linting TypeScript files..."
	npx eslint '**/*.ts'