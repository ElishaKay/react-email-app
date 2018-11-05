Jason's Network Requests:

Request URL: http://45.55.120.26/get_special_deals
Request Method: GET

Response: {}

----------------------

Request URL: http://45.55.120.26/user_by_email?email=halljason125@gmail.com&publicIdentifier=jason-hall-598137167
Request Method: GET

Response:

{"user":[{"firstname":"Jason",
"email":"halljason125@gmail.com",
"date_joined":"2018-07-03T05:52:42.971Z",
"linkedin_profile_id":"jason-hall-598137167",
"linkedin_profile_url":"https://www.linkedin.com/in/jason-hall-598137167","user_type":"Standard","user_plan":"Standard","expiry_date":"2018-07-17T05:52:42.971Z","profile_views_remaining_today":"200","connection_requests_remaining_today":"25","messages_remaining_today":"25","inmails_remaining_today":"25","autoFollowUp":"24","autoRemind":"false","autoWithdraw":"false","autoWish":"false","skipVisit":"false","skipMessage":"false","skipInMail":"false","skipProfileWithNoPic":"false","code_tries":1,"lastLogin":"2018-10-23T05:53:37.764Z","profile_img":"https://media.licdn.com/dms/image/C4E03AQGTIHthm7b3EQ/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=XU5GOqQSOi6o8LDZPpdSZuzZeaZNtNsTh0aX0oU6nqg","account_type":"Premium","id":"5b3b0f2b126f883d076adb1d"}]}

---------------------------

Request URL: http://45.55.120.26/user/5b3b0f2b126f883d076adb1d
Request Method: POST

Form Data: 
{profile_img: https://media.licdn.com/dms/image/C4E03AQGTIHthm7b3EQ/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=XU5GOqQSOi6o8LDZPpdSZuzZeaZNtNsTh0aX0oU6nqg
account_type: Sales Navigator
}

Response: {"success":"1"}

---------------------------

Request URL: http://45.55.120.26/get_aliases?user_id=5b3b0f2b126f883d076adb1d
Request Method: GET

Response: {"aliases":[]}

--------------

Request URL: http://45.55.120.26/get_skiplist?user_id=5b3b0f2b126f883d076adb1d
Request Method: GET

{"skiplist":[{"user_id":"5b3b0f2b126f883d076adb1d","is_skipped":"true","entityUrn":"AAEAAAAClckBhC141ehHN-aQXYWKv8XLR7mbY-c","id":"5b421d17e3b7614b48505728"},{"user_id":"5b3b0f2b126f883d076adb1d","is_skipped":"true","entityUrn":"ACwAAAAOmPsBKr7GRbEEiwDbVVhR4_SU9kstEJ8","id":"5bcd8da47c2e02410b1e37a8"},{"user_id":"5b3b0f2b126f883d076adb1d","is_skipped":"true","entityUrn":"ACwAAAAOmPsBKr7GRbEEiwDbVVhR4_SU9kstEJ8","id":"5bcd8da57c2e02410b1e37ab"},{"user_id":"5b3b0f2b126f883d076adb1d","is_skipped":"true","entityUrn":"ACwAAAEY0RoBTjvVRrdATalGcNUMgh5Rd-pu1r4","id":"5bcd8da07c2e02410b1e379e"},{"user_id":"5b3b0f2b126f883d076adb1d","is_skipped":"true","entityUrn":"natasha-henry-46770325","id":"5bc30f4cfa430fc45d549d9d"},{"user_id":"5b3b0f2b126f883d076adb1d","is_skipped":"true","entityUrn":"sarah-boyall-a8b01199","id":"5bc30e6fe4ff34a65a18b5e7"}]}


----------------------


Request URL: http://45.55.120.26/update_connections
Request Method: POST

Form Data:

{
connection_ids: 5bcd8db27c2e02410b1e37d9,5bcd8acf9ed82f550b1cc005,5bcd84ca9ed82f550b1cb160,5bcd830b9ed82f550b1cacc7,5bcc304d0c12bf9c5ae8a557,5bc865fcd779f5c14292b4f4
conn_status: true
}

Response:

[{"user_id":"5b3b0f2b126f883d076adb1d","c_name":"Yon Rosenberg","c_profile_url":"https://www.linkedin.com/sales/people/ACwAAATEvzMBT3qWb3u7ldMPuEuKBdDk2sCtRbo,NAME_SEARCH,u1dD?_ntb=G%2BY%2FgkzqSMakG7hOVyPK1Q%3D%3D","c_public_id":"yonrozenberg","c_member_id":"80002867","date_conn_sent":"2018-10-18T10:52:44.499Z","date_accepted":"2018-10-18T10:52:44.499Z","invitation_message":"Hi %firstName%, I noticed you work at %company%. I love what you guys are doing. Happy to connect.","follow_up_message":"Hi %firstName%, \n\nI noticed you deal in consumer electronics, and I was wondering if you've ever considered the option of crowdfunding - not as a funding option, rather as a powerful market validation tool.\n\nFor example, in the last month Gilette, Lego, and Segway ran campaigns on these crowdfunding platforms to validate new future products.\n\nI work with Cory Group which has 5 years of experience in crowdfunding campaigns. We are a one-stop-shop crowdfunding agency for a successful campaign‭.\n\nMore info here: www.rancory.com\n\nI was wondering if you're interested in exploring new market validation options.","attachments":"[]","is_accepted":"true","id":"5bc865fcd779f5c14292b4f4"},{"user_id":"5b3b0f2b126f883d076adb1d","c_name":"Eli Castiel","c_profile_url":"https://www.linkedin.com/sales/people/ACwAAAEEBwABks844-gRKftZycphanP19zQ3JmA,NAME_SEARCH,-ODG?_ntb=G%2BY%2FgkzqSMakG7hOVyPK1Q%3D%3D","c_public_id":"eli-castiel-9408595","c_member_id":"17041152","date_conn_sent":"2018-10-21T07:52:45.504Z","date_accepted":"2018-10-21T07:52:45.504Z","invitation_message":"Hi %firstName%, I noticed you work at %company%. I like what you guys are doing. Happy to connect.","follow_up_message":"Hi %firstName%,\n\nI noticed you deal in consumer electronics, and I was wondering if you've ever considered the option of crowdfunding for %company% - not as a funding option, rather as a powerful marketing tool.\n\nI work with Cory Group which has raised millions of dollars for our clients on Kickstarter and Indiegogo.\n\nWe are a one-stop-shop crowdfunding agency for a successful campaign‭.\n\nMore info here: www.rancory.com\n\nI was wondering if you'd like to schedule a call and see whether this is relevant for your product.","attachments":"[]","is_accepted":"true","id":"5bcc304d0c12bf9c5ae8a557"},{"user_id":"5b3b0f2b126f883d076adb1d","c_name":"Chris Aubrey","c_profile_url":"https://www.linkedin.com/sales/people/ACwAAAG1dd4BzFXdt2bXtvyo1XbZzdhE7II79Ak,NAME_SEARCH,Zhgq?_ntb=G%2BY%2FgkzqSMakG7hOVyPK1Q%3D%3D","c_public_id":"chrisaubrey","c_member_id":"28669406","date_conn_sent":"2018-10-22T07:58:03.585Z","date_accepted":"2018-10-22T07:58:03.585Z","invitation_message":"Hi %firstName%, I noticed you work at %company%. I like what you guys are doing. Happy to connect.","follow_up_message":"Hi %firstName%, \n\nI was wondering if %company% has ever tried crowdfunding - not just as a sales opportunity, rather as a powerful market validation tool.\n\nFor example, in the last month Gilette, Lego, and Segway ran campaigns on these crowdfunding platforms to validate new future products.\n\nI work with Cory Group which has 5 years of experience in crowdfunding campaigns. We are a one-stop-shop crowdfunding agency for a successful campaign‭ ( www.rancory.com )\n\nI was wondering if you're interested in exploring new market validation options. \n\nBased on our success in crowdfunding, we also do B2B marketing for tech products in a very interesting way. Happy to make the intro to Ran, if it's relevant.","attachments":"[]","is_accepted":"true","id":"5bcd830b9ed82f550b1cacc7"},{"user_id":"5b3b0f2b126f883d076adb1d","c_name":"David Roberton","c_profile_url":"https://www.linkedin.com/sales/people/ACwAAAAHccsBDav_yM2pQG1Khoi0USmIeB-X480,NAME_SEARCH,fRc8?_ntb=G%2BY%2FgkzqSMakG7hOVyPK1Q%3D%3D","c_public_id":"davidroberton","c_member_id":"487883","date_conn_sent":"2018-10-22T08:05:30.280Z","date_accepted":"2018-10-22T08:05:30.280Z","invitation_message":"Hi %firstName%, I noticed you work at %company%. I like what you guys are doing. Happy to connect.","follow_up_message":"Hi %firstName%, \n\nI was wondering if %company% has ever tried crowdfunding - not just as a sales opportunity, rather as a powerful market validation tool.\n\nFor example, in the last month Gilette, Lego, and Segway ran campaigns on these crowdfunding platforms to validate new future products.\n\nI work with Cory Group which has 5 years of experience in crowdfunding campaigns. We are a one-stop-shop crowdfunding agency for a successful campaign‭ ( www.rancory.com )\n\nI was wondering if you're interested in exploring new market validation options. \n\nBased on our success in crowdfunding, we also do B2B marketing for tech products in a very interesting way. Happy to make the intro to Ran, if it's relevant.","attachments":"[]","is_accepted":"true","id":"5bcd84ca9ed82f550b1cb160"},{"user_id":"5b3b0f2b126f883d076adb1d","c_name":"Andrew Dulla","c_profile_url":"https://www.linkedin.com/sales/people/ACwAAAMJ0xgB97DMGC9J831Ouup-hOWSF4jiHPE,NAME_SEARCH,V9R-?_ntb=G%2BY%2FgkzqSMakG7hOVyPK1Q%3D%3D","c_public_id":"andrew-dulla","c_member_id":"50975512","date_conn_sent":"2018-10-22T08:30:59.319Z","date_accepted":"2018-10-22T08:30:59.319Z","invitation_message":"Hi %firstName%, I noticed you work at %company%. I like what you guys are doing. Happy to connect.","follow_up_message":"Hi %firstName%, \n\nI was wondering if %company% has ever tried crowdfunding - not just as a sales opportunity, rather as a powerful market validation tool.\n\nFor example, in the last month Gilette, Lego, and Segway ran campaigns on these crowdfunding platforms to validate new future products.\n\nI work with Cory Group which has 5 years of experience in crowdfunding campaigns. We are a one-stop-shop crowdfunding agency for a successful campaign‭ ( www.rancory.com )\n\nI was wondering if you're interested in exploring new market validation options. \n\nBased on our success in crowdfunding, we also do B2B marketing for tech products in a very interesting way. Happy to make the intro to Ran, if it's relevant.","attachments":"[]","is_accepted":"true","id":"5bcd8acf9ed82f550b1cc005"},{"user_id":"5b3b0f2b126f883d076adb1d","c_name":"Tom Pearce","c_profile_url":"https://www.linkedin.com/sales/people/ACwAAAImfh0BOJwydCkeFc8lgieHFkESa1XTuDk,NAME_SEARCH,mrVZ?_ntb=G%2BY%2FgkzqSMakG7hOVyPK1Q%3D%3D","c_public_id":"tomjpearce","c_member_id":"36077085","date_conn_sent":"2018-10-22T08:43:30.601Z","date_accepted":"2018-10-22T08:43:30.601Z","invitation_message":"Hi %firstName%, I noticed you work at %company%. I like what you guys are doing. Happy to connect.","follow_up_message":"Hi %firstName%, \n\nI was wondering if %company% has ever tried crowdfunding - not just as a sales opportunity, rather as a powerful market validation tool.\n\nFor example, in the last month Gilette, Lego, and Segway ran campaigns on these crowdfunding platforms to validate new future products.\n\nI work with Cory Group which has 5 years of experience in crowdfunding campaigns. We are a one-stop-shop crowdfunding agency for a successful campaign‭ ( www.rancory.com )\n\nI was wondering if you're interested in exploring new market validation options. \n\nBased on our success in crowdfunding, we also do B2B marketing for tech products in a very interesting way. Happy to make the intro to Ran, if it's relevant.","attachments":"[]","is_accepted":"true","id":"5bcd8db27c2e02410b1e37d9"}]