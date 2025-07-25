# Prebuilt Makefile Template for MSYS2 + GCC

CC = gcc
CFLAGS = -Wall -Wextra -g

# Default rule: make <program> compiles <program>.c
%: %.c
	@echo Compiling $< to $@
	$(CC) $(CFLAGS) $< -o $@

.PHONY: clean

# Clean up executables and object files
clean:
	rm -f *.exe *.o
