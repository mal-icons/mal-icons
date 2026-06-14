import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-right-thick",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowRightThick {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.59 6.59c-0.780.78-0.78 2.05 0 2.83l1.59 1.59h-7.24c-1.1 0-2 0.9-2 2 0 1.10.9 2 2 2h7.24l-1.59 1.59c-0.780.78-0.78 2.05 0 2.830.390.390.90.59 1.410.59s1.02-0.19 1.41-0.59l6.41-6.41-6.41-6.41c-0.78-0.78-2.05-0.78-2.83 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowRightThick;
