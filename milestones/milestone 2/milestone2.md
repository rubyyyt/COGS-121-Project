
COGS 121 Milestone 2

How our idea is different from Milestone 1:
Our benefactors are still philanthropists, but we changed our beneficiaries from those in need (which was too broad) to public schools. Also, in order to narrow down our focus group of public schools, we have the option to filter by location. We also changed our API to Google Maps so that we can find information on public schools determined by location. We may also include tags to filter results even more.

Screenshots of UI Skeleton:

![](createAccount.png)
![](home.png)
![](login.png)
![](registerSchool.png)

Written explanation of how screenshots are similar to or differ from our paper prototypes in milestone1.md:

Our screens interact differently than how we proposed on the paper prototype. Our skeleton is not aesthetically quite there just yet compared to our paper prototype, but that gives us more realistic designs to implement. In milestone 1, we wanted to have interaction between philanthropists and individual people who would be required to make profiles. Since we changed our idea to interaction between philanthropists and public schools, they do not need to make as detailed a profile anymore (so our screenshots do not require details such as age and gender). We do not have the tag function like we proposed in milestone 1 because we decided to narrow results by location instead.

What real data we want to use and how we will obtain it:
	
	We hope plan on using a Google Maps API to retrieve the n closest schools to the users current location
	After retrieving the closest schools, we will display a list and each school will be marked as "registered" or "unregistered"
	"Registered" schools will give you a list of items/funds that the school (or user who registered the school) will have listed as the school needing
	Each item/fund will have a donate option, allowing the user to donate the exact amount or a lesser amount towards the item/fund
	"Unregistered" schools will give you no options, but a potential implementation would be the ability to call the school and request they register so that the school may recieve funds in the future
	We may also implement more statistics regarding schools, such as average income, funding, etc. if we can find and use a database that has this information

	Additionally, each user will be stored in a database with minimal user information
	This database can be added to when creating a new user or modified from a users profile page
