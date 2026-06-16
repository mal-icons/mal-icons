import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-phonelink-lock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsPhonelinkLock {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 1H7v5h2V4h10v16H9v-2H7v5h14V1zM10.8 11V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11H4v6h8v-6h-1.2zm-1.3 0h-3V9.5c0-0.80.7-1.3 1.5-1.3s1.50.5 1.5 1.3V11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsPhonelinkLock;
