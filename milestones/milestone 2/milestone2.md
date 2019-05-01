
COGS 121 Milestone 2

How our idea is different from Milestone 1:
Our benefactors are still philanthropists, but we changed our beneficiaries from those in need (which was too broad) to public schools. Also, in order to narrow down our focus group of public schools, we have the option to filter by location. We also changed our API to Google Maps so that we can find information on public schools determined by location. We may also include tags to filter results even more.

Screenshots of UI Skeleton: (they must be embedded here, not linked)


Written explanation of how screenshots are similar to or differ from our paper prototypes in milestone1.md:


What real data we want to use and how we will obtain it:
	
	We hope plan on using a Google Maps API to retrieve the n closest schools to the users current location
	After retrieving the closest schools, we will display a list and each school will be marked as "registered" or "unregistered"
	"Registered" schools will give you a list of items/funds that the school (or user who registered the school) will have listed as the school needing
	Each item/fund will have a donate option, allowing the user to donate the exact amount or a lesser amount towards the item/fund
	"Unregistered" schools will give you no options, but a potential implementation would be the ability to call the school and request they register so that the school may recieve funds in the future
	We may also implement more statistics regarding schools, such as average income, funding, etc. if we can find and use a database that has this information

	Additionally, each user will be stored in a database with minimal user information
	This database can be added to when creating a new user or modified from a users profile page