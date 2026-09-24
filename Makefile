RUBY_BIN := /opt/homebrew/opt/ruby@3.3/bin
export PATH := $(RUBY_BIN):$(PATH)

.PHONY: setup serve

setup:
	bundle install

serve:
	bundle exec jekyll serve --livereload
