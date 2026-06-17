import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-air-zigzag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAirZigzag {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M 185.9,21.67 C 273.67,103.13 325.9,190.88 363.19,289.15 275.49,184.91 242.31,163.72 116.89,109.33 208.45,181.54 226.11,200.35 279.73,286.05 209.69,233.82 113.35,182.99 20.76,155.41 l 0,85.4 c 95.45,24.54 244.61,97.1 311.84,175.21 -0.62,-25.58 -3.98,-51.15 -14.52,-76.72 l 108.86,111.97 c -6.54,-34.01 -20.51,-67.19 -41.99,-99.53 L 499.01,468.38 C 461.76,292.84 343.07,104.34 185.9,21.67z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAirZigzag;
