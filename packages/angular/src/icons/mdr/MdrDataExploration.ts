import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-data-exploration",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDataExploration {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 1.330.26 2.610.74 3.77l4.61-4.62a1 1 0 0 1 1.35-0.06l2.6 2.19L14.58 10H14c-0.55 0-1-0.45-1-1s0.45-1 1-1h3c0.55 0 1 0.45 1 1v3c0 0.55-0.45 1-1 1s-1-0.45-1-1v-0.58l-3.94 3.93a0.990.99 0 0 1-1.350.05l-2.59-2.19-4.4 4.4A10 10 0 0 0 12 22h8c1.1 0 2-0.9 2-2v-8zm-2.5 8.5c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDataExploration;
