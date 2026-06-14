import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-times",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiTimes {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.41 6.59c-0.78-0.78-2.05-0.78-2.83 0l-2.59 2.59-2.59-2.59c-0.78-0.78-2.05-0.78-2.83 0-0.780.78-0.78 2.05 0 2.83l2.59 2.59-2.58 2.59c-0.780.78-0.78 2.05 0 2.830.390.390.90.59 1.410.59s1.02-0.19 1.41-0.59l2.59-2.59 2.59 2.59c0.390.390.90.59 1.410.59s1.02-0.19 1.41-0.59c0.78-0.780.78-2.05 0-2.83l-2.58-2.59 2.59-2.59c0.78-0.780.78-2.05 0-2.83z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiTimes;
