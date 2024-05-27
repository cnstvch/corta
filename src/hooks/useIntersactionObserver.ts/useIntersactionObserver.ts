import { RefObject, useEffect, useState } from "react"


interface IArgs extends IntersectionObserverInit {
    freezeOnceVisible?: boolean
}

export const useIntersactionObserver = (
    elementRef: RefObject<Element>,
    {
        freezeOnceVisible = false,
        root = null,
        rootMargin = '0%',
        threshold = 0
}: IArgs): IntersectionObserverEntry | undefined => {
    const [entry, setEntry] = useState<IntersectionObserverEntry>();

    const frozen = entry?.isIntersecting && freezeOnceVisible;

    const updateEntry = ([entryToUpdate]: IntersectionObserverEntry[]) => {
        setEntry(entryToUpdate);
    }

    useEffect(() => {
        const node = elementRef.current;
        const hasIOSSupport = !!window.IntersectionObserver;

        if(!hasIOSSupport || frozen || !node) return;

        const observerParams = { threshold, root, rootMargin };
        const observer = new IntersectionObserver(updateEntry, observerParams);

        observer.observe(node);

        return () => observer.disconnect();

    }, [elementRef.current, JSON.stringify(threshold), root, rootMargin, frozen]);

    return entry;
}