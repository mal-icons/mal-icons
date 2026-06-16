import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-science",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrScience {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.54 17.73 15 11V5h1c0.55 0 1-0.45 1-1s-0.45-1-1-1H8c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v6l-5.54 6.73c-0.320.39-0.460.83-0.46 1.270.01 1.030.82 2 2 2h14c1.19 0 2-0.97 2-2 0-0.44-0.14-0.88-0.46-1.27z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrScience;
