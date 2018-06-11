(function() {
    var a = {};
    a[1] = {
        link: {
            linkIcon: "https://c.evidon.com/pub/icong1.png",
            linkStyle: "cursor:pointer;text-decoration:none;font-size:11pt;color:#000000;",
            mobileLinkIcon: "https://c.evidon.com/pub/icong1.png",
            mobileLinkStyle: "cursor:pointer;text-decoration:none;font-size:11pt;color:#000000;",
            mobileShowIcon: true,
            showIcon: true
        },
        button: {
            buttonIcon: "https://c.evidon.com/pub/icong2.png",
            buttonStyle: "position:fixed;padding:0 10px;border:1px solid #aaaaaa;cursor:pointer;line-height:36px;text-decoration:none;background:#ffffff;font-size:10pt;color:#000000;bottom:0;right:0;",
            mobileButtonIcon: "https://c.evidon.com/pub/icong2.png",
            mobileButtonStyle: "position:fixed;padding:0 10px;border:1px solid #aaaaaa;cursor:pointer;line-height:36px;text-decoration:none;background:#ffffff;font-size:10pt;color:#000000;bottom:0;right:0;",
            mobileShowIcon: true,
            mobileShowText: true,
            showIcon: true,
            showText: true
        },
        banner: {
            bannerStyle: "position:absolute;display:block;width:100%;background:#e31eab;padding:0;font-size:14px;color:#000000;bottom:0;border-top:1px solid #aaaaaa;border:1px solid #e1e1e1;",
            titleStyle: "display:block;font-size:18px;text-align:center;margin:8px 18px;",
            messageStyle: "display:inline-block;margin:8px 18px;text-align:left;width:calc(100% - 300px);",
            showAcceptButton: true,
            acceptButtonStyle: "display:inline-block;border:0;background:#000000;color:#ffffff;padding:8px 22px;cursor:pointer;margin:12px 4px;vertical-align:top;float:right;",
            showCloseIcon: false,
            closeIconStyle: "position:absolute;top:4px;right:4px;height:16px;width:16px;stroke:#000000;stroke-width:2;",
            closeIconStroke: "#000000",
            closeIconThickness: "2",
            showIcon: false,
            iconStyle: "position:absolute;top:4px;left:4px;width:24px;height:24px;",
            showOptionButton: true,
            optionButtonStyle: "display:inline-block;background:#cfcfcf;border:0;padding:8px 18px;margin:12px 4px;vertical-align:top;float:right;color:#0102ff;",
            showTitle: true,
            showDeclineButton: false,
            declineButtonStyle: "null",
            backgroundStyle: "display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:#8cdeee;opacity:.5;",
            showBackground: true,
            mobileBannerStyle: "position:absolute;display:block;width:100%;background:#ffffff;padding:4px;font-size:14px;color:#000000;bottom:0;border-top:1px solid #aaaaaa;",
            mobileTitleStyle: "display:block;font-size:18px;text-align:center;margin:8px 12px;",
            mobileMessageStyle: "display:block;margin:8px 12px;text-align:left;",
            mobileShowAcceptButton: true,
            mobileAcceptButtonStyle: "display:block;margin:8px auto;border:0;background:#000000;color:#ffffff;padding:10px 32px;cursor:pointer;",
            mobileShowCloseIcon: false,
            mobileCloseIconStyle: "position:absolute;top:4px;right:4px;height:12px;width:12px;stroke:#000000;stroke-width:2;",
            mobileCloseIconStroke: "#000000",
            mobileCloseIconThickness: "2",
            mobileShowIcon: false,
            mobileIconStyle: "position:absolute;top:4px;left:4px;width:16px;height:16px;",
            mobileShowCollapseMessage: false,
            mobileCollapseMessageStyle: "display:block;font-size:16px;text-align:center;padding:12px;cursor:pointer;",
            mobileShowOptionButton: true,
            mobileOptionButtonStyle: "padding:8px 18px;margin:auto;display:block;border:0;border-radius:3px;box-shadow:#222222 1px 1px;color:#2b18ff;",
            mobileShowTitle: true,
            mobileShowDeclineButton: false,
            mobileDeclineButtonStyle: "null",
            mobileBackgroundStyle: "display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:#dddddd;opacity:.5;",
            mobileShowBackground: true,
            bannerIcon: null,
            mobileBannerIcon: null
        },
        barrier: {
            bannerStyle: "position:relative;display:block;margin:40px auto;background:#ffffff;width:60%;padding:0;",
            titleStyle: "display:block;text-align:center;font-size:1.5rem;padding:4px 0;",
            messageStyle: "display:block;font-size:1rem;vertical-align:top;padding:16px 8px;line-height:1.4;",
            showCloseIcon: true,
            closeIconStyle: "position:absolute;top:4px;right:4px;height:16px;width:16px;stroke:#000000;stroke-width:1;cursor:pointer;",
            closeIconStroke: "#000000",
            closeIconThickness: "1",
            acceptButtonStyle: "display:block;margin:12px auto;padding:6px 8px;border:1px solid #000000;background:#111111;color:#ffffff;font-size:1.1rem;",
            acceptMessageStyle: "display:block;margin:14px 0 8px 0;font-size:1rem;padding:0 12px;line-height:1.5;",
            cookieButtonStyle: "display:block;border:0 solid #000000;background:transparent;font-size:1.1rem;margin:0 2px;text-decoration:underline;",
            cookieMessageStyle: "display:block;font-size:1rem;padding:12px 8px;line-height:1.4;",
            logoStyle: "display:block;width:;height:40px;margin:8px auto;",
            showCookieButtonIcon: true,
            showDeclineButton: false,
            declineButtonStyle: "null",
            mobileBannerStyle: "position:relative;display:block;margin:20px auto;background:#ffffff;width:100%;padding:0;",
            mobileTitleStyle: "display:block;text-align:center;font-size:18px;padding:4px 0;",
            mobileMessageStyle: "display:block;font-size:12px;vertical-align:top;padding:16px 8px;line-height:1.4;",
            mobileShowCloseIcon: false,
            mobileCloseIconStyle: "position:absolute;top:4px;right:4px;height:12px;width:12px;stroke:#000000;stroke-width:0;",
            mobileCloseIconStroke: "#000000",
            mobileCloseIconThickness: "0",
            mobileAcceptButtonStyle: "display:block;margin:12px auto;padding:12px;border:1px solid #000000;background:#111111;color:#ffffff;font-size:16px;",
            mobileAcceptMessageStyle: "display:block;margin:14px 0 8px 0;font-size:12px;padding:0 12px;line-height:1.4;",
            mobileCookieButtonStyle: "display:block;border:0 solid #000000;background:transparent;font-size:14px;margin:0 2px;text-decoration:underline;",
            mobileCookieMessageStyle: "display:block;font-size:12px;padding:12px 8px;line-height:1.4;",
            mobileLogoStyle: "display:block;width:;margin:8px auto;height:40px;",
            mobileShowCookieButtonIcon: false,
            mobileShowOptionButton: "null",
            mobileShowDeclineButton: false,
            mobileDeclineButtonStyle: "null",
            backgroundStyle: "background:#343434;opacity:.8;",
            backgroundStyle: "background:#343434;opacity:.8;",
            logo: "//dev.betrad.com/logos/242/242-20170710183922.png",
            mobileLogo: "//dev.betrad.com/logos/242/242-20170710183922.png",
            cookieButtonIcon: null,
            mobileCookieButtonIcon: null
        },
        l2: {
            overlayStyle: "display:block;position:absolute;top:10%;left:15%;width:70%;padding:18px;background:#ffffff;border:1px solid #000000;",
            titleStyle: "display:block;text-align:center;margin:6px auto;font-size:16px;font-weight:600;",
            showTitle: true,
            messageStyle: "display:block;margin:4px auto;font-size:12px;line-height:16px;",
            subtitleStyle: "display:block;font-size:14px;font-weight:500;margin:6px 0;",
            closeIconStyle: "display:block;position:absolute;top:8px;right:8px;height:12px;width:12px;stroke:#aaaaaa;stroke-width:2;cursor:pointer;",
            logoStyle: "display:block;margin:8px auto;width:150px;height:40px;background:#cccccc;color:white;border:1px solid #333333;",
            linkStyle: "display:block;color:#00AEF0;text-decoration:none;font-size:12px;font-weight:600;text-align:center;margin:18px 0;",
            backgroundStyle: "display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:#dddddd;",
            showBackground: true,
            mobileOverlayStyle: "display:block;position:absolute;top:1%;width:100%;padding:18px;background:#ffffff;",
            mobileTitleStyle: "display:block;text-align:center;margin:6px auto;font-size:16px;font-weight:600;",
            mobileShowTitle: true,
            mobileMessageStyle: "display:block;margin:4px auto;font-size:12px;line-height:16px;",
            mobileSubtitleStyle: "display:block;font-size:14px;font-weight:500;margin:6px 0;",
            mobileCloseIconStyle: "display:block;position:absolute;top:8px;right:8px;height:12px;width:12px;stroke:#aaaaaa;stroke-width:2;cursor:pointer;",
            mobileLogoStyle: "display:block;margin:8px auto;width:150px;height:40px;background:#cccccc;color:white;border:1px solid #333333;",
            mobileLogoStyle: "display:block;margin:8px auto;width:150px;height:40px;background:#cccccc;color:white;border:1px solid #333333;",
            mobileLinkStyle: "display:block;color:#00AEF0;text-decoration:none;font-size:12px;font-weight:600;text-align:center;margin:18px 0;",
            mobileBackgroundStyle: "display:block;position:absolute;top:0;left:0;width:100%;height:100%;background:#dddddd;",
            mobileShowBackground: true,
            logo: null,
            mobileLogo: null
        }
    };
	
    if (window.evidon && window.evidon.notice) {
        window.evidon.notice.setThemes(a)
    } else {
        if (!window.evidon) {
            window.evidon = {}
        }
        window.evidon.themes = a
    }
}
)();
