import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-raw-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsRawOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17.15 14.320.59-2.360.76 3.04h1.48l1.5-6h-1.5l-0.74 3-0.74-3h-1.52l-0.74 3-0.74-3H14l0.72 2.9zM1.39 4.22 6.17 9H3v6h1.5v-2h1.1l0.9 2H8l-0.9-2.1c0.5-0.30.9-0.80.9-1.4v-0.67l1.43 1.43L8.75 15h1.5l0.38-1.5h0.04l9.11 9.11 1.41-1.41L2.81 2.81 1.39 4.22zM6.5 11.5h-2v-1h2v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsRawOff;
