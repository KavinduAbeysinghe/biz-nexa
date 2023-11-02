import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface TabPanelProps {
  options: Array<{ title: string; body: ReactJSXElement; active?: boolean }>;
}

export const TabPanel = ({ options }: TabPanelProps) => {
  return (
    <>
      <div className="flex overflow-auto">
        <div className="flex bg-gray-100 bg-gray-200 rounded-lg transition p-1">
          <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
            {options?.map(
              (
                option: {
                  title: string;
                  body: ReactJSXElement;
                  active?: boolean;
                },
                index: number,
              ) => (
                <button
                  key={index}
                  type="button"
                  className={`hs-tab-active:bg-white hs-tab-active:text-gray-700 py-2 px-4 inline-flex items-center gap-2 bg-transparent text-sm text-gray-500 hover:text-gray-700 font-medium rounded-md hover:hover:text-blue-600 ${
                    option?.active && "active"
                  }`}
                  id={`segment-item-${index + 1}`}
                  data-hs-tab={`#segment-${index + 1}`}
                  aria-controls={`segment-${index + 1}`}
                  role="tab"
                >
                  {option?.title}
                </button>
              ),
            )}
          </nav>
        </div>
      </div>

      <div className="mt-3">
        {options?.map(
          (
            option: { title: string; body: ReactJSXElement; active?: boolean },
            index,
          ) => (
            <div
              className={!option?.active ? "hidden" : ""}
              id={`segment-${index + 1}`}
              role="tabpanel"
              aria-labelledby={`segment-item-${index + 1}`}
            >
              {option?.body}
            </div>
          ),
        )}
      </div>
    </>
  );
};
