/**
 * Created by vanchanagiri shravya on 1/3/2017.
 */
var emp = function() {
    var empid, empname, emptype, empdob, empexperience, empdoj;
    /*var getEmpDetails=empDetails;*/
    return {
        getId: getId,
        getName: getName,
        getType: getType,
        getDob: getDob,
        getExperience: getExperience,
        getDoj: getDoj,
        setId: setId,
        setName: setName,
        setType: setType,
        setDob: setDob,
        setExperience: setExperience,
        setDoj: setDoj
    };

    function setId(id) {

        empid = id;
        console.log("id" + empid);
    }

    function getId() {

        return empid;
    }

    function setName(name) {
        empname = name;
    }

    function getName() {
        return empname;
    }

    function setDob(dob) {
        empdob = dob;
    }

    function getDob() {
        return empdob;
    }

    function setType(type) {
        emptype = type;
    }

    function getType() {
        return emptype;
    }

    function setExperience(experience) {
        empexperience = experience;
    }

    function getExperience() {
        return empexperience;
    }

    function setDoj(doj) {
        empdoj = doj;
    }

    function getDoj() {
        return empdoj;
    }
}
$(document).ready(function() {
    getEmployees();
});

function getEmployees() {
    $.getJSON("Employee.json",
        function(json) {
            console.log(json);
            console.log(json.length);

            var empDetail = [];
            for (var i = 0; i < json.length; i++) {
                var emp1 = new emp();
                console.log("json[i].eid");
                console.log(json[i].eid);
                emp1.setId(json[i].eid);
                emp1.setName(json[i].name);
                emp1.setType(json[i].type);
                emp1.setDob(json[i].dob);
                emp1.setExperience(json[i].experience);
                emp1.setDoj(json[i].doj);
                console.log(emp1);
                console.log("emp1");
                console.log(emp1.getId);
                empDetail.push(emp1);

            }
            console.log("empDetail");
            console.log(empDetail);
            drawTable(empDetail);
        });
}

function drawTable(empList) {
    //get the table by id
    var table = document.getElementById("empDetails");

    table.innerHTML += '<tr><th>Id</th><th>Name</th><th>Type</th><th>Date of Birth</th><th>Expierience</th><th>Date of joining</th></tr>'
    for (var i = 0; i < empList.length; i++) {
        var emp = empList[i];
        table.innerHTML += '<tr onclick="viewDetails(this);" ><td>' + emp.getId() + '</td><td>' + emp.getName() + '</td><td>' + emp.getType() + '</td><td>' + emp.getDob() + '</td><td>' + emp.getExperience() + '</td><td>' + emp.getDoj() + '</td></tr>';
        /*var row = table.insertRow(i);
         var emp = empList[i];
         var cell1 = row.insertCell(0);
         var cell2 = row.insertCell(1);
         var cell3 = row.insertCell(2);
         var cell4 = row.insertCell(3);
         var cell5 = row.insertCell(4);
         var cell6 = row.insertCell(5);
         cell1.innerHTML = emp.getId();
         cell2.innerHTML = emp.getName();
         cell3.innerHTML = emp.getType();
         cell4.innerHTML = emp.getDob();
         cell5.innerHTML = emp.getExperience();
         cell6.innerHTML = emp.getDoj();*/

    }
}

function viewDetails(obj) {
    var id = obj.cells.item(0).innerHTML;
    var name = obj.cells.item(1).innerHTML;
    var type = obj.cells.item(2).innerHTML;
    var dob = obj.cells.item(3).innerHTML;
    var exp = obj.cells.item(4).innerHTML;
    var doj = obj.cells.item(5).innerHTML;

    var table = document.getElementById("empRow");

    //table.innerHTML ='<tr><td>'+id+'</td><td>'+name+'</td><td>'+type+'</td><td>'+dob+'</td><td>'+exp+'</td><td>'+doj+'</td></tr>';
    table.innerHTML = '<p>Employee id:' + id + ' <br> Employee Name: ' + name + ' <br> Employee Type: ' + type + ' <br> Employee Date of Birth: ' + dob + ' <br> Employee Experience: ' + exp + ' <br> Employee Date of joining:  ' + doj + '</p>';

}