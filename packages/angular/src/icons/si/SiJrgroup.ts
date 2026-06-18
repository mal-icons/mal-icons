import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-jrgroup",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiJrgroup {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.95 13.65h1.09c2.68 0 2.68-4.12 2.68-4.12s0-4.16-2.68-4.16H9.18v8.87c0 1.56-3.11 1.48-3.11 1.48s-3.070.12-3.07-1.48v-3.42H0v4.39c0 3.19 5.68 3.38 6.11 3.420.43 0 6.11-0.19 6.11-3.42V8.36h7.9c0.66 0 0.66 1.170.66 1.17s0 1.17-0.66 1.17h-6.07l5.95 7.7H24Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiJrgroup;
