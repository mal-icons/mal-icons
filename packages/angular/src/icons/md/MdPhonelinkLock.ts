import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-phonelink-lock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdPhonelinkLock {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 1H9c-1.1 0-2 0.9-2 2v3h2V4h10v16H9v-2H7v3c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zm-8.2 10V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11c-0.6 0-1.20.6-1.2 1.2v3.5c0 0.70.6 1.3 1.2 1.3h5.5c0.7 0 1.3-0.6 1.3-1.2v-3.5c0-0.7-0.6-1.3-1.2-1.3zm-1.3 0h-3V9.5c0-0.80.7-1.3 1.5-1.3s1.50.5 1.5 1.3V11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdPhonelinkLock;
