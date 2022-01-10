import { Component, OnInit } from '@angular/core';
import { faRoad, faClock, faCreditCard, faRedo } from '@fortawesome/free-solid-svg-icons';
import { PopupLivraisonService } from 'src/app/services/popup-livraison.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {
  // icone fontawesome
  roadIcon = faRoad;
  clockIcon = faClock;
  cardIcon = faCreditCard;
  redoIcon = faRedo;
  
  prixCourse: any;
  distance: any;
  estimation: boolean;

  constructor(private PopupLivraisonService: PopupLivraisonService) {
    this.estimation = false;
  }

  ngOnInit(): void {
  
    function initMap(): void {
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          mapTypeControl: false,
          center: { lat: 43.2961743, lng: 5.3699525 },
          zoom: 13,
        }
      );
    
      new AutocompleteDirectionsHandler(map);
    }
    
    class AutocompleteDirectionsHandler {
      map: google.maps.Map;
      originPlaceId: string;
      destinationPlaceId: string;
      travelMode: google.maps.TravelMode;
      directionsService: google.maps.DirectionsService;
      directionsRenderer: google.maps.DirectionsRenderer;
    
      constructor(map: google.maps.Map) {
        this.map = map;
        this.originPlaceId = "";
        this.destinationPlaceId = "";
        this.travelMode = google.maps.TravelMode.DRIVING;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer();
        this.directionsRenderer.setMap(map);
    
        const originInput = document.getElementById("origin-input") as HTMLInputElement;
        const destinationInput = document.getElementById("destination-input") as HTMLInputElement;
    
        const originAutocomplete = new google.maps.places.Autocomplete(originInput);
        // Specify just the place data fields that you need.
        originAutocomplete.setFields(["place_id"]);
    
        const destinationAutocomplete = new google.maps.places.Autocomplete(
          destinationInput
        );
        // Specify just the place data fields that you need.
        destinationAutocomplete.setFields(["place_id"]);
    
    
        this.setupPlaceChangedListener(originAutocomplete, "ORIG");
        this.setupPlaceChangedListener(destinationAutocomplete, "DEST");
    
      }
    
    
      setupPlaceChangedListener(
        autocomplete: google.maps.places.Autocomplete,
        mode: string
      ) {
        autocomplete.bindTo("bounds", this.map);
    
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
    
          if (!place.place_id) {
            window.alert("Please select an option from the dropdown list.");
            return;
          }
    
          if (mode === "ORIG") {
            this.originPlaceId = place.place_id;
          } else {
            this.destinationPlaceId = place.place_id;
          }
          this.route();
        });
      }
    
      route() {
        if (!this.originPlaceId || !this.destinationPlaceId) {
          return;
        }
        const me = this;
    
        this.directionsService.route(
          {
            origin: { placeId: this.originPlaceId },
            destination: { placeId: this.destinationPlaceId },
            travelMode: this.travelMode,
          },
          (response, status) => {
            if (status === "OK") {
              me.directionsRenderer.setDirections(response);
            } else {
              window.alert("Directions request failed due to " + status);
            }
          }
        );
      }
    }

    initMap(); // initialiser map

    // map qui reste carré (responsive)
    let map = document.getElementById("map") as HTMLElement;//
    let mapWidth = map.clientWidth;//
    let calcHeightMap:any = mapWidth * 0.685;//
    map.style.height = calcHeightMap + "px";//
    
  }

  openPopup(){
    this.PopupLivraisonService.confirmDialog();
  }

  calculerDistance(){
    const origin = (document.getElementById("origin-input") as HTMLInputElement).value;
    const destination = (document.getElementById("destination-input") as HTMLInputElement).value;
    const request = {
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    };
    const service = new google.maps.DistanceMatrixService();
  
    service.getDistanceMatrix(request).then((response) => {
    var valueMetre = response["rows"][0]["elements"][0]["distance"]["value"];
    // var distanceKm = Math.round(valueMetre / 1000);
    this.distance = (valueMetre / 1000).toFixed(1);
    console.log(this.distance);
    this.calculerPrixCourse(this.distance);
    this.estimation = true;
    });
  }

  calculerPrixCourse(distance:number){
    let prix,
        tauxMin = 5.5,
        taux1 = 0.75, // de 1 a 3km
        taux2 = 1, // de 3 a 8km
        taux3 = 1, // de 8 a 10km
        taux4 = 1, // de 10 a 15km
        taux5 = 2, // de 15 a 35km
        taux6 = 2.3; // au dessus de 35km
  
    if(distance <= 1){
      prix = tauxMin;
    }else if(distance <= 3){ // de 1 a 3km
      prix = tauxMin + ((distance - 1) * taux1);
    }else if(distance <= 8){ // de 3 a 8km
      tauxMin += (2 * taux1);
      prix = tauxMin + ((distance - 3) * taux2);
    }else if(distance <= 10){ // de 8 a 10km
      tauxMin += (2 * taux1) + (5 * taux2);
      prix = tauxMin + ((distance - 8) * taux3);
    }else if(distance <= 15){ // de 10 a 15km
      tauxMin += (2 * taux1) + (5 * taux2) +  (2 * taux3);
      prix = tauxMin + ((distance - 10) * taux4);
    }else if(distance <= 35){ // de 15 a 35km
      tauxMin += (2 * taux1) + (5 * taux2) +  (2 * taux3) + (5 * taux4);
      prix = tauxMin + ((distance - 15) * taux5);
    }else{ // au dessus de 35km
      tauxMin += (2 * taux1) + (5 * taux2) +  (2 * taux3) + (5 * taux4) + (20 * taux5);
      prix = tauxMin + ((distance - 35) * taux6);
    }
  
    // livreur
    // let prixLivreur,
    //     tauxMinLivreur = 4,
    //     taux1Livreur = 0.55, // de 1 a 3km
    //     taux2Livreur = 0.65, // de 3 a 5km
    //     taux3Livreur = 0.75, // de 5 a 7km
    //     taux4Livreur = 0.85, // de 7 a 10km
    //     taux5Livreur = 1; // au dessus de 10km
  
    // if(distance <= 1){
    //   prixLivreur = tauxMinLivreur;
    // }else if(distance <= 3){ // de 1 a 3km
    //   prixLivreur = tauxMinLivreur + ((distance - 1) * taux1Livreur);
    // }else if(distance <= 5){ // de 3 a 5km
    //   tauxMinLivreur += (2 * taux1Livreur);
    //   prixLivreur = tauxMinLivreur + ((distance - 3) * taux2Livreur);
    // }else if(distance <= 7){ // de 5 a 7km
    //   tauxMinLivreur += (2 * taux1Livreur) + (2 * taux2Livreur);
    //   prixLivreur = tauxMinLivreur + ((distance - 5) * taux3Livreur);
    // }else if(distance <= 10){ // de 7 a 10km
    //   tauxMinLivreur += (2 * taux1Livreur) + (2 * taux2Livreur) + (2 * taux3Livreur);
    //   prixLivreur = tauxMinLivreur + ((distance - 7) * taux4Livreur);
    // }else{ // au dessus de 10km
    //   tauxMinLivreur += (2 * taux1Livreur) + (2 * taux2Livreur) + (2 * taux3Livreur) + (3 * taux4Livreur);
    //   prixLivreur = tauxMinLivreur + ((distance - 10) * taux5Livreur);
    // }

    // prix avec TVA
    // let prixTVA = parseFloat((prix * 1.2).toFixed(2));
    this.prixCourse = parseFloat((prix * 1.2).toFixed(2));
  }
  
  inverserInputs(){ // function inverser valeurs inputs
    let inputOrigin = document.getElementById("origin-input") as HTMLInputElement;
    let inputDestination = document.getElementById("destination-input") as HTMLInputElement;
    let enregristrerValeur = inputOrigin.value;
    inputOrigin.value = inputDestination.value;
    inputDestination.value = enregristrerValeur;
    this.calculerDistance();
  }

  resetDevis(){ // function remmetre à zero devis
    (document.getElementById("origin-input") as HTMLInputElement).value = "";
    (document.getElementById("destination-input") as HTMLInputElement).value = "";
    this.estimation = false;
  }

}