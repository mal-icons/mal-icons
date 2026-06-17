import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-stack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsStack {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m14.12 10.16 1.720.86c0.220.110.220.42 0 0.53L8.27 15.34a0.60.6 0 0 1-0.53 0L0.17 11.56a0.30.3 0 0 1 0-0.53l1.72-0.86 5.32 2.66c0.510.25 1.10.25 1.6 0l5.32-2.66zM7.730.06a0.60.6 0 0 1 0.53 0l7.57 3.78a0.30.3 0 0 1 0 0.54L8.27 8.16a0.60.6 0 0 1-0.53 0L0.17 4.38a0.30.3 0 0 1 0-0.53z"}],["path",{"d":"m14.12 6.58 1.720.86c0.220.110.220.42 0 0.53l-7.57 3.78a0.60.6 0 0 1-0.53 0L0.17 7.97a0.30.3 0 0 1 0-0.53l1.72-0.86 5.32 2.66c0.510.25 1.10.25 1.6 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsStack;
