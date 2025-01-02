import React from 'react';
import ImageUpload from './ImageUpload';

function ContentForm({ handleAddContent, setContent, newContent, setIsAdding, contentType }) {
    const handleChange = (field) => (e) => {
        setContent(prev => ({
            ...prev,
            [field]: e.target.value
        }));
    };

    return (
        <form onSubmit={handleAddContent} className="mb-8 space-y-4 p-6 border rounded-lg bg-white shadow-sm">
            <input
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Titel"
                value={newContent.title}
                onChange={handleChange('title')}
                required
            />
            <textarea
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Inhalt"
                value={newContent.text}
                onChange={handleChange('text')}
                rows={10}
                required
            />
            <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg"
                value={newContent.date}
                onChange={handleChange('date')}
                required
            />
            <ImageUpload
                setContent={setContent}
                contentType={contentType}
                newContent={newContent}
            />
            <div className="flex justify-end gap-2">
                <button
                    type="button"
                    onClick={() => setIsAdding(false)}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                    Abbrechen
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    {contentType === 'blog' ? "Blog Post hinzufügen" : "In den Medien Post hinzufügen"}
                </button>
            </div>
        </form>
    );
}

export default ContentForm;