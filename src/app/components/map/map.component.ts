import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { marker } from 'src/app/shared/models/marker.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {

  // google maps zoom level
  zoom: number = 6;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  paths = [
      { lat: this.lat,  lng: this.lng+10 },
      { lat: this.lat,  lng: this.lng+20 },
      { lat: this.lat+10, lng: this.lng+20 },
      { lat: this.lat+10, lng: this.lng+10 },
      { lat: this.lat,  lng: this.lng+10 }
    ]
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  deteleMarker(m:marker){
    console.log(m)
    this.markers = this.markers.filter((el:marker) => {
      if(el.lat!==m.lat && el.lng!==m.lng){
        return el;
      }else{
        return false;
      }
    })
    console.log(this.markers)
  }

  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  draggable: true
	  }
  ]
}