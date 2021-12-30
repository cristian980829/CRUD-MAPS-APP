import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { marker } from 'src/app/shared/models/marker.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent {

  origin: any = '3350 Twig Leaf Ln, Houston, TX 77084, USA';
  destination: any = 'Lehigh Valley Railroad Lift Bridge, Newark Bay Bridge, Newark, NJ 07114, USA';
  waypoints: any = '';

  // google maps zoom level
  zoom: number = 15;
  
  // initial center position for the map
  lat: number =  29.8174782;
  lng: number = -95.6814757;

  //markers list
  markers: marker[] = []

  //polygon paths
  paths = [
      { lat: this.lat,  lng: this.lng+10 },
      { lat: this.lat,  lng: this.lng+20 },
      { lat: this.lat+10, lng: this.lng+20 },
      { lat: this.lat+10, lng: this.lng+10 },
      { lat: this.lat,  lng: this.lng+10 }
    ]

  ngOnInit() {
    this.getDirection();
  }

  getDirection() {
    this.origin = { lat: 29.8174782, lng: -95.6814757 };
    this.destination = { lat: 40.6976637, lng: -74.119764 };
    this.waypoints = [
       {location: { lat: 39.0921167, lng: -94.8559005 }},
       {location: { lat: 41.8339037, lng: -87.8720468 }}
    ];
  }

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
    this.markers = this.markers.filter((el:marker) => {
      if(el.lat!==m.lat && el.lng!==m.lng){
        return el;
      }else{
        return false;
      }
    })
  }

}