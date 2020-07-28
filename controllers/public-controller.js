exports.getIndex = (req, res, next) => {
    res.render("public/index",
    {
        pageTitle: "Index",
        path: '/'
    });
}

exports.getServices = (req, res, next) => {
    res.render("public/services",
    {
        pageTitle: "Services",
        path: 'services'
    });
}

exports.getTeam = (req, res, next) => {
    res.render("public/team",
    {
        pageTitle: "Team",
        path: 'team'
    });
}

exports.getBlog = (req, res, next) => {
    res.render("public/blog",
    {
        pageTitle: "Blog",
        path: 'blog'
    });
}

exports.getBlogDetail = (req, res, next) => {
    res.render("public/blog-detail",
    {
        pageTitle: "Blog-Detail",
        path: ''
    });
}

exports.getContact = (req, res, next) => {
    res.render("public/contact",
    {
        pageTitle: "Contact",
        path: 'contact'
    });
}