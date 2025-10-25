import React from "react";

interface Field {

    label: string;
    type: string;
    options?: string[];
}

interface Section {
    id: number;
    label: string;
    icon: string;
    fields: Field[];
}

interface DynamicSectionProps {
    section: Section;
}

const DynamicSection: React.FC<DynamicSectionProps> = ({ section }) => {
    const { label, icon, fields } = section;

    return (
        <div className="border rounded-lg p-6 shadow-sm bg-white mb-6">
            <div className="flex items-center gap-3 mb-4">
                <img src={icon} alt={label} className="w-6 h-6" />
                <h2 className="text-lg font-semibold text-gray-800">{label}</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {fields.map((field: Field) =>
                    field.type === "select" ? (
                        <select
                            key={field.label}
                            className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select {field.label}</option>
                            {field.options?.map((option: string) => (
                                <option key={option}>{option}</option>
                            ))}
                        </select>
                    ) : (
                        <input
                            key={field.label}
                            type={field.type}
                            placeholder={`Enter ${field.label}`}
                            className="w-full px-4 py-2 bg-zinc-100 text-stone-700 text-xs font-medium rounded-lg shadow-sm border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default DynamicSection;
