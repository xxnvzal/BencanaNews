import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import Header from "../layout/header.jsx";
import FormSection from "../components/FormSection.jsx";
import {
    fetchArticles,
    createArticle,
    updateArticle,
    deleteArticle,
    setFormVisibility,
    setEditingArticleId,
    setForm,
    resetForm
} from '../store/articlesSlice.jsx';
import Sider from "../layout/sider.jsx";
import Footer from "../layout/footer.jsx";
import { PlusIcon } from 'lucide-react';

const Articles = () => {
    const dispatch = useDispatch();
    const {
        articles,
        loading,
        isFormVisible,
        editingArticleId,
        form
    } = useSelector(state => state.articles);

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    });

    const handleCreateArticle = async (e) => {
        e.preventDefault();
        try {
            await dispatch(createArticle(form)).unwrap();
            Swal.fire({
                icon: 'success',
                title: 'Berhasil Membuat Informasi!'
            });
            dispatch(fetchArticles());
            dispatch(resetForm());
            dispatch(setFormVisibility(false));
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal Mmebuat Informasi!'
            });
        }
    };

    const handleDeleteClick = async (id) => {
        const result = await Swal.fire({
            title: 'Pengen Dihapus Tenan?',
            text: "Iki Info Penting Lho!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Hapus',
            backdrop: true,
        });

        if (result.isConfirmed) {
            try {
                await dispatch(deleteArticle(id)).unwrap();
                Swal.fire({
                    icon: 'success',
                    title: 'Wes Kehapus!'
                });
                dispatch(fetchArticles());
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal Menhapus!'
                });
            }
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await dispatch(updateArticle({ id: editingArticleId, articleData: form })).unwrap();
            Swal.fire({
                icon: 'success',
                title: 'Berhasil Mengupdate Informasi!'
            });
            dispatch(fetchArticles());
            dispatch(resetForm());
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Gagal Mengubah Infromasi'
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(setForm({ ...form, [name]: value }));
    };

    return (
        <>
            <div className="bg-gray-100">
                <div className="flex min-h-screen">
                    <Sider />

                    <div className="flex-1 flex flex-col">
                        <Header />
                        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-between items-center mb-8">
                                    <h1 className="text-4xl font-bold text-gray-800 drop-shadow-sm">
                                        Informasi Seputar Bencana
                                    </h1>
                                    <button
                                        onClick={() => {
                                            dispatch(setFormVisibility(true));
                                            dispatch(setEditingArticleId(null));
                                        }}
                                        className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >Tambah Info
                                         {/* Ikon plus */}
                                    </button>
                                </div>

                                {isFormVisible && (
                                    <FormSection
                                        form={form}
                                        handleInputChange={handleInputChange}
                                        createArticle={editingArticleId ? handleUpdate : handleCreateArticle}
                                        resetForm={() => dispatch(resetForm())}
                                        onCancel={() => dispatch(setFormVisibility(false))}
                                        title={editingArticleId ? "Edit Article" : "Tambah Data Informasi"}
                                        isEditing={!!editingArticleId}
                                    />
                                )}

                                {loading ? (
                                    <div className="flex items-center justify-center py-12">
                                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {articles.map((article) => (
                                            <div key={article.ID}
                                                 className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                                                <div className="p-6">
                                                    <h2 className="text-xl font-bold mb-2 text-gray-800">{article.title}</h2>
                                                    <div className="flex items-center gap-2 mb-4 text-gray-600">
                                                        <span className="text-sm">{article.author}</span>
                                                        <span className="text-sm">•</span>
                                                        <span className="text-sm">
                                                            {new Date(article.date).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                    <img
                                                        src={article.link_img}
                                                        alt={article.title}
                                                    />
                                                    <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                                                    <div className="flex gap-3">
                                                        <button
                                                            onClick={() => handleDeleteClick(article.ID)}
                                                            className="flex-1 px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                                        >
                                                            Hapus
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                dispatch(setFormVisibility(true));
                                                                dispatch(setEditingArticleId(article.ID));
                                                                dispatch(setForm({
                                                                    title: article.title,
                                                                    description: article.description,
                                                                    content: article.content,
                                                                    date: article.date,
                                                                    author: article.author,
                                                                    location: article.location,
                                                                    link_img: article.link_img,
                                                                }));
                                                            }}
                                                            className="flex-1 px-4 py-2 bg-yellow-500 text-white text-sm rounded-lg hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                                                        >
                                                            Edit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Articles;
