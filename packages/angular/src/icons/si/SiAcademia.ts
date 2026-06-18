import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-academia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAcademia {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.03 21.18L13.770.46H7.87l1.05 2.62L1.84 21.18C1.57 22.10.79 22.23 0 22.36v1.18h6.82v-1.18C4.98 22.23 3.93 21.97 4.72 20c0.13-0.130.66-1.57 1.31-3.41h8.39l1.18 3.02c0.130.530.260.920.26 1.31 0 1.05-0.92 1.44-2.62 1.44v1.18H24v-1.18c-0.92-0.13-1.7-0.39-1.97-1.18zM6.82 14.36a363.3 363.3 0 0 0 3.28-8.52l3.41 8.53H6.82z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAcademia;
