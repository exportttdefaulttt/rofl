const input = document.querySelector<HTMLInputElement>('#textInput');
const copyButton = document.querySelector<HTMLButtonElement>('#copyButton');

copyButton?.addEventListener('click', async () => {
    if (!input) return;

    const textReversed = input.value
        .split(' ')
        .reverse()
        .join('__');

    try {
        await navigator.clipboard.writeText(textReversed);
        input.value = '';
    } catch (error) {
        console.error('Не удалось скопировать текст:', error);
    }
});