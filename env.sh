#!/bin/sh

rm -rf ./env.js
touch ./env.js

echo "window._env_ = {" >> ./env.js

if [ -f ./.env ]; then
  while read -r line || [ -n "$line" ];
  do
    if printf '%s\n' "$line" | grep -q -e '='; then
      key=$(printf '%s\n' "$line" | sed -e 's/=.*//')
      tempValue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
    fi

    if [ "${key%"${key#??????????}"}" = "REACT_APP_" ]; then
      eval value="\$$key"
      [ -z "$value" ] && value=${tempValue}
      
      echo "  $key: \"$value\"," >> ./env.js
    fi
  done < ./.env
else
  printenv | \
  while read -r line || [ -n "$line" ];
  do
    if printf '%s\n' "$line" | grep -q -e '='; then
      key=$(printf '%s\n' "$line" | sed -e 's/=.*//')
      value=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
    fi
    
    if [ "${key%"${key#??????????}"}" = "REACT_APP_" ]; then
      echo "  $key: \"$value\"," >> ./env.js
    fi
  done
fi

echo "}" >> ./env.js