
export default function Home() {
    const placeholder = document.createElement('div');
    placeholder.textContent = 'Sélectionnez un bot pour commencer la conversation.';
    placeholder.className = 'flex-1 p-4 bg-white flex items-center justify-center text-gray-500';
    
    return placeholder;
}