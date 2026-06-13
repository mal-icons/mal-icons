import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-avocado",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiAvocado {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.98,21.94a7.76,7.76,0,0,1-0.82-0.04A7.58,7.58,0,0,1,6.1,9.6a3.58,3.58,0,0,0,0.68-2.27,5.13,5.13,0,0,1,3.8-5.08,5.27,5.27,0,0,1,4.60.89,5.19,5.19,0,0,1,2.04,4.14A3.6,3.6,0,0,0,17.9,9.61a7.57,7.57,0,0,1-5.92,12.33Zm0.01-18.88a4.54,4.54,0,0,0-1.160.15,4.13,4.13,0,0,0-3.05,4.07,4.53,4.53,0,0,1-0.9,2.95,6.56,6.56,0,0,0-1.37,5.23A6.64,6.64,0,0,0,11.27,20.9a6.58,6.58,0,0,0,5.85-10.66,4.45,4.45,0,0,1-0.9-2.9,4.21,4.21,0,0,0-4.23-4.27Z"}],["ellipse",{"cx":"12","cy":"14.86","rx":"2.5","ry":"3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiAvocado;
