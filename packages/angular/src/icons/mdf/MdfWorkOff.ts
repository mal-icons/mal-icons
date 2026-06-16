import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-work-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfWorkOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m23 21.74-1.46-1.46L7.21 5.95 3.25 1.99 1.99 3.25l2.7 2.7h-0.64c-1.11 0-1.990.89-1.99 2l-0.01 11c0 1.110.89 2 2 2h15.64L21.74 23 23 21.74zM22 7.95c0.05-1.11-0.84-2-1.95-1.95h-4V3.95c0-1.11-0.89-2-2-1.95h-4c-1.11-0.05-2 0.84-2 1.95v0.32l13.95 14V7.95zM14.05 6H10V3.95h4.05V6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfWorkOff;
