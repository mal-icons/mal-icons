import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-removedotbg",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRemovedotbg {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m23.73 13.55-1.9-0.99-9.13 4.78a1.5 1.5 0 0 1-1.380l-9.14-4.78-1.91a0.50.5 0 0 0 0 0.89l11.5 6.01a0.50.5 0 0 0 0.46 0l11.5-6.01a0.50.5 0 0 0 0-0.89zM0.27 10.45l11.5 6.01a0.50.5 0 0 0 0.46 0l11.5-6.01a0.50.5 0 0 0 0-0.89l-11.5-6.01a0.510.51 0 0 0-0.46 0L0.27 9.56a0.50.5 0 0 0 00.89z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRemovedotbg;
