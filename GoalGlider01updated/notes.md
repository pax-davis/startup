# GoalGlider - CSS Styling Phase

## Overview

Now that the HTML structure is in place, I styled the application using CSS to reflect how I expect the final product to look. This includes styled placeholders for:
- User authentication display
- Application data (goals and motivational quote)
- Real-time updates (WebSocket feed)

The styling offers a clear and engaging visual experience while representing core parts of the app.

## Development Process

- Used Flexbox to align layout sections responsively.
- Styled the header, navigation, and footer with consistent color and spacing.
- Added box shadows and hover effects for subtle interactivity.
- Ensured readability and structure across different screen sizes.
- Used browser dev tools to debug layout issues.
- Previewed styling updates using the Live Server extension in VS Code.

## Deployment Instructions

To deploy this version, I use the script below to push my styled static files to my production environment.

### 🛠️ `deployFiles.sh`
```bash
#!/bin/bash

while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployFiles.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Deploying files for $service to $hostname with $key\n"

# Step 1
printf "\n----> Clear out the previous distribution on the target.\n"
ssh -i "$key" ubuntu@$hostname << ENDSSH
rm -rf services/${service}/public
mkdir -p services/${service}/public
ENDSSH

# Step 2
printf "\n----> Copy the distribution package to the target.\n"
scp -r -i "$key" * ubuntu@$hostname:services/$service/public
```

### Example:
```bash
./deployFiles.sh -k ~/keys/production.pem -h mydomain.click -s startup
```

I make sure to run this from the root directory of the project. I also verify that my `.pem` key file has the correct permissions (`chmod 400` if necessary).

## Commit History

I committed frequently throughout this phase to document progress:
- Initial layout styling
- Responsive design implementation
- Section styles for goal management, quote display, and activity feed
- Adjustments for spacing, alignment, and accessibility
- forgot to add the actual code lol. just added to notes

## Summary

This styling phase established a strong visual baseline for GoalGlider. It reflects how I envision the final app and ensures that core areas like login, goal management, and real-time updates are visually represented and user-friendly.
