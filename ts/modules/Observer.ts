const Observer = (changes : MutationCallback) => {
    let mutationObserver = new MutationObserver(changes);

    mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
}

export default Observer;