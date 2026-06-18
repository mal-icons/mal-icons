import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-nushell",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNushell {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 16.34h1.25v-5.7c0.42-0.62 1.21-1.31 2.13-1.31 1.18 0 1.340.64 1.34 2.25v4.76h1.25v-5.68c0-1.46-0.67-2.32-2.2-2.32-0.92 0-1.960.46-2.59 1.26l-0.1-1.1H0Zm10.18-7.84h-1.25v5.7c0 1.460.75 2.31 2.26 2.310.92 0 1.89-0.43 2.51-1.22l0.1 1.06h1.07V8.5h-1.25v5.77c-0.430.67-1.26 1.25-2.13 1.25-0.91 0-1.32-0.45-1.32-1.46zm8.11-1-0.610.95 5.25 3.23-5.25 3.240.670.92L24 12.32v-1.28z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNushell;
