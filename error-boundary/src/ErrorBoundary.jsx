import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
    </div>
  );
}

function MyErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => {
        console.log("Error:", error);
        console.log("Info:", info);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

export default MyErrorBoundary;