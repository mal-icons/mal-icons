import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-egg",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEgg {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 15a5 5 0 0 1-5-5c0-1.960.69-4.29 1.74-6.120.52-0.91 1.11-1.66 1.7-2.16C7.04 1.21 7.57 1 8 1s0.960.21 1.550.72c0.590.51 1.18 1.25 1.7 2.16C12.31 5.71 13 8.04 13 10a5 5 0 0 1-5 5m0 1a6 6 0 0 0 6-6c0-4.31-3-10-6-10S2 5.69 2 10a6 6 0 0 0 6 6"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEgg;
