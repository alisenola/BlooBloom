import axios from "axios";
const API_URL = "https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/";

class service {
  getContent(url, colors, shapes) {
    var fullUrl = API_URL+url+"/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&filters[frame_variant_home_trial_available]=false&page[limit]=12&page[number]=1";
    colors.forEach((color) => {fullUrl=fullUrl+"&filters[glass_variant_frame_variant_colour_tag_configuration_names][]="+color});
    shapes.forEach((shape) => {fullUrl=fullUrl+"&filters[glass_variant_frame_variant_frame_tag_configuration_names][]="+shape});
    return axios.get(fullUrl);
  }
}
export default new service();