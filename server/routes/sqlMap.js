var sqlMap = {
    users: {
        add: 'insert into users (username, password, realname, sex, telphone, email, idType, department, branch) values (?,?,?,?,?,?,?,?,?)',
        select_name: 'select * from users', 
        update_user: 'update users set'
    }
}

module.exports = sqlMap;