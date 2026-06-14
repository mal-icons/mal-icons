import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-left-thick",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowLeftThick {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 11h-7.24l1.59-1.59c0.78-0.780.78-2.05 0-2.83-0.78-0.78-2.05-0.78-2.83 0l-6.41 6.41 6.41 6.41c0.390.390.90.59 1.410.59s1.02-0.19 1.41-0.59c0.78-0.780.78-2.05 0-2.83l-1.59-1.59h7.24c1.1 0 2-0.9 2-2 0-1.1-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowLeftThick;
