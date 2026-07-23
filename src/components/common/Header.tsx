import React, { useState } from 'react';
import { Search, Heart, ShieldCheck, Globe, Menu, X, UserCheck, Layers, Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { CATEGORIES } from '../../data/categories';
import { Language } from '../../types';
import { NovenLogo } from './NovenLogo';

interface HeaderProps {
  favoritesCount: number;
  onOpenFavorites: () => void;
  onOpenAdminModal: () => void;
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  favoritesCount,
  onOpenFavorites,
  onOpenAdminModal,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  currentView,
  onNavigate,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'rw', label: 'Kinyarwanda', flag: '🇷🇼' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-100">
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center text-left group cursor-pointer"
          >
            <NovenLogo size="md" inline variant="dark" />
          </button>
        </div>

        {/* Large Alibaba-Style Search Bar */}
        <form
          onSubmit={onSearchSubmit}
          className="hidden md:flex flex-1 max-w-2xl items-center border-2 border-orange-500 rounded-full bg-white shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-orange-200 transition-all"
        >
          {/* Category Dropdown inside Search Bar */}
          <select
            value={selectedCategory}
            onChange={(e) => onSelectCategory(e.target.value)}
            className="bg-gray-50 text-gray-700 text-xs font-semibold px-4 py-2.5 border-r border-gray-200 outline-none cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <option value="">{t('search.categoryAll')}</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>

          {/* Text Input */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t('search.placeholder')}
            className="flex-1 px-4 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none"
          />

          {/* Search Action Button */}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 font-bold text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>{t('search.button')}</span>
          </button>
        </form>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          {/* Favorites Button */}
          <button
            onClick={onOpenFavorites}
            className="relative p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all cursor-pointer flex items-center gap-1"
            title={t('nav.favorites')}
          >
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500/10" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-pulse">
                {favoritesCount}
              </span>
            )}
            <span className="hidden lg:inline text-xs font-semibold text-gray-700">
              {t('nav.favorites')}
            </span>
          </button>

          {/* Language Switcher */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 text-xs font-bold text-gray-700 px-2.5 py-1.5 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all cursor-pointer">
              <Globe className="w-4 h-4 text-orange-500" />
              <span className="uppercase">{language}</span>
            </button>
            <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-100 rounded-xl shadow-xl py-1 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-orange-50 transition-colors ${
                    language === lang.code ? 'font-bold text-orange-600 bg-orange-50/50' : 'text-gray-700'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Admin Login Button */}
          <button
            onClick={onOpenAdminModal}
            className="flex items-center gap-1.5 text-xs font-bold bg-gray-900 hover:bg-orange-600 text-white px-3 py-2 rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t('nav.adminLogin')}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-orange-600 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <nav className="bg-gray-900 text-white border-t border-gray-800 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-3 flex items-center gap-2 hover:bg-gray-800 border-b-2 transition-all ${
                currentView === 'home' ? 'border-orange-500 font-bold text-orange-400 bg-gray-800/50' : 'border-transparent text-gray-200'
              }`}
            >
              <span>{t('nav.home')}</span>
            </button>

            <button
              onClick={() => onNavigate('products')}
              className={`px-4 py-3 flex items-center gap-2 hover:bg-gray-800 border-b-2 transition-all ${
                currentView === 'products' ? 'border-orange-500 font-bold text-orange-400 bg-gray-800/50' : 'border-transparent text-gray-200'
              }`}
            >
              <Layers className="w-4 h-4 text-orange-400" />
              <span>{t('nav.products')}</span>
            </button>

            <button
              onClick={() => onNavigate('featured')}
              className={`px-4 py-3 flex items-center gap-2 hover:bg-gray-800 border-b-2 transition-all ${
                currentView === 'featured' ? 'border-orange-500 font-bold text-orange-400 bg-gray-800/50' : 'border-transparent text-gray-200'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t('nav.featured')}</span>
            </button>

            <button
              onClick={() => onNavigate('new-arrivals')}
              className={`px-4 py-3 hover:bg-gray-800 border-b-2 transition-all ${
                currentView === 'new-arrivals' ? 'border-orange-500 font-bold text-orange-400 bg-gray-800/50' : 'border-transparent text-gray-200'
              }`}
            >
              <span>{t('nav.newArrivals')}</span>
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`px-4 py-3 hover:bg-gray-800 border-b-2 transition-all ${
                currentView === 'contact' ? 'border-orange-500 font-bold text-orange-400 bg-gray-800/50' : 'border-transparent text-gray-200'
              }`}
            >
              <span>{t('nav.contact')}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-orange-300 font-semibold py-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Direct Supplier Advertisements • Verified Products</span>
          </div>
        </div>
      </nav>

      {/* Mobile Search & Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <form onSubmit={onSearchSubmit} className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t('search.placeholder')}
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-xs"
            >
              {t('search.button')}
            </button>
          </form>

          <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="p-2.5 bg-gray-50 rounded-lg text-left text-gray-800 hover:bg-orange-50 hover:text-orange-600"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => { onNavigate('products'); setMobileMenuOpen(false); }}
              className="p-2.5 bg-gray-50 rounded-lg text-left text-gray-800 hover:bg-orange-50 hover:text-orange-600"
            >
              {t('nav.products')}
            </button>
            <button
              onClick={() => { onNavigate('featured'); setMobileMenuOpen(false); }}
              className="p-2.5 bg-gray-50 rounded-lg text-left text-gray-800 hover:bg-orange-50 hover:text-orange-600"
            >
              {t('nav.featured')}
            </button>
            <button
              onClick={() => { onNavigate('new-arrivals'); setMobileMenuOpen(false); }}
              className="p-2.5 bg-gray-50 rounded-lg text-left text-gray-800 hover:bg-orange-50 hover:text-orange-600"
            >
              {t('nav.newArrivals')}
            </button>
            <button
              onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
              className="p-2.5 bg-gray-50 rounded-lg text-left text-gray-800 hover:bg-orange-50 hover:text-orange-600"
            >
              {t('nav.contact')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
