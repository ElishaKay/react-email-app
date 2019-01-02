Listing all records where column F contains any of the following substrings:

=query(uncategorized_leads_without_emails, "select * where LOWER(F) contains 'editor' OR LOWER(F) contains 'reporter' OR LOWER(F) contains 'writer' OR LOWER(F) contains 'columnist' OR LOWER(F) contains 'journalist' OR LOWER(F) contains 'contributor' ")

-----------------

Using the Filter Function:

=filter(Large_Named_Range,Given_Column_Range="Beauty Writer")


----------------------------------------

Concat String (if 02 has the end of the string)

=concat("https://www.linkedin.com/in/",O2)



