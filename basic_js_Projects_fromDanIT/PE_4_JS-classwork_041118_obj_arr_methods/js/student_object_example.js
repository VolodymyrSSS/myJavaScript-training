let student = {
    name: "Vadim",
    "last name": "Sidorov",
    "laziness ratio": 3,
    "slickness ratio": 5
};

// alert(student.name+" "+student["last name"]+":"+"коэффициент лени= "+
// student["laziness ratio"]+" Коэффициент хитрожопости=" + student["slickness ratio"]);

alert(`${student.name} ${student["last name"]} коэффициент лени=
    ${student["laziness ratio"]}; Коэффициент хитрожопости= ${student["slickness ratio"]}`);

    if (student["laziness ratio"] >=5 && student["slickness ratio"] < 5) {
        student.status = "передать в  военкомат";
    }
    alert(student.status);
    if (student["laziness ratio"] >=5 && student["slickness ratio"] < 5) {
        student["new status"] = "отправлен на перездачу";
    }
    alert(student["new status"]);