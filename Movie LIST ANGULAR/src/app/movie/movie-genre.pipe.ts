import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieGenre'
})
export class MovieGenrePipe implements PipeTransform {

  transform(genre: string): string {
    let myClass:string;
    switch(genre){
      case "Action":
        myClass= "bg-danger";
        break;
        case "Comedy":
          myClass= "bg-primary";
          break;
          case "Thriller":
            myClass= "bg-warning";
            break;
            case "Drama":
              myClass= "bg-info";
              break;
              case "History":
                myClass= "bg-secondary";
                break;
                case "Biography":
                  myClass= "bg-light";
                  break;
                  case "Fantasy":
                    myClass= "bg-danger";
                    break;
                    default:
                      myClass= "bg-dark";

    }
    return myClass;

}
}