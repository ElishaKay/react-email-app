Listing all records where column F contains any of the following substrings:

=query(uncategorized_leads_without_emails, "select * where LOWER(F) contains 'editor' OR LOWER(F) contains 'reporter' OR LOWER(F) contains 'writer' OR LOWER(F) contains 'columnist' OR LOWER(F) contains 'journalist' OR LOWER(F) contains 'contributor' ")

-----------------

Using the Filter Function:

=filter(Large_Named_Range,Given_Column="Beauty Writer")


----------------------------------------

Concat String (if 02 has the end of the string)

=concat("https://www.linkedin.com/in/",O2)


-----------------------------------


Remove Duplicates: (group by function for single column)

=unique(companyNames)
-----------------------------------------

Remove Duplicates: (group by function for single column)


How can I filter a full table based on only unique values in a single column?

https://webapps.stackexchange.com/questions/69083/how-can-i-filter-a-full-table-based-on-only-unique-values-in-a-single-column


Step 1: Within the Original Sheet, Create a New Column (To the left of A)

=IF(COUNTIF($B$2:$B2,B2)=1, "Unique", "Duplicate")

This function will type either "Unique" or "Duplicate" depending on whether the value in Column B is unique.

Step 2: Create a Defined Range out of the Full Sheet (including the newly created Column) - 
for this example, let's call the defined range, "uniquearticles"

Step 3: Create a new Sheet, and paste this into column A1:

=Query(uniquearticles,"Select * where A ='Unique'",1)

example: https://docs.google.com/spreadsheets/d/1VHJ0NFxQ7YGR80WZwaadYWeMmNiVJYVrcttCHh2ZpsE/edit?usp=sharing


Source with examples of Query Function:

https://www.benlcollins.com/spreadsheets/google-sheets-query-sql/

---------------------------

