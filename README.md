Shovels!

It’s a winter day and you decide to set up a small shovel stand next to your house. You decide to sell them at a price of 5€ each. 
Customers line up and will pay with either a 5€, 10€, 20€ or 50€ bill and your job is to provide the correct change to them so that 
the transaction always ends with you being up 5€.

You can see the customers in the line, represented by an integer array bills where bills[i] is the euro amount of 
the i:th customer in the line. Each customer is only interested in buying one shovel.

In the beginning, you have no money. bills[i] is always 5, 10, 20, or 50. 
There will always be at least one customer in the line. 
Return either true or false depending on if you can sell shovels to all customers successfully 
(and provide them all with change in the order they came in)

Examples:

Input: bills = [5,10,5,5,10,20]
Output: true
Explanation: First you get 5€, then 10€, and you pay back the first 5€ as exchange. 
Then you get 5€ twice and have [10,5,5], get 10€, have [10,5,10], and then get 20€, finally having [10,20]. 
You managed to give correct change to all customers.

Input: bills = [50,20,5,5,5,5,5,5]
Output: false 
Explanation: You get 50€ and the next customer needs change for their 20€, which you can't give with 50€.
