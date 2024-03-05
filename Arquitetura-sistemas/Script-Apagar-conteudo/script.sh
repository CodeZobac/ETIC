#!/bin/bash
#Description: This script deletes the contents of the directories in the specified directory that contain the given character argument

# Prompt for the character argument
read -p "Enter the character: " character

# Define the directory path
directory="./script-sample-folder"

# Loop through the directories in the specified directory
for dir in "$directory"/*; do
    # Check if the directory name contains the given character argument
    if [[ "$dir" == *"$character"* ]]; then
        # Delete the contents of the directory
        rm -rf "$dir"/*
    fi
done
