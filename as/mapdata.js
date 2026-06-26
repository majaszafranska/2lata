var simplemaps_continentmap_mapdata={
  main_settings: {
    //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",
    
    //State defaults
    state_description: "",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "x",
    location_color: "#8b5fbf",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 10,
    location_type: "circle",
    location_border_color: "#FFFFFF",
    location_border: 1,
    location_hover_border: 1.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
   
    //Zoom settings
    manual_zoom: "no",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    EU: {
      name: "Europe",
      description: "default",
      color: "#FF3366",
      hover_color: "#c0264d",
      url: "default"
    },
    SS: {
      name: "South Asia",
      description: "default",
      color: "#FF6633",
      hover_color: "#ac4422",
      url: "default"
    }
  },
  locations: {
    "0": {
      name: "Pekin",
      lat: 39.9042,
      lng: 116.4074,
      description: "Obecna stolica Chin",
    },
    "1": {
      name: "Xi'an",
      lat: 34.3416,
      lng: 108.9398,
      description: "Dawna stolica Chin",
    },
    "2": {
      name: "Lintong",
      lat: 34.3416,
      lng: 108.9398,
      description: "Armia Terakotowa",
    }
  },
  labels: {}
};