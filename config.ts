const siteMetadata = {
    title: `Trendinc`,
    siteUrl: `https://trendinc.tv/`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.png`,
    ogImage: `/images/wall.png`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `Social media`,
    description: `somos una agencia genial!`,
    about:
        "Somos una agencia dedicada a la publicidad digital en redes sociales, especialistas en Facebook, Twitter, Instagram, YouTube, Snapchat, teniendo impactos de más de 4 millones de personas al instante.",
    author: `@_akzhy y el valerioMix`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: false,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "¿Quiénes somos ?",
            url: "/about",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "CONTACTO",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        }
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://m.facebook.com/Trendinc.tv/?__tn__=%7E%7E-R",
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://instagram.com/trendinc.tv?utm_medium=copy_link",
        },
        
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/73a43a46-a9de-40de-8c07-f1a80b17cd95",
        description: `Cuentanos tu idea`,
        mail:'recados@trendinc.tv' ,
        phone: "5510825405",
        address: "Av. Insurgentes Sur 3744, Tlalpan Centro I, Tlalpan, 14000  \nCiudad de México \nCDMX",
    },
    disqus: "elemental-netlify-com",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
