"use client"
import { useRouter } from 'next/navigation';

const FilterForm = () => {
  const router = useRouter();

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    const query = { ...router.query };

    if (checked) {
      // Add the category parameter to the query
      query.category = 'electronics';
    } else {
      // Remove the category parameter from the query
      delete query.category;
    }

    // Update the URL with the new query parameters
    router.push({ pathname: router.pathname, query });
  };

  return (
    <form>
      <label>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={router?.query?.category === 'electronics'}
        />
        Electronics
      </label>
      {/* Other category checkboxes */}
    </form>
  );
};

export default FilterForm;
