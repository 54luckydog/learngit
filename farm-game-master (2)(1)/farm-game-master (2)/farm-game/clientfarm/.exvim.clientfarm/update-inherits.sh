#!/bin/bash
export DEST="./.exvim.clientfarm"
export TOOLS="/Users/tu/.vim/tools/"
export TMP="${DEST}/_inherits"
export TARGET="${DEST}/inherits"
sh ${TOOLS}/shell/bash/update-inherits.sh
