import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-sort-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsSortAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.23 11h11.55c0.86 0 1.32-1.020.75-1.66L12.75 2.84a11 0 0 0-1.49 0L5.48 9.34C4.91 9.98 5.36 11 6.23 11zm5.03 10.16a11 0 0 0 1.49 0l5.77-6.49c0.57-0.640.12-1.66-0.75-1.66H6.23c-0.86 0-1.32 1.02-0.75 1.67l5.77 6.49z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsSortAlt;
