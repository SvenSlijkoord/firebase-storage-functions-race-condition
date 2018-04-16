# firebase-storage-functions-race-condition
Minimal, complete and verifiable exampmle showing firebase cloud storage functions race condition

# How to:
Step 1: Deploy cloud functions
Step 2: Open src/index.html in a browser
Step 3: Enter a filename in the input
Step 4: Click the "Upload file by filename" button
Step 5: Verify the file stored, and an entry is made in firestore

Now we can test the behavior.
Step 6: Click the "Upload file by filename" button again.
Step 7: Watch what happens in firestore.

Repeat step 6-7
