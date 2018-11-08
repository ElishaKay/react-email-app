
Elisha's network requests:
(So far, only includes the Followups Process)
---------------------------

Note: This can help us show a list of the responses of all leads 'that expressed-interest'!! :)
It shows the 'notes' per user - which can be added via the LinkedIn Page.


Request URL: http://45.55.120.26/get_tagged_connections_of_user/?user_id=5bc2231aca978bf632655324
Request Method: GET

[
	{
	"connection_id": "chiajessica",
	"user_id": "5bc2231aca978bf632655324",
	"tags": "Beauty/Editor - US&UK",
	"id": "5bd588c5c22b3bbf0f1bf9e6"
	},
	{
	"connection_id": "chichi-ogwe-527a578b",
	"user_id": "5bc2231aca978bf632655324",
	"tags": "Beauty/Editor - US&UK,expressed-interest",
	"notes": "She's a beauty editor",
	"id": "5bdae1dcad26090a5c6b94c6"
	},
	{
	"connection_id": "chloe-burcham-4941b366",
	"user_id": "5bc2231aca978bf632655324",
	"tags": "Beauty/Editor - US&UK",
	"id": "5bd98ce1bbcb62de2fe9fa25"
	},
]


-------------------------


Request URL: http://45.55.120.26/get_tagged_connections_of_user/?user_id=5bc2231aca978bf632655324&connection_id=chichi-ogwe-527a578b
Request Method: GET

Query String Parameters:
user_id: 5bc2231aca978bf632655324
connection_id: chichi-ogwe-527a578b

Response:

[
  {
    "connection_id": "chichi-ogwe-527a578b",
    "user_id": "5bc2231aca978bf632655324",
    "tags": "Beauty/Editor - US&UK,expressed-interest",
    "notes": "She's a beauty editor",
    "id": "5bdae1dcad26090a5c6b94c6"
  }
]

----------------------------

Request URL: http://45.55.120.26/is_patch_available?version=4.0.71
Request Method: GET

Response: [{"version":"4.0.71","patch_version":"4.0.713","type":"content_script","script":"...","description":"design issue fix for tags and notes in profile page","id":"5b88d3f0ee56b29a316e017d"},{"version":"4.0.71","patch_version":"4.0.717","type":"popup","script":"...","description":"Remove upgrade button in popup","id":"5b89bd5f6e94251e6a5a5a0c"},{"version":"4.0.71","patch_version":"4.0.715","type":"content_script","script":"","description":"Adding premium button to standard users","id":"5b89a67d6e94251e6a5a463c"},{"version":"4.0.71","patch_version":"4.0.716","type":"mainCtrl","script":"description":"connection requests not working in sales nav new design","id":"5bce3c093b1ba3503c537547"}]
------------------

Request URL: http://45.55.120.26/get_comms?user_id=5bc2231aca978bf632655324
Request Method: GET

Response: {"success":"1","comms":[],"max_msg_date":0,"max_inm_date":0}

-------------------

Request URL: http://45.55.120.26/add_to_downloads
Request Method: POST

Form Data: 
{user_id: 5bc2231aca978bf632655324
operation: Message
entityUrn: ACoAAALJEHQB3xNCpTE7v139bsx3A1ScC9eHDXY
filename: Message_1540269664954}

Response: {"user_id":"5bc2231aca978bf632655324","operation":"Message","filename":"Message_1540269664954","entityUrn":"ACoAAALJEHQB3xNCpTE7v139bsx3A1ScC9eHDXY","dateSaved":"Tue Oct 23 2018 04:41:05 GMT+0000 (UTC)","isFirst":"false","id":"5bcea661cd4c26463c36970f"}

-------------------

Request URL: http://45.55.120.26/add_profile
Request Method: POST

Form Data: {
firstName: Mark
lastName: Rollins
entityUrn: ACoAAALJEHQB3xNCpTE7v139bsx3A1ScC9eHDXY
objectUrn: 46731380
headline: Content Writer at TheGeekChurch.com
publicIdentifier: marollins
industryCode: 103
picture: https://media.licdn.com/dms/image/C4D03AQFkF7P4wgOv0g/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=IpIfu-zF5ep2JNjiDy5jO8qi-vba89h22ydAk_7kMFU
trackingId: FwCgrjr3SlyEbtFROJlOcw==
locationName: Pullman, Washington
postalCode: 99163
versionTag: 712099154
schoolName: Washington State University
fieldOfStudy: English
title: Writer
companyName: The Geek Church
languages: 
skills: Blogging||26,Marketing||27,Creative Writing||28,Web Content||29
email: freelancermark@yahoo.com
phone: 
}

Response: {"success":"Profile saved"}

-------------------------

Note: this API call should post to the 'message' table. 
It records the messages when they are actually sent out to the receivers

Request URL: http://45.55.120.26/add_comm/
Request Method: POST

Form Data: {
	user_id: 5bc2231aca978bf632655324
type: FollowUpMessage
date_sent: true
rec_name: Mark Rollins
content: Hi Mark. Thanks for connecting.

I was wondering if you could help me.

I'm representing a company that has introduced a device that relieves period pain. This could be a device that relieves pain for hundreds of thousands - possibly even millions - of women.

Here's a link to the Indiegogo campaign and the Press Release folder:

Campaign: https://igg.me/at/silknstop/x/4710211

Press Kit: https://drive.google.com/drive/folders/1p-4wMyAsEBu04I2W9QC7OXEykmkOSrRn

I'm doing my best to get the word out.

Is this a kind of story that could be interesting to you or someone in your network?
profile_url: https://www.linkedin.com/in/marollins
profile_id: marollins
member_id: 46731380
entityUrn: ACoAAALJEHQB3xNCpTE7v139bsx3A1ScC9eHDXY
}

Response: {"success":"Communication saved"}

---------------------------

Request URL: http://45.55.120.26/audit_event/
Request Method: POST

Form Data: {
user_id: 5bc2231aca978bf632655324
event: follow_up_message_sent	
}

Response: {"success":1}

-----------------------------

Note: probably refers to the lead removing the invitation to connect - maybe we don't see it in the pending invites page anymore: 
	This API Call sets the status of 'removed' to the is_accepted key on the connection objects that are included in another API Call 
	(http://45.55.120.26/get_connections/5bc2231aca978bf632655324) 

Request URL: http://45.55.120.26/update_connections
Request Method: POST

Form Data: {
connection_ids: 5bc9a764ca94b4e17a69eb9c,5bc85edae39cf13243453a8f,5bc70af2edc8ae587c14b06c
conn_status: removed
}

Response: An array of [Removed] 'Connections' objects:

[
	{
		user_id: "5bc2231aca978bf632655324",
		c_name: "Joy Jackson",
		c_profile_url:
			"https://www.linkedin.com/sales/people/ACwAAA07M_oB9CwV1GITDumCRcvixq98a_27ZEM,NAME_SEARCH,1z3T?_ntb=G%2BY%2FgkzqSMakG7hOVyPK1Q%3D%3D",
		c_public_id: "joy-jackson-p1nk0ddy78",
		c_member_id: "221983738",
		date_conn_sent: "2018-10-17T10:12:02.840Z",
		date_accepted: "2018-10-17T10:12:02.840Z",
		invitation_message:
			"Hi %firstName%, I noticed you work at %company%. Happy to connect",
		follow_up_message:
			'Hi %firstName%. Thanks for connecting.\n\nI was wondering if you could help me.\n\nI just wrote this article "Has Science Finally Found a Cure for Period Pain?", and I\'m looking to spread the word about this product.\n\nhttps://www.buzzfeed.com/elishakay/has-science-finally-created-the-cure-for-period-pa-3ne9f\n\nIs this a kind of story that could be interesting to you or someone in your network?',
		attachments: "false",
		is_accepted: "removed",
		id: "5bc70af2edc8ae587c14b06c"
	},
	{
		user_id: "5bc2231aca978bf632655324",
		c_name: "James Laird",
		id: "5bc9a764ca94b4e17a69eb9c",
		...
	}
];



--------------------------------->>>>>>>>>>>>>>>>>>>>>>

[other API Calls:]

http://45.55.120.26/get_views/5bc2231aca978bf632655324

Response: {"success":"1","views":[]}

-----------------------

Request URL: http://45.55.120.26/remove_li_tags
Request Method: POST

Form Data: {
	user_id: 5bc2231aca978bf632655324
}

Response: 

[
	{
		user_id: "5bc2231aca978bf632655324",
		tag_name: "High Priority",
		linked_tag_id: "35512722",
		id: "5bcee422966ec8643c8e6de2"
	},
	{
		user_id: "5bc2231aca978bf632655324",
		tag_name: "Decision Maker",
		linked_tag_id: "35512752",
		id: "5bcee422966ec8643c8e6de1"
	},
	{
		user_id: "5bc2231aca978bf632655324",
		tag_name: "Opportunity",
		linked_tag_id: "35512712",
		id: "5bcee422813b69403c7e0154"
	}...
];

---------------------------

Request URL: http://45.55.120.26/add_tag
Request Method: POST

Form Data: 

{
linked_tag_id: 35512742
user_id: 5bc2231aca978bf632655324
tag_name: Customer
}

{"success":"1","message":"Tag Created"}