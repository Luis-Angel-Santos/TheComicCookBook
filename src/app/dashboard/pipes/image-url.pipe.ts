import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {

  transform(recipeId: number, imageType: string, imageSize: string): string {

    return `https://spoonacular.com/recipeImages/${recipeId}-${imageSize}.${imageType}`;

  }

}
