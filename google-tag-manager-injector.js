/**
 * Injects a tag manager integration into the current Web page.
 * @param tagManagerIdentifier An identifier of the tag manager account being injected.
 */
function injectTagManager(tagManagerIdentifier) {
    let tagManagerScript = document.createElement('script');
    tagManagerScript.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n" +
        "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n" +
        "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n" +
        "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n" +
        "})(window,document,'script','dataLayer','" + tagManagerIdentifier + "');";
    document.head.append(tagManagerScript);

    let tagManagerFrame = document.createElement('iframe');
    tagManagerFrame.setAttribute('src', 'https://www.googletagmanager.com/ns.html?id=' + tagManagerIdentifier);
    document.body.appendChild(tagManagerFrame);
}
