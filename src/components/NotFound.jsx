import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import Plasma from './Plasma';
import Header from './Header';
import CursorFollower from './CursorFollower';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen overflow-x-hidden bg-black relative">
            <CursorFollower />
            <Header />
            
            {/* Plasma Background */}
            <div className="fixed inset-0 w-full h-full z-0">
                <Plasma 
                    color="#ff6b35"
                    speed={0.6}
                    direction="forward"
                    scale={1.1}
                    opacity={0.8}
                    mouseInteractive={true}
                />
            </div>

            {/* Content */}
            <main className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="space-y-6 sm:space-y-8"
                    >
                        {/* 404 Number */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-white leading-none"
                        >
                            404
                        </motion.h1>

                        {/* Error Message */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white"
                        >
                            {t('notFound.title') || 'Page Not Found'}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                        >
                            {t('notFound.description') || "Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or doesn't exist."}
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4"
                        >
                            {/* Go Home Button */}
                            <Link
                                to="/"
                                className="group relative
                                    bg-white text-black
                                    w-full sm:w-auto
                                    min-w-[200px]
                                    h-[50px]
                                    px-6 pr-[52px]
                                    rounded-full
                                    font-medium
                                    items-center justify-center
                                    cursor-pointer
                                    overflow-hidden
                                    inline-flex
                                    text-sm
                                "
                            >
                                {/* Flip text */}
                                <span className="relative w-full text-center h-[18px] leading-[18px] overflow-hidden whitespace-nowrap">
                                    {/* Default text */}
                                    <span
                                        className="
                                            block leading-[18px]
                                            transition-transform duration-300 ease-out
                                            translate-y-0
                                            group-hover:-translate-y-full
                                        "
                                    >
                                        {t('notFound.goHome') || 'Go Home'}
                                    </span>

                                    {/* Hover text */}
                                    <span
                                        className="
                                            absolute left-0 top-full
                                            block leading-[18px]
                                            transition-transform duration-300 ease-out
                                            group-hover:-translate-y-full
                                        "
                                    >
                                        {t('notFound.goHome') || 'Go Home'}
                                    </span>
                                </span>

                                {/* Arrow */}
                                <span
                                    className="
                                        absolute right-[8px] top-1/2 -translate-y-1/2
                                        w-8 h-8 rounded-full bg-black
                                        flex items-center justify-center
                                        overflow-hidden
                                    "
                                >
                                    <Home className="w-5 h-5 text-white" />
                                </span>
                            </Link>

                            {/* Go Back Button */}
                            <button
                                onClick={() => window.history.back()}
                                className="group relative
                                    bg-transparent text-white
                                    border-2 border-white/30
                                    w-full sm:w-auto
                                    min-w-[200px]
                                    h-[50px]
                                    px-6 pr-[52px]
                                    rounded-full
                                    font-medium
                                    items-center justify-center
                                    cursor-pointer
                                    overflow-hidden
                                    inline-flex
                                    text-sm
                                    hover:border-white/60
                                    transition-colors duration-300
                                "
                            >
                                {/* Flip text */}
                                <span className="relative w-full text-center h-[18px] leading-[18px] overflow-hidden whitespace-nowrap">
                                    {/* Default text */}
                                    <span
                                        className="
                                            block leading-[18px]
                                            transition-transform duration-300 ease-out
                                            translate-y-0
                                            group-hover:-translate-y-full
                                        "
                                    >
                                        {t('notFound.goBack') || 'Go Back'}
                                    </span>

                                    {/* Hover text */}
                                    <span
                                        className="
                                            absolute left-0 top-full
                                            block leading-[18px]
                                            transition-transform duration-300 ease-out
                                            group-hover:-translate-y-full
                                        "
                                    >
                                        {t('notFound.goBack') || 'Go Back'}
                                    </span>
                                </span>

                                {/* Arrow */}
                                <span
                                    className="
                                        absolute right-[8px] top-1/2 -translate-y-1/2
                                        w-8 h-8 rounded-full bg-white/10
                                        flex items-center justify-center
                                        overflow-hidden
                                    "
                                >
                                    <ArrowLeft className="w-5 h-5 text-white" />
                                </span>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
