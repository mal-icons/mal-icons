import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-up-thick",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowUpThick {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3.17l-6.41 6.41c-0.780.78-0.78 2.05 0 2.83s2.050.78 2.83 0l1.59-1.59v7.24c0 1.10.9 2 2 2 1.1 0 2-0.9 2-2v-7.24l1.59 1.59c0.390.390.90.59 1.410.59s1.02-0.19 1.41-0.59c0.78-0.780.78-2.05 0-2.83l-6.41-6.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowUpThick;
