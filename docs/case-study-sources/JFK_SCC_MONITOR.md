# JFK Law LLP — Supreme Court of Canada Decision Monitor (Approved Public Facts)

- Client name: JFK Law LLP.
- Solution name: Supreme Court of Canada Decision Monitor (SCC RSS Feed Monitor).
- Status: production internal tool / operational system.
- Purpose: automatically monitor new Supreme Court of Canada publications and alert legal users when content relevant to their matters appears.
- Monitored sources: Applications for Leave and Judgments.
- Run cadence: automatically every hour.
- Users create reusable Scan Profiles containing keywords, document categories, optional outcome/status filters, recipients, and an optional AI-summary setting.
- Profiles may be created per client matter, practice area, party name, topic, legislation, legal concept, or geographic reference.
- The system retrieves and stores SCC documents in a SharePoint document library.
- The system maintains searchable historical feed items, extracted text, profiles, and scan results in the internal SharePoint site.
- When a match is found, the email notification can contain case name and docket number, document type, outcome/status, jurisdiction, the SCC document link, and an AI-generated plain-language summary when enabled.
- The email is designed to provide enough information for a brief relevance assessment without requiring the user to open the internal site first.
- Historical matches remain reviewable in the SharePoint site.
- The tool is for keyword monitoring and triage, not a replacement for legal research or professional legal judgement.
- Technologies that may be named where accurate: SharePoint Online, Microsoft Lists, SharePoint document libraries, Power Automate, RSS, Microsoft 365, AI-assisted summarization.
- RTH Tech Services Inc. designed and implemented the solution for JFK Law LLP.
- Exclude internal tenant URLs, list IDs, library IDs, credentials, exact prompts, private matter names, private party names, and client data.
