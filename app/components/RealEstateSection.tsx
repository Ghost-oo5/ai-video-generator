import { useRealEstateGenerator } from '@/app/hooks/useRealEstateGenerator';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { RealEstateForm } from './RealEstateForm';

export const RealEstateSection = () => {
  const {
    form, setForm, isLoading, loadingMessage, error, submit
  } = useRealEstateGenerator();

  return (
    <>
      <RealEstateForm
        formData={form}
        onFormChange={setForm}
        onSubmit={submit}
        isLoading={isLoading}
      />
      {error && <ErrorMessage message={error} />}
      {isLoading && <LoadingSpinner message={loadingMessage} />}

   
    </>
  );
};
