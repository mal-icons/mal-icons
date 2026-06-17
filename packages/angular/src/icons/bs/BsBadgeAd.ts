import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-badge-ad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBadgeAd {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m3.7 11 0.47-1.54h2L6.64 11h1.26L5.9 5H4.51L2.5 11zm1.5-4.850.73 2.43H4.42l0.73-2.43zm4.760.13c-1.06 0-1.750.77-1.75 2.04v0.7c0 1.280.69 2.04 1.74 2.040.68 0 1.22-0.33 1.37-0.8h0.06V11h1.14V4.68h-1.16v2.36h-0.05c-0.18-0.47-0.68-0.77-1.34-0.77zm0.390.92c0.58 0 10.44 1 1.14v0.6c0 0.76-0.4 1.2-0.98 1.2-0.6 0-0.97-0.45-0.97-1.25v-0.45c0-0.790.37-1.240.95-1.24z"}],["path",{"d":"M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBadgeAd;
