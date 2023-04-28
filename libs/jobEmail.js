export const sendJobApplication = async (data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("message", data.message);
    formData.append("cv", data.cv);
  
    const response = await fetch('/api/JobApp', {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data",
        },
    });
    return response.json();
};