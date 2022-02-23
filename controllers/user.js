
exports.user = function(req, res, next) {
res.render('user',{
    title: 'Users',
    name: 'Student'
});    
}

exports.sohyeon = function(req, res, next) {
    res.render('user',{
        title: 'Users',
        name: 'Sohyeon'
    });    
    }