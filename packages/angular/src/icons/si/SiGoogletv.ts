import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-googletv",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGoogletv {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.11 3.25A3.12 3.12 0 0 0 0 6.36V13.7a1.87 1.87 0 0 0 1.88 1.88h2.59V5.12c0-0.730.31-1.40.81-1.88zm3.94 0a1.87 1.87 0 0 0-1.88 1.88V7.71h16.95v0.02c0.73 0 1.40.31 1.880.81v-2.19a3.12 3.12 0 0 0-3.11-3.11zm12.48 5.18v10.46c0 0.73-0.31 1.4-0.81 1.88h2.17a3.12 3.12 0 0 0 3.11-3.11V10.3a1.87 1.87 0 0 0-1.88-1.88zM0 15.48v2.17a3.12 3.12 0 0 0 3.11 3.11h13.84a1.87 1.87 0 0 0 1.88-1.88V16.29H1.88c-0.73 0-1.4-0.31-1.88-0.81"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGoogletv;
