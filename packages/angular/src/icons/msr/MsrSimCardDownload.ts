import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-sim-card-download",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSimCardDownload {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M512-394v-164q0-12.75-8.68-21.37-8.68-8.62-21.5-8.62-12.82 0-21.32 8.63T452-558v164l-62-62q-9-9-21.1-9-12.1 0-20.9 9-9 9-9 21.5t9 21.5l113 114q9 9 21 9t21-9l114-114q9-9 9-21.5t-9-21.5q-9-9-21.5-9t-21.5 9l-62 62ZM220-80q-24 0-42-18t-18-42v-476q0-12.44 5-23.72T178-659l203-203q8-8 19.28-13 11.28-5 23.72-5h316q24 0 42 18t18 42v680q0 24-18 42t-42 18H220Zm0-60h520v-680H426L220-613.87V-140Zm0 0h520-520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSimCardDownload;
