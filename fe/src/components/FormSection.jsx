const FormSection = ({
                         form,
                         handleInputChange,
                         createArticle,
                         resetForm,
                         onCancel,
                         title = "Tambah Data Informasi",
                         isEditing = false,
                     }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 transform transition-all hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700 border-b pb-2">
                {title}
            </h2>
            <form onSubmit={createArticle} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Input Fields */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Judul</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Masukan Judul"
                            value={form.title}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Nama</label>
                        <input
                            type="text"
                            name="author"
                            placeholder="Masukan Nama"
                            value={form.author}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Waktu</label>
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Lokasi</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Masukan Lokasi"
                            value={form.location}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                            required
                        />
                    </div>
                    <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Gambar</label>
                    <input
                        type="text"
                        name="link_img"  // Fix 'linkImg' to 'link_img'
                        placeholder="Masukan Link Gambar"
                        value={form.link_img}  // Update 'form.linkImg' to 'form.link_img'
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        required
                    />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Deskripsi</label>
                    <textarea
                        name="description"
                        placeholder="Masukan Deskripsi"
                        value={form.description}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors h-24 resize-none"
                        required
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">Konten</label>
                    <textarea
                        name="content"
                        placeholder="Masukan Konten"
                        value={form.content}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors h-32 resize-none"
                        required
                    />
                </div>
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
                    >
                        {isEditing ? 'Edit' : 'Tambah'} 
                    </button>
                    <button
                        type="button"
                        onClick={resetForm}
                        className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 shadow-md"
                    >
                        Reset
                    </button>
                    <button
                        type="button"
                        onClick={onCancel} // Call the cancel handler
                        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-md"
                    >
                        Batal
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormSection;
