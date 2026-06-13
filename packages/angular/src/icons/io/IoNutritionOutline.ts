import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-nutrition-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoNutritionOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M352,128c-32.26-2.89-64,16-96,16s-63.75-19-96-16c-64,6-96,64-96,160,0,80,64,192,111.2,192s51.94-24,80.8-24,33.59,24,80.8,24S448,368,448,288C448,192,419,134,352,128Z","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["path",{"d":"M323.92,83.14c-21,21-45.66,27-58.82,28.79A8,8,0,0,1,256,103.2a97.6,97.6,0,0,1,28.61-59.33c22-22,46-26.9,58.72-27.85A8,8,0,0,1,352,24.94,98,98,0,0,1,323.92,83.14Z"}],["ellipse",{"cx":"216","cy":"304","rx":"24","ry":"48"}],["ellipse",{"cx":"296","cy":"304","rx":"24","ry":"48"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoNutritionOutline;
