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
    printf "  syntax: deployService.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Build the distribution package\n"
rm -rf build
mkdir build
npm install
npm run build
cp -rf dist/* build

printf "\n----> Clear out previous distribution on the target\n"
ssh -i "$key" ubuntu@$hostname << ENDSSH
rm -rf services/${service}/public
mkdir -p services/${service}/public
ENDSSH

printf "\n----> Copy distribution and backend to target\n"
scp -r -i "$key" build/* ubuntu@$hostname:services/$service/public
scp -r -i "$key" service/* ubuntu@$hostname:services/$service

rm -rf build dist
