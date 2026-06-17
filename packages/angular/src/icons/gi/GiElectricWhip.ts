import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-electric-whip",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiElectricWhip {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M17.48 39.26c49.14 2.76 98.44 7.82 147.96 15.92l-6.19-37.09L298.61 124.75l8.18-41.98L421.17 255.67l32.39-29.33-4.66 171.83 45.94 6.66-128.06 62.76 28.44 25.59-234.39-2.7c405.34-23.83 225.85-392.45-143.33-451.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiElectricWhip;
