#!/usr/bin/env bash

set -euo pipefail

# Find the most recently modified file
latest_file=$(find . -type f -printf '%T@ %p\n' |
	sort -nr |
	head -n1 |
	cut -d' ' -f2-)

if [[ -z "$latest_file" ]]; then
	echo "No files found."
	exit 1
fi

echo "Executing $latest_file:"

case "${latest_file##*.}" in
rs)
	"./$latest_file"
	;;
ts)
	# TODO: TypeScript
	;;
c)
	# TODO: C
	;;
*)
	echo "No action for this file type"
	;;
esac
