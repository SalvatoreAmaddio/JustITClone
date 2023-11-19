const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
{
    addAnimation();
}

function addAnimation() 
{
    scrollers.forEach(element => 
                    {
                        element.setAttribute("data-animated",true);
                        const innerScroller = element.querySelector("ul");
                        const scrollerInnerContent = Array.from(innerScroller.children);
                        scrollerInnerContent.forEach(item =>
                            {
                                const duplicatedItem = item.cloneNode(true);
                                duplicatedItem.setAttribute('aria-hidden', true);
                                innerScroller.appendChild(duplicatedItem);
                            });
                    });
}