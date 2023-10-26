export default {};

const DEPARTMENT_CODE = "CS";
export async function getCourses(){
    try {
        const uri = `http://localhost:5001/departments/${DEPARTMENT_CODE}/courses`;
        const ret = await fetch(uri);
        const obj = await ret.json();

        if(obj.success){
            return obj.data
        }
    } catch (error) {
        
    }
    return [];
}

export async function addCourses(){
    try {
        const uri = `http://localhost:5001/departments/${DEPARTMENT_CODE}/courses`;
        const ret = await fetch(uri,{
        method: "PUT",
        headers: {
"content-type": "application/json"
        },
        body: JSON.stringify(course)
    });
        if(obj.success){
            return obj.data
        }
    } catch (error) {
        
    }
    return [];
}

export async function editCourses(){
    try {
        const uri = `http://localhost:5001/departments/${DEPARTMENT_CODE}/courses/${course.code}`;
        const ret = await fetch(uri,{
        method: "PATCH",
        headers: {
"content-type": "application/json"
        },
        body: JSON.stringify(course)
    });
        if(obj.success){
            return obj.data
        }
    } catch (error) {
        
    }
    return false;
}

export async function deleteCourses(course){
    try {
        const uri = `http://localhost:5001/departments/${DEPARTMENT_CODE}/courses/${course.code}`;
        const ret = await fetch(uri,{
        method: "DELETE",
        headers: {
"content-type": "application/json"
        },
    });
        if(obj.success){
            return obj.data
        }
    } catch (error) {
        
    }
    return false;
}