import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-restaurant-menu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssRestaurantMenu {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m165-120-42-42 420-420q-22-48-10-99.5t57-96.5q45-44 109-56.5T804-806q42 42 28.5 105T772-590q-41 42-91.5 55t-94.5-6l-67 67 312 312-42 42-312-312-312 312Zm125-351L171-590q-51-51-53-121t46-124l245 245-119 119Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssRestaurantMenu;
