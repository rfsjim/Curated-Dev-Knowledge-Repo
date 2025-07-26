# Root Makefile for dev-handbook

CC := gcc
CFLAGS := -Wall -Wextra -Werror -g
SRC := $(shell find . -type f -name '*.c')
OUT := $(SRC:.c=.out)

.PHONY: all clean check

all: $(OUT)

# Pattern rule: build file.c into file.out
%.out: %.c
	@echo "Compiling $< -> $@"
	$(CC) $(CFLAGS) $< -o $@

check: all
	@echo "Running compiled examples..."
	@for bin in $(OUT); do \
		echo ">> $$bin"; \
		./$$bin || echo "Error in $$bin"; \
	done

clean:
	@echo "Cleaning up compiled files..."
	find . -type f \( -name '*.out' -o -name '*.exe' -o -name '*.o' \) -exec rm -f {} +