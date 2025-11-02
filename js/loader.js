// Loading States Manager
class LoaderManager {
    constructor() {
        this.createStyles();
    }

    createStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .page-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--bg-color);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                transition: opacity 0.3s, visibility 0.3s;
            }

            .page-loader.hidden {
                opacity: 0;
                visibility: hidden;
            }

            .loader {
                width: 60px;
                height: 60px;
                border: 4px solid var(--border-color);
                border-top: 4px solid var(--primary-color);
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            .loader-dots {
                display: flex;
                gap: 10px;
            }

            .loader-dot {
                width: 15px;
                height: 15px;
                background: var(--primary-color);
                border-radius: 50%;
                animation: bounce 1.4s infinite ease-in-out both;
            }

            .loader-dot:nth-child(1) { animation-delay: -0.32s; }
            .loader-dot:nth-child(2) { animation-delay: -0.16s; }
            .loader-dot:nth-child(3) { animation-delay: 0s; }

            @keyframes bounce {
                0%, 80%, 100% {
                    transform: scale(0);
                }
                40% {
                    transform: scale(1);
                }
            }

            .skeleton-card {
                background: var(--surface-color);
                border-radius: 20px;
                padding: 20px;
                animation: pulse 1.5s ease-in-out infinite;
            }

            .skeleton-line {
                height: 12px;
                background: var(--border-color);
                border-radius: 6px;
                margin-bottom: 10px;
            }

            .skeleton-circle {
                width: 60px;
                height: 60px;
                background: var(--border-color);
                border-radius: 50%;
            }
        `;
        document.head.appendChild(style);
    }

    showPageLoader() {
        const loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.innerHTML = `
            <div class="loader-dots">
                <div class="loader-dot"></div>
                <div class="loader-dot"></div>
                <div class="loader-dot"></div>
            </div>
        `;
        document.body.appendChild(loader);
        return loader;
    }

    hidePageLoader(loader) {
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 300);
        }
    }

    createSkeletonCard() {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-card';
        skeleton.innerHTML = `
            <div class="skeleton-circle" style="margin-bottom: 15px;"></div>
            <div class="skeleton-line" style="width: 80%;"></div>
            <div class="skeleton-line" style="width: 60%;"></div>
            <div class="skeleton-line" style="width: 90%;"></div>
        `;
        return skeleton;
    }

    showButtonLoader(button) {
        const originalText = button.innerHTML;
        button.disabled = true;
        button.style.position = 'relative';
        button.innerHTML = `
            <span style="opacity: 0;">${originalText}</span>
            <span style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            ">
                <div class="loader" style="width: 20px; height: 20px; border-width: 2px;"></div>
            </span>
        `;
        
        return () => {
            button.disabled = false;
            button.innerHTML = originalText;
        };
    }
}

window.loader = new LoaderManager();
