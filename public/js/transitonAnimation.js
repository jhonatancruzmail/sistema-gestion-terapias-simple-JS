function navigate(event, url) {
    event.preventDefault();

    if (!document.startViewTransition) {
        window.location.href = url;
        return;
    }

    document.startViewTransition(() => {
        window.location.href = url;
    });
}
