# Agree to Disagree

This repo serves as the tool as well as collection for various legalese that folks encounter on the web. The goal is to create visual diff that can be used to understand changes in these policies.

## How does it work?

The repo works by using a collection of indexes against which it collects screenshots and commits them alongside the repo.

-   Simply clone the repo, install dependencies and run `npm start`
-   This will go to each entry in index, take a sreenshot of the full page and store in the `collection` directory
-   This method will also perform a push, but since you might not have write previledges to the base repo, you can always make a Pull Request to get it merged.

## How to contribute

The best way to contribute right now would be to improve the index of pages which we want to collect in our archive. Take a look at indexes.json and add more.

## How often will screenshots be updated?

I will try to run this every day but the diff won't be generated unless there's any change in the page screenshot itself. However, there's a chance of high false positives of new diffs, in case the page shows current date-time somewhere.

## What's the final goal

Right now the goal is to get the data. Over time I hope that it will be used by folks to:

-   understand readability of these documents
-   keep a record of change for these documents
-   find loopholes in these documents
