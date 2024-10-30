import { ref } from 'vues';
import { projectFirestore } from '../firebase/config';

const useCollection = () => {
	const error = ref(null);

	const addDoc = async () => {
		error.value = null;

		try {
		} catch (err) {}
	};
};

export default useCollection;
