echo "press ctrl+c to stop"
while true
do
	if [ -f ./newFranchise.png ]
	then
		./RegisterNew
		rm -f newFranchise.png
	else
		sleep 5
	fi
done
exit