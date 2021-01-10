const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:@localhost/sql_crm')

const data = require('./data.json')

const owners = [...new Set(data.map(d => d.owner))]
const emailType = [... new Set(data.map(d => d.emailType))].sort()
const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe", "other"];

const addData = async function (table, data) {
    let query = `INSERT INTO ${table} VALUES (null, "${data}")`
    let result = await sequelize.query(query)
    return result[0]
}

findID = async function (table, type, value) {
    let query = `Select id FROM ${table} WHERE ${type} = "${value}"`
    let result = await sequelize.query(query)
    return result[0][0].id
}

// emailType.forEach(e => addData('email_type', e))
// owners.forEach(o => addData('owner', o))
// countries.forEach(c => addData('country', c))

const addClient = async function (client) {
    let emailType = client.emailType ? await findID('email_type', 'email_type', client.emailType) : null
    let owner = await findID('owner', 'owner', client.owner)
    let country = await findID('country', 'country', client.country)
    let date = new Date (client.firstContact).toLocaleDateString()
    let nameSplit = client.name.split(' ')

    let query = `INSERT INTO client VALUES (null, '${nameSplit[0]}', '${nameSplit[1]}', '${client.email}', ${client.sold}, '${date}', ${emailType}, ${owner}, ${country})`
    let result = await sequelize.query(query)
    return result[0]
}

data.forEach(d => addClient(d))

module.exports = countries