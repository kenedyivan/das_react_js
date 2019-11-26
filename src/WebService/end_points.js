const HOST = 'http://localhost:8000/api/v1'; // Prod environment

export function getDistricts() {
    return HOST.concat("/districts");
}

export function getDistrictSubCounties(districtId) {
    return HOST.concat(`/districts/${districtId}/sub-counties`);
}
