const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp()

const filesCollection = admin.firestore().collection('files');
exports.storageFinalize = functions.storage.object().onFinalize((object, context) => {
	// Store file by name
	return filesCollection
		.doc(object.name)
		.set(object)
		.then(() => console.log('Stored file information'));
});

exports.storageDelete = functions.storage.object().onDelete((object, context) => {
	// Delete file by name
	return filesCollection
		.doc(object.name)
		.delete()
		.then(() => console.log('Deleted file information'));
})