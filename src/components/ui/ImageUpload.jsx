import { useState } from 'react';
import { supabase } from '../../utils/supaBaseClient';

function ImageUpload({ setContent, contentType, newContent }) {
    const [uploading, setUploading] = useState(false);
    const handleImageUpload = async (e) => {
        try {
            setUploading(true);
            const file = e.target.files[0];
            if (!file) return;

            // Create a unique file name
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
            const filePath = `${contentType}/${fileName}`;

            // Upload to Supabase storage
            const { data, error } = await supabase.storage
                .from('CoverImages')
                .upload(filePath, file);

            if (error) throw error;

            // Get public URL
            const { data: { publicUrl } } = supabase.storage
                .from('CoverImages')
                .getPublicUrl(filePath);

            // Update form state
            setContent(prev => ({ ...prev, imageUrl: publicUrl }));
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Error uploading image');
        } finally {
            setUploading(false);
        }
    };
    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Titelbild</label>
            <div className="flex items-center space-x-4">
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e)}
                    className="hidden"
                    id="media-image-upload"
                    disabled={uploading}
                />
                <label
                    htmlFor="media-image-upload"
                    className="px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-50"
                >
                    {uploading ? 'Wird hochgeladen...' : 'Bild auswählen'}
                </label>
                {newContent.imageUrl && (
                    <div className="relative w-20 h-20">
                        <img
                            src={newContent.imageUrl}
                            alt="Cover preview"
                            className="w-full h-full object-cover rounded"
                        />
                        <button
                            type="button"
                            onClick={() => setContent(prev => ({ ...prev, imageUrl: '' }))}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImageUpload;