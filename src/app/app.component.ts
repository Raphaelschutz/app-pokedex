import { Component, computed, signal } from '@angular/core';
import { POKEMON_LIST } from './pokemon-list.fake';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

pokemonList = POKEMON_LIST;
  name = signal('pikatchu');
  life = signal(21);


  size (pokemon : Pokemon ) {
    if(pokemon.life <= 15) {
      return 'petit';
    }
    if(pokemon.life >= 25) {
      return 'grand';
    }

      return 'Moyen';

  };





  incrementLive(pokemon : Pokemon) {
pokemon.life = pokemon.life + 1;
  }
  decrementLive(pokemon : Pokemon) {
    pokemon.life = pokemon.life - 1;
  }
}
