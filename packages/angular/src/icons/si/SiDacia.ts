import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-dacia",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDacia {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 8.65v2.23h8.25v2.25H0v2.23h9.11a0.620.62 0 0.49-0.2L12 12.82l2.4 2.33a0.620.62 0 0.490.2H24v-2.23h-8.25v-2.25H24v-2.23h-9.11a0.620.62 0 0-0.490.2L12 11.18 9.6 8.85a0.620.62 0 0-0.49-0.2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDacia;
