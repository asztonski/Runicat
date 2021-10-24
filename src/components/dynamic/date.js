export var today = new Date();
export var dd = String(today.getDate()).padStart(2, '0');
export var mm = String(today.getMonth() + 1).padStart(2, '0');
export var yyyy = today.getFullYear();
