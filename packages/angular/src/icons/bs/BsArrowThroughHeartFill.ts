import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrow-through-heart-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrowThroughHeartFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M2.85 15.85A0.50.5 0 0 1 2 15.5V14H0.5a0.50.5 0 0 1-0.35-0.85l1.5-1.5A0.50.5 0 0 1 2 11.5h1.79l3.1-3.1a0.50.5 0 1 1 0.710.71L4.5 12.21V14a0.50.5 0 0 1-0.150.35zM16 3.5a0.50.5 0 0 1-0.850.35L14 2.71l-1.01 1.01c0.240.250.440.530.60.850.56 1.10.59 2.52-0.21 4.09-0.79 1.56-2.39 3.29-5.11 5.08L8 13.91l-0.28-0.18A24 24 0 0 1 5.8 12.32L8.31 9.81a1.5 1.5 0 0 0-2.12-2.12L3.66 10.22a9 9 0 0 1-1.04-1.57c-0.8-1.58-0.77-3-0.21-4.09C3.43 2.57 6.18 1.81 8 3.23c1.25-0.98 2.94-0.93 4.21-0.15L13.29 2 12.150.85A0.50.5 0 0 1 12.5 0h3a0.50.5 0 0 1 0.50.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrowThroughHeartFill;
