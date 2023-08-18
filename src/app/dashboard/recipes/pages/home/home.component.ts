import { Component, inject } from '@angular/core';
import { Recipe, Recipes } from '../../interfaces/recipes/recipe.interface';
import { RecipesService } from '../../services/recipes.service';
import { SwalBasicsService } from 'src/app/shared/services/swal-basics.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private recipesService: RecipesService = inject(RecipesService);
  private alertService: SwalBasicsService = inject(SwalBasicsService);
  private fb = inject( FormBuilder );

  public randomRecipes: Recipes = {
    recipes: []
  };
  public autocompleteRecipes!: Recipe[];
  public rowSpan: number = 5;
  public isLoading: boolean = true;
  public terminoEncontrado: boolean = true;
  public autocompleteToSearch: string = "";
  public myControl: FormGroup = this.fb.group({
    search: ['']
  });
  public placehoders: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  ngOnInit(): void {
    this.recipesService.getRamdomRecipes().subscribe({
      next: (data) => {
        this.isLoading = false;
        this.randomRecipes.recipes = data.recipes;
      },
      error: (error) => {
        this.alertService.showErrorAlert(error.message);
      }
    });

    this.myControl.valueChanges.subscribe(value => {
      this.getAutoCompleteRecipes();
    })

  }

  getAutoCompleteRecipes() {
    this.recipesService.getAutocompleteRecipes(this.myControl.get('search')?.value, 5).subscribe({
      next: (data) => {
        console.log(data);
        if(data.length == 0) {
          this.terminoEncontrado = false;
        }
        this.autocompleteRecipes = data;
      },
      error: (error) => {
        this.alertService.showErrorAlert(error.message);
      }
    });
  }

}
