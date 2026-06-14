import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-arrow-right-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcArrowRight24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.22 19.03a0.750.75 0 0 1 0-1.06L18.19 13H3.75a0.750.75 0 0 1 0-1.5h14.44l-4.97-4.97a0.750.75 0 0 1 0.33-1.270.750.75 0 0 1 0.730.22l6.25 6.25a0.750.75 0 0 1 0 1.06l-6.25 6.25a0.750.75 0 0 1-1.06 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcArrowRight24;
