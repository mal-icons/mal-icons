import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-airplane-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsAirplaneFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.43 1.15C6.710.59 7.21 0 8 0s1.290.59 1.57 1.15C9.86 1.73 10 2.43 10 3v3.69l5.17 2.59a1.5 1.5 0 0 1 0.83 1.34V12a0.50.5 0 0 1-0.580.49l-5.51-0.92-0.37 2.25 1.32 1.32A0.50.5 0 0 1 10.5 16h-5a0.50.5 0 0 1-0.35-0.85l1.32-1.32-0.38-2.25-5.510.92A0.50.5 0 0 1 0 12v-1.38a1.5 1.5 0 0 1 0.83-1.34L6 6.69V3c0-0.570.14-1.270.43-1.85"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsAirplaneFill;
