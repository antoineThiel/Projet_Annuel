while true
do
	if [ -f ./newFranchise.png ]
	then
		./RegisterNew
		rm -f newFranchise.png
	else
		echo "No file received yet"
		echo "Press ctrl + c to stop process"	 
		sleep 5
	fi
done
exit
