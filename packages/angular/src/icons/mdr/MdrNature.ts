import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-nature",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrNature {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 16.12c3.37-0.4 6.01-3.19 6.16-6.640.17-3.87-3.02-7.25-6.89-7.31-3.92-0.05-7.1 3.1-7.1 7A6.98 6.98 0 0 0 11 16.06V20H6c-0.55 0-1 0.45-1 1s0.45 1 1 1h12c0.55 0 1-0.45 1-1s-0.45-1-1-1h-5v-3.88z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrNature;
