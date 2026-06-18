import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-norco",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNorco {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.06 2.71a0.970.97 0 0-0.690.39L0 16.78h4.05l7.27-9.6 1.93 5.74 1.42-1.87-2.58-7.68a0.980.98 0 0-1.03-0.67zM19.95 7.22l-7.27 9.6-1.93-5.74-1.42 1.88 2.58 7.68a0.990.99 0 1.720.28L24 7.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNorco;
