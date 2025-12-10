import React from "react";
import "../styles/AppointmentFlow.css";

const AppointmentFlow = ({ currentStep }) => {
  const steps = [
    { id: 1, label: "General information" },
    { id: 2, label: "Benefits" },
    { id: 3, label: "Properties" },
    { id: 4, label: "Other" },
    { id: 5, label: "Overview" },
  ];

  return (
    <div className="flow-wrapper">
      {steps.map((step, index) => {
        const isComplete = step.id < currentStep;
        const isActive = step.id === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div key={step.id} className="flow-step-item">
            <div className="flow-circle-line">
              <div
                className={[
                  "flow-circle",
                  isComplete ? "flow-circle-complete" : "",
                  isActive ? "flow-circle-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {isComplete ? "✓" : step.id.toString().padStart(2, "0")}
              </div>
              {!isLast && (
                <div
                  className={[
                    "flow-line",
                    isComplete ? "flow-line-complete" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
              )}
            </div>
            <div
              className={[
                "flow-label",
                isActive ? "flow-label-active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {step.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppointmentFlow;
