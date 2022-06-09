function getFormData(form) {
    const formData = new FormData(form);
    const res = {
    };
    Array.from(formData.keys()).forEach(key => {
        res[key] = formData.getAll(key);
    });
    return res;
}

function useXmlHttpRequest(data) {
    const request = new XMLHttpRequest();
    request.open('POST', ' http://localhost:3000/applications');
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
    request.onloadend = () => {
        alert(`Ваша заявка принята:
        ${data.name}
        ${data.email}
        ${data.phone}
        ${data.country}
        ${data.gender}
        ${data.hobbies}`);
        window.location.reload();
    }
}
window.addEventListener('load', () => {
    const applicantForm = document.forms.aplicantForm;
    applicantForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = getFormData(document.forms.aplicantForm);
        useXmlHttpRequest(data);        
    })
});
