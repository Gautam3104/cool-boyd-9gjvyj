import React, { useState } from "react";
import AppointmentFlow from "../components/AppointmentFlow";
import "./../styles/App.css";

const AddIngredient = ({ setCurrentPage }) => {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    general: {
      ingredientName: "",
      scientificName: "",
      sanskritName: "",
      description: "",
      image: null,
      imagePreview: "",
    },
    benefits: {
      whyToUse: ["Lorem ipsum is simply dummy text of the printing industry."],
      prakriti: {
        vata: "",
        kapha: "",
        pitta: "",
        vataReason: "",
        kaphaReason: "",
        pittaReason: "",
      },
      benefitsList: [
        {
          emoji: "",
          text: "Lorem ipsum is simply dummy text of the printing industry.",
        },
      ],
    },
    properties: {
      rasa: "",
      veerya: "",
      guna: "",
      vipaka: "",
      formulations: [{ icon: null, text: "Lorem ipsum" }],
      therapeuticUses: [
        "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
      ],
    },
    other: {
      plantPart: "",
      plantDescription: "",
      plantRows: [
        { type: "Leave", description: "Lorem ipsum is simply dummy text..." },
        { type: "Bark", description: "Lorem ipsum is simply dummy text..." },
        { type: "Root", description: "Lorem ipsum is simply dummy text..." },
      ],
      bestCombinedWith: "",
      geoLocations: "",
    },
  });

  const goBackToList = () => setCurrentPage("ingredients-list");

  const handleGeneralChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      general: {
        ...prev.general,
        [field]: value,
      },
    }));
  };

  const handleBenefitsChange = (path, value) => {
    setForm((prev) => ({
      ...prev,
      benefits: { ...prev.benefits, [path]: value },
    }));
  };

  const handlePrakritiChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      benefits: {
        ...prev.benefits,
        prakriti: {
          ...prev.benefits.prakriti,
          [field]: value,
        },
      },
    }));
  };

  const handleOtherChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      other: { ...prev.other, [field]: value },
    }));
  };

  const handlePropertiesChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      properties: { ...prev.properties, [field]: value },
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setForm((prev) => ({
      ...prev,
      general: {
        ...prev.general,
        image: file,
        imagePreview: url,
      },
    }));
  };

  const onSubmitAll = () => {
    // For now just log. Hook this to API later.
    console.log("Final ingredient payload:", form);
    alert("Ingredient saved (check console for payload).");
    setCurrentPage("ingredients-list");
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  // ---- helpers for arrays ----
  const addWhyToUse = () => {
    setForm((prev) => ({
      ...prev,
      benefits: {
        ...prev.benefits,
        whyToUse: [...prev.benefits.whyToUse, ""],
      },
    }));
  };

  const updateWhyToUse = (index, value) => {
    setForm((prev) => {
      const arr = [...prev.benefits.whyToUse];
      arr[index] = value;
      return {
        ...prev,
        benefits: { ...prev.benefits, whyToUse: arr },
      };
    });
  };

  const removeWhyToUse = (index) => {
    setForm((prev) => {
      const arr = prev.benefits.whyToUse.filter((_, i) => i !== index);
      return {
        ...prev,
        benefits: { ...prev.benefits, whyToUse: arr },
      };
    });
  };

  const addBenefitRow = () => {
    setForm((prev) => ({
      ...prev,
      benefits: {
        ...prev.benefits,
        benefitsList: [...prev.benefits.benefitsList, { emoji: "", text: "" }],
      },
    }));
  };

  const updateBenefitRow = (index, field, value) => {
    setForm((prev) => {
      const list = [...prev.benefits.benefitsList];
      list[index] = { ...list[index], [field]: value };
      return {
        ...prev,
        benefits: { ...prev.benefits, benefitsList: list },
      };
    });
  };

  const removeBenefitRow = (index) => {
    setForm((prev) => {
      const list = prev.benefits.benefitsList.filter((_, i) => i !== index);
      return {
        ...prev,
        benefits: { ...prev.benefits, benefitsList: list },
      };
    });
  };

  const addFormulation = () => {
    setForm((prev) => ({
      ...prev,
      properties: {
        ...prev.properties,
        formulations: [
          ...prev.properties.formulations,
          { icon: null, text: "" },
        ],
      },
    }));
  };

  const updateFormulation = (index, value) => {
    setForm((prev) => {
      const list = [...prev.properties.formulations];
      list[index] = { ...list[index], text: value };
      return {
        ...prev,
        properties: { ...prev.properties, formulations: list },
      };
    });
  };

  const removeFormulation = (index) => {
    setForm((prev) => {
      const list = prev.properties.formulations.filter((_, i) => i !== index);
      return {
        ...prev,
        properties: { ...prev.properties, formulations: list },
      };
    });
  };

  const addTherapeuticUse = () => {
    setForm((prev) => ({
      ...prev,
      properties: {
        ...prev.properties,
        therapeuticUses: [...prev.properties.therapeuticUses, ""],
      },
    }));
  };

  const updateTherapeuticUse = (index, value) => {
    setForm((prev) => {
      const list = [...prev.properties.therapeuticUses];
      list[index] = value;
      return {
        ...prev,
        properties: { ...prev.properties, therapeuticUses: list },
      };
    });
  };

  const removeTherapeuticUse = (index) => {
    setForm((prev) => {
      const list = prev.properties.therapeuticUses.filter(
        (_, i) => i !== index
      );
      return {
        ...prev,
        properties: { ...prev.properties, therapeuticUses: list },
      };
    });
  };

  const addPlantRow = () => {
    setForm((prev) => ({
      ...prev,
      other: {
        ...prev.other,
        plantRows: [...prev.other.plantRows, { type: "", description: "" }],
      },
    }));
  };

  const updatePlantRow = (index, field, value) => {
    setForm((prev) => {
      const rows = [...prev.other.plantRows];
      rows[index] = { ...rows[index], [field]: value };
      return {
        ...prev,
        other: { ...prev.other, plantRows: rows },
      };
    });
  };

  const removePlantRow = (index) => {
    setForm((prev) => {
      const rows = prev.other.plantRows.filter((_, i) => i !== index);
      return {
        ...prev,
        other: { ...prev.other, plantRows: rows },
      };
    });
  };

  // ------------- step JSX --------------

  const renderStep1 = () => (
    <section className="card">
      <h2 className="card-section-title">General Information</h2>

      <div className="form-row-3">
        <div className="form-group">
          <label>
            Ingredient Name<span className="required">*</span>
          </label>
          <input
            type="text"
            className="field"
            value={form.general.ingredientName}
            onChange={(e) =>
              handleGeneralChange("ingredientName", e.target.value)
            }
            placeholder="Label"
          />
        </div>

        <div className="form-group">
          <label>
            Scientific Name<span className="required">*</span>
          </label>
          <input
            type="text"
            className="field"
            value={form.general.scientificName}
            onChange={(e) =>
              handleGeneralChange("scientificName", e.target.value)
            }
            placeholder="Label"
          />
        </div>

        <div className="form-group">
          <label>
            Sanskrit Name<span className="required">*</span>
          </label>
          <input
            type="text"
            className="field"
            value={form.general.sanskritName}
            onChange={(e) =>
              handleGeneralChange("sanskritName", e.target.value)
            }
            placeholder="Label"
          />
        </div>
      </div>

      <div className="form-group">
        <label>
          Ingredient Name<span className="required">*</span>
        </label>
        <textarea
          className="field textarea"
          value={form.general.description}
          onChange={(e) => handleGeneralChange("description", e.target.value)}
          placeholder="description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
        />
      </div>

      <div className="upload-image-wrapper">
        <label className="upload-label">Upload Image</label>
        <div className="upload-box">
          {form.general.imagePreview ? (
            <>
              <button
                className="upload-remove"
                type="button"
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    general: {
                      ...prev.general,
                      image: null,
                      imagePreview: "",
                    },
                  }))
                }
              >
                ✕
              </button>
              <img
                src={form.general.imagePreview}
                alt="ingredient"
                className="upload-preview-img"
              />
            </>
          ) : (
            <>
              <div className="upload-icon">🖼</div>
              <span className="upload-text">Upload Image</span>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            className="upload-input"
            onChange={handleImageChange}
          />
        </div>
      </div>
    </section>
  );

  const renderStep2 = () => (
    <section className="card">
      {/* Why to use */}
      <h2 className="card-section-title">Why To Use?</h2>
      {form.benefits.whyToUse.map((val, index) => (
        <div key={index} className="form-group inline-remove">
          <textarea
            className="field textarea"
            value={val}
            onChange={(e) => updateWhyToUse(index, e.target.value)}
            placeholder="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
          />
          {form.benefits.whyToUse.length > 1 && (
            <button
              type="button"
              className="line-remove-btn"
              onClick={() => removeWhyToUse(index)}
            >
              ✕
            </button>
          )}
        </div>
      ))}
      <button type="button" className="link-btn" onClick={addWhyToUse}>
        Add Another Items
      </button>

      {/* Prakriti Impact */}
      <h2 className="card-section-title mt-32">Prakriti Impact</h2>
      <div className="form-row-3">
        {["vata", "kapha", "pitta"].map((dosha) => (
          <div className="form-group" key={dosha}>
            <label className="label-with-req">
              {dosha.charAt(0).toUpperCase() + dosha.slice(1)}
              <span className="required">*</span>
            </label>
            <div className="select-wrapper">
              <select
                className="field select"
                value={form.benefits.prakriti[dosha]}
                onChange={(e) => handlePrakritiChange(dosha, e.target.value)}
              >
                <option value="">Select</option>
                <option value="Balanced">Balanced</option>
                <option value="Mildly increasing">Mildly Increasing</option>
                <option value="Unbalanced">Unbalanced</option>
                <option value="Aggravate">Aggravate</option>
              </select>
            </div>

            <input
              type="text"
              className="field mt-8"
              placeholder={`${
                dosha.charAt(0).toUpperCase() + dosha.slice(1)
              } Reason`}
              value={form.benefits.prakriti[`${dosha}Reason`]}
              onChange={(e) =>
                handlePrakritiChange(`${dosha}Reason`, e.target.value)
              }
            />
          </div>
        ))}
      </div>

      {/* Benefits list */}
      <h2 className="card-section-title mt-32">Benefits</h2>
      {form.benefits.benefitsList.map((row, index) => (
        <div key={index} className="benefits-row">
          <button
            type="button"
            className="btn-emoji"
            onClick={() => updateBenefitRow(index, "emoji", row.emoji || "❤️")}
          >
            {row.emoji || "Add Emoji"}
          </button>
          <input
            type="text"
            className="field flex-1"
            value={row.text}
            onChange={(e) => updateBenefitRow(index, "text", e.target.value)}
            placeholder="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
          />
          {form.benefits.benefitsList.length > 1 && (
            <button
              type="button"
              className="line-remove-btn"
              onClick={() => removeBenefitRow(index)}
            >
              ✕
            </button>
          )}
        </div>
      ))}
      <button type="button" className="link-btn" onClick={addBenefitRow}>
        Add Another Items
      </button>
    </section>
  );

  const renderStep3 = () => (
    <section className="card">
      <h2 className="card-section-title">Ayurvedic Properties</h2>

      <div className="form-row-2">
        <div className="form-group">
          <label>
            Rasa<span className="required">*</span>
          </label>
          <input
            type="text"
            className="field"
            value={form.properties.rasa}
            onChange={(e) => handlePropertiesChange("rasa", e.target.value)}
            placeholder="Type here..."
          />
        </div>
        <div className="form-group">
          <label>
            Veerya<span className="required">*</span>
          </label>
          <input
            type="text"
            className="field"
            value={form.properties.veerya}
            onChange={(e) => handlePropertiesChange("veerya", e.target.value)}
            placeholder="Type here..."
          />
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label>Guna</label>
          <input
            type="text"
            className="field"
            value={form.properties.guna}
            onChange={(e) => handlePropertiesChange("guna", e.target.value)}
            placeholder="Type here..."
          />
        </div>
        <div className="form-group">
          <label>
            Vipaka<span className="required">*</span>
          </label>
          <input
            type="text"
            className="field"
            value={form.properties.vipaka}
            onChange={(e) => handlePropertiesChange("vipaka", e.target.value)}
            placeholder="Type here..."
          />
        </div>
      </div>

      {/* Important Formulations */}
      <h2 className="card-section-title mt-32">Important Formulations</h2>
      {form.properties.formulations.map((row, index) => (
        <div key={index} className="benefits-row">
          <button type="button" className="btn-upload-icon">
            Upload icon
          </button>
          <input
            type="text"
            className="field flex-1"
            value={row.text}
            onChange={(e) => updateFormulation(index, e.target.value)}
            placeholder="Lorem ipsum"
          />
          {form.properties.formulations.length > 1 && (
            <button
              type="button"
              className="line-remove-btn"
              onClick={() => removeFormulation(index)}
            >
              ✕
            </button>
          )}
        </div>
      ))}
      <button type="button" className="link-btn" onClick={addFormulation}>
        Add Another Items
      </button>

      {/* Therapeutic Uses */}
      <h2 className="card-section-title mt-32">Therapeutic Uses</h2>
      {form.properties.therapeuticUses.map((val, index) => (
        <div key={index} className="form-group inline-remove">
          <textarea
            className="field textarea"
            value={val}
            onChange={(e) => updateTherapeuticUse(index, e.target.value)}
            placeholder="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
          />
          {form.properties.therapeuticUses.length > 1 && (
            <button
              type="button"
              className="line-remove-btn"
              onClick={() => removeTherapeuticUse(index)}
            >
              ✕
            </button>
          )}
        </div>
      ))}
      <button type="button" className="link-btn" onClick={addTherapeuticUse}>
        Add Another Items
      </button>
    </section>
  );

  const renderStep4 = () => (
    <section className="card">
      <h2 className="card-section-title">Plant Parts And Its Purpose</h2>

      <div className="form-row-2 align-end">
        <div className="form-group">
          <label>
            Plant Part<span className="required">*</span>
          </label>
          <select
            className="field select"
            value={form.other.plantPart}
            onChange={(e) => handleOtherChange("plantPart", e.target.value)}
          >
            <option value="">Select</option>
            <option value="Leaf">Leaf</option>
            <option value="Bark">Bark</option>
            <option value="Root">Root</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            Description<span className="required">*</span>
          </label>
          <input
            type="text"
            className="field"
            value={form.other.plantDescription}
            onChange={(e) =>
              handleOtherChange("plantDescription", e.target.value)
            }
            placeholder="Type here..."
          />
        </div>
        <div className="plant-btn-group">
          <button
            type="button"
            className="btn-square-green"
            onClick={addPlantRow}
          >
            +
          </button>
          <button
            type="button"
            className="btn-square-grey"
            onClick={() => handleOtherChange("plantDescription", "")}
          >
            ✕
          </button>
        </div>
      </div>

      <div className="plant-table">
        <div className="plant-table-head">
          <div>Type</div>
          <div>Description</div>
        </div>
        {form.other.plantRows.map((row, index) => (
          <div className="plant-table-row" key={index}>
            <input
              type="text"
              className="field"
              value={row.type}
              onChange={(e) => updatePlantRow(index, "type", e.target.value)}
            />
            <input
              type="text"
              className="field"
              value={row.description}
              onChange={(e) =>
                updatePlantRow(index, "description", e.target.value)
              }
            />
            <button
              type="button"
              className="line-remove-btn"
              onClick={() => removePlantRow(index)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="form-group mt-32">
        <label>
          Best Combined With<span className="required">*</span>
        </label>
        <input
          type="text"
          className="field"
          value={form.other.bestCombinedWith}
          onChange={(e) =>
            handleOtherChange("bestCombinedWith", e.target.value)
          }
          placeholder="Type here..."
        />
      </div>

      <div className="form-group">
        <label>
          Geographical Locations<span className="required">*</span>
        </label>
        <textarea
          className="field textarea"
          value={form.other.geoLocations}
          onChange={(e) => handleOtherChange("geoLocations", e.target.value)}
          placeholder="Type here..."
        />
      </div>
    </section>
  );

  const renderStep5 = () => (
    <section className="card">
      <h2 className="card-section-title">Overview</h2>
      <p className="overview-text">
        Review all the information you have added for this ingredient. If
        everything looks good, click <strong>Save</strong> to create the
        ingredient.
      </p>

      <div className="overview-grid">
        <div>
          <h3 className="overview-heading">General</h3>
          <p>
            <strong>Name:</strong> {form.general.ingredientName}
          </p>
          <p>
            <strong>Scientific:</strong> {form.general.scientificName}
          </p>
          <p>
            <strong>Sanskrit:</strong> {form.general.sanskritName}
          </p>
          <p>
            <strong>Description:</strong> {form.general.description}
          </p>
        </div>

        <div>
          <h3 className="overview-heading">Benefits</h3>
          <p>
            <strong>Why to use:</strong>
          </p>
          <ul className="overview-list">
            {form.benefits.whyToUse.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
          <p>
            <strong>Prakriti Impact:</strong>
          </p>
          <p>
            Vata – {form.benefits.prakriti.vata} (
            {form.benefits.prakriti.vataReason})
          </p>
          <p>
            Kapha – {form.benefits.prakriti.kapha} (
            {form.benefits.prakriti.kaphaReason})
          </p>
          <p>
            Pitta – {form.benefits.prakriti.pitta} (
            {form.benefits.prakriti.pittaReason})
          </p>
        </div>

        <div>
          <h3 className="overview-heading">Properties</h3>
          <p>
            <strong>Rasa:</strong> {form.properties.rasa}
          </p>
          <p>
            <strong>Veerya:</strong> {form.properties.veerya}
          </p>
          <p>
            <strong>Guna:</strong> {form.properties.guna}
          </p>
          <p>
            <strong>Vipaka:</strong> {form.properties.vipaka}
          </p>
        </div>

        <div>
          <h3 className="overview-heading">Other</h3>
          <p>
            <strong>Best combined with:</strong> {form.other.bestCombinedWith}
          </p>
          <p>
            <strong>Locations:</strong> {form.other.geoLocations}
          </p>
        </div>
      </div>
    </section>
  );

  return (
    <div className="page-shell">
      <div className="page-breadcrumb">
        <span className="breadcrumb-click" onClick={goBackToList}>
          Ingredient
        </span>
        <span className="breadcrumb-separator">›</span>
        <span>Add Ingredient</span>
      </div>

      <h1 className="page-title">Add Ingredient</h1>

      <AppointmentFlow currentStep={step} />

      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {step === 4 && renderStep4()}
      {step === 5 && renderStep5()}

      {/* bottom save/next buttons like in Figma */}
      <div className="bottom-actions">
        <button
          type="button"
          className="btn-bottom-save"
          onClick={step === 5 ? onSubmitAll : nextStep}
        >
          {step === 5 ? "Save" : "Save"}
        </button>
        <button
          type="button"
          className="btn-bottom-next"
          onClick={step === 5 ? onSubmitAll : nextStep}
        >
          {step === 5 ? "Finish" : "Next"}
        </button>
        {step > 1 && (
          <button type="button" className="btn-bottom-back" onClick={prevStep}>
            Back
          </button>
        )}
      </div>
    </div>
  );
};

export default AddIngredient;
