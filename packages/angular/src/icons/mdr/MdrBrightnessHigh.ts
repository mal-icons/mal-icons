import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-brightness-high",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBrightnessHigh {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 8.69V6c0-1.1-0.9-2-2-2h-2.69l-1.9-1.9c-0.78-0.78-2.05-0.78-2.83 0L8.69 4H6c-1.1 0-2 0.9-2 2v2.69l-1.9 1.9c-0.780.78-0.78 2.05 0 2.83l1.9 1.9V18c0 1.10.9 2 2 2h2.69l1.9 1.9c0.780.78 2.050.78 2.83 0l1.9-1.9H18c1.1 0 2-0.9 2-2v-2.69l1.9-1.9c0.78-0.780.78-2.05 0-2.83L20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBrightnessHigh;
