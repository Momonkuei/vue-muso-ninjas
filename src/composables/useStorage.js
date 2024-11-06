import { projectStorage } from '../firebase/config';
import { ref } from 'vue';
import getUser from './getUser';

const { user } = getUser();

const useStorage = () => {
	const error = ref(null);
	const url = ref(null);
	const filePath = ref(null);

	const uploadImage = async file => {
		//1.Create a file path
		filePath.value = `covers/${user.value.uid}/${file.name}`;
		//2.make a Firebase Storage reference.
		const storageRef = projectStorage.ref(filePath.value);

		try {
			// 3.Upload the file to that ref using put ()
			const res = await storageRef.put(file);
			url.value = await res.ref.getDownloadURL();
		} catch (err) {
			console.log(err.message);
			error.value = err.message;
		}
	};

	const deleteImage = async path => {
		const storageRef = projectStorage.ref(path);

		try {
			await storageRef.delete();
		} catch (err) {
			console.log(err.message);
			error.value = err.message;
		}
	};

	return { uploadImage, error, url, filePath, deleteImage };
};

export default useStorage;
