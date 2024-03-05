#!/bin/bash
#Description: This script renames all directories in the script_sample_folder


# Check if prefix argument is provided
if [ $# -eq 0 ]; then
    read -p "Enter the prefix: " prefix
else
    prefix="$1"
fi

# Iterate over directories in script_sample_folder
for dir in script_sample_folder/*; do
    if [ -d "$dir" ]; then
        # Get the current directory name
        dir_name=$(basename "$dir")
        
        # Rename the directory
        new_name="${prefix}-${dir_name}"
        mv "$dir" "$new_name"
        
        echo "Renamed $dir to $new_name"
    fi
done