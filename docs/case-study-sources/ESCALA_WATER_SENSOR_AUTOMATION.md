# Escala Residences — Water Sensor Automation (Approved Public Facts)

- Client/context name: Escala Residences.
- Solution name: Water Sensor Automation.
- Status: in production and maintained by RTH Tech Services Inc.
- Primary users: on-site concierge and property-management staff.
- Before automation, leak alerts arrived as plain emails in a shared mailbox. Staff had to read the email, identify the device/location/unit, look up the resident contact, and manually create a Service Request. This occurred around the clock and was slow, inconsistent, and vulnerable to missed alerts.
- Alert path:
  1. A building water-leak sensor detects water and sends an alert email.
  2. The automation parses device, location, unit, and alert time.
  3. The event is recorded in an operational log.
  4. The affected unit and designated contact are looked up in the property-management platform.
  5. A pre-populated Service Request is created within seconds.
  6. Concierge handles it in the existing queue and interface.
- Recovery path: a return-to-normal email is received, the matching open Service Request is located, and the request is closed automatically with a note.
- Exception handling: designated on-call staff receive an exception email when the automation cannot complete a step; the original sensor emails remain in the shared mailbox as the fallback record; staff can revert to the previous manual process without reconfiguration.
- Benefits that may be stated without invented percentages: Service Requests created within seconds; consistent information formatting; automatic closure of resolved sensor events; no new interface or day-to-day tool for concierge; auditable mailbox, workflow run history, and operational log.
- Technologies/systems that may be named: Microsoft 365 shared mailbox; Microsoft 365 automation services / Power Automate where supported by current implementation; existing building water-leak sensor system; Condo Control / the property-management platform; operational logging; version-controlled supporting scripts and documentation.
- Known constraints appropriate for a public case study: dependency on the vendor’s email format; common-area sensors have no resident contact; units without a designated contact still produce a Service Request with a note; current configuration is property-specific; fallback depends on original mailbox alerts remaining available.
- Future improvements may be described as roadmap rather than delivered outcomes: managed secret storage; stronger common-area labelling; more resilient operational-log reporting; scheduled parsing tests; configuration parameterisation.
- Exclude credentials, tenant URLs, service-account identifiers, private resident information, sensor addresses, unit numbers, internal endpoints, and implementation secrets.
