#!/bin/sh

readonly ENV_FORMAT="window._env_"
readonly REACT_ENV_FILTER="REACT_APP_"
readonly REGEX_KEY="s/=.*//"
readonly REGEX_VALUE="s/^[^=]*=//"
readonly INPUT_FILE=./.env
readonly OUTPUT_FILE=./env.js

isReactEnv() {
  ( [ "${1%"${1#??????????}"}" = $REACT_ENV_FILTER ] && true ) || false
}

isKeyValuePair() {
  ( printf "%s\n" "$1" | grep -q -e '=' && true ) || false
}

getKey() {
  isKeyValuePair "$1" && printf "%s\n" "$1" | sed -e "$REGEX_KEY"
}

getValue() {
  isKeyValuePair "$1" && printf "%s\n" "$1" | sed -e "$REGEX_VALUE"
}

toJson() {
  echo "  $1: \"$2\"," >> $OUTPUT_FILE
}

ReadFromFile() {
  while read -r line || [ -n "$line" ];
  do
    isReactEnv "$line" && ( 
      key=$( getKey "$line" )
      tempValue=$( getValue "$line")
      eval value="\$$key"
      [ -z "$value" ] && value=${tempValue}
      toJson "$key" "$value"
    )
  done < $INPUT_FILE
}

ReadFromEnv() {
  printenv | \
  while read -r line || [ -n "$line" ];
  do
    isReactEnv "$line" && (
      key=$( getKey "$line" )
      value=$( getValue "$line")
      toJson "$key" "$value"
    )
  done
}

rm -rf $OUTPUT_FILE
touch $OUTPUT_FILE

echo "$ENV_FORMAT = {" >> $OUTPUT_FILE
( [ -f $INPUT_FILE ] && ReadFromFile ) || ReadFromEnv
echo "}" >> $OUTPUT_FILE

exec "$@"