//const HOST = 'http://localhost:8000/api/v1'; // Dev environment
const HOST = 'http://ec2-18-221-54-230.us-east-2.compute.amazonaws.com:8015/api/v1'; // Prod environment

export function getDistricts() {
    return HOST.concat("/districts");
}

export function getDistrictSubCounties(districtId) {
    return HOST.concat(`/districts/${districtId}/sub-counties`);
}
