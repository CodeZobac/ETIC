#!/bin/bash
#Description: This script renames all directories in the script_sample_folder


# Check if prefix argument is provided
if [ $# -eq 0 ]; then
    read -p "Enter the prefix: " prefix
else
    prefix="$1"
fi

dirs=./script-sample-folder/*

# Iterate over directories in script_sample_folder
for dir in $dirs; do
    echo "$dir"
    if [ -d "$dir" ]; then
        dir_name=$(basename "$dir")
        new_name="${prefix}-${dir_name}"
        mv "$dir" "$new_name"
        
        echo "Renamed $dir to $new_name"
    fi
done