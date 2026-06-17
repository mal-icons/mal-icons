import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-badge-ar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBadgeAr {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m3.79 11 0.47-1.54H6.27L6.74 11H8L6 5H4.61L2.6 11zm1.5-4.850.73 2.43h-1.52l0.73-2.43zm5.6-1.15H8.5V11h1.17V8.76h1.06L11.79 11h1.33L11.91 8.58C12.46 8.37 13 7.78 13 6.9c0-1.15-0.77-1.9-2.1-1.9zm-1.22 2.87V5.93h1.05c0.63 0 1.050.35 1.050.99 0 0.63-0.410.95-1.070.95z"}],["path",{"d":"M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBadgeAr;
