export const Observer = (changes) => {
    let mutationObserver = new MutationObserver(changes);

    mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
}