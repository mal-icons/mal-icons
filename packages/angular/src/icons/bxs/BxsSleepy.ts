import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-sleepy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsSleepy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-4 9.01-2-0.02C6.02 9.39 7.1 7 10 7v2c-1.92 0-2 1.81-2 2.01zM12 18c-1.66 0-3-1.12-3-2.5s1.34-2.5 3-2.5 3 1.12 3 2.5-1.34 2.5-3 2.5zm5-7-1 0.01C15.99 10.54 15.83 9 14 9V7c2.94 0 4 2.39 4 4h-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsSleepy;
