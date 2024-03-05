#!/bin/bash
#Description: This script creates a .txt file in each folder of the script-sample-folder with the name of the folder

# Find all the repositories in the script-sample-folder
repositories=$(find /home/afonso/ETIC/Arquitetura-sistemas/Script-Criar-txt/script-sample-folder -type d)

# Loop through each repository
for repo in $repositories; do
    # Create the .txt file with the desired content
    echo "script_sample_folder-$(basename $repo)" > "$repo/file.txt"
done
