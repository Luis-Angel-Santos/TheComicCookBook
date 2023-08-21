import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { SwalBasicsService } from '../../../../shared/services/swal-basics.service';
import { Recipe } from '../../interfaces/recipes/recipe.interface';
import Swal from 'sweetalert2';
import { RecipeInstructions } from '../../interfaces/recipes/recipeInstructions.interface';

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
  public instructionRecipe!: RecipeInstructions ;
  public isLoaded:boolean = false;

  constructor(){

    this.idRecipe = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.getInfoRecipe();
    this.getInstructionsRecipe();

  }

  getInfoRecipe(){
    this.recipesService.getRecipe(this.idRecipe).subscribe({
      next: (receta) => {
        this.infoReceta = receta;
        this.isLoaded = true;
      },
      error: (error) => {
        this.swalBasicsService.showErrorAlert(error.message);
      }
    });
  }

  verIngredients(){
    Swal.fire({
      title: this.infoReceta.title,
      html: this.infoReceta.extendedIngredients
              .map(ingredient => `<p>${ingredient.original}</p>`).join(''),
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#3085d6',
      showCancelButton: false,
      showConfirmButton: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      focusConfirm: true,
    });
  }

  getInstructionsRecipe(){
    this.recipesService.getInstructions(this.idRecipe).subscribe({
      next: (instructions) => {
        this.instructionRecipe = instructions[0];
      },
      error: (error) => {
        this.swalBasicsService.showErrorAlert(error.message);
      }
    });
  }

}
