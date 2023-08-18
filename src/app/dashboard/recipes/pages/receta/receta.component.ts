import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { SwalBasicsService } from '../../../../shared/services/swal-basics.service';
import { Recipe } from '../../interfaces/recipes/recipe.interface';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent {

  private activatedRoute = inject(ActivatedRoute);
  private recipesService = inject(RecipesService);
  private swalBasicsService = inject(SwalBasicsService);
  private router = inject(Router);
  private idRecipe!: string;
  public infoReceta!: Recipe;

  constructor(){

    this.idRecipe = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.getInfoRecipe();

  }

  getInfoRecipe(){
    this.recipesService.getRecipe(this.idRecipe).subscribe({
      next: (receta) => {
        this.infoReceta = receta;
      },
      error: (error) => {
        this.swalBasicsService.showErrorAlert(error.message);
      }
    });
  }

}
