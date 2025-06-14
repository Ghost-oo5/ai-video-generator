import { SuplimaxForm } from './SuplimaxForm';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import { useSuplimaxGenerator } from '@/app/hooks/useSuplimaxGenerator';

export const SuplimaxSection = () => {
  const {
    form, setForm, imageUrl, videoScript, imagePrompt,
    isLoading, loadingMessage, error,
    submit
  } = useSuplimaxGenerator();

  return (
    <>
      <SuplimaxForm
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
