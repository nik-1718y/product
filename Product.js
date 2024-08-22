import { Mock } from '../api/Mock';

useEffect(() => {
    // Use mock data instead of fetching
    setProducts(mockProducts);
    setLoading(false);
}, []);
