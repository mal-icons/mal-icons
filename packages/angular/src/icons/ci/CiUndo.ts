import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-undo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiUndo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.94,13.67A7.96,7.96,0,0,1,7.8,19.74a8.06,8.06,0,0,1-3.77-6.770.50.5,0,0,1,1,0,6.98,6.98,0,0,0,11,5.7,6.97,6.97,0,0,0-1-11.97,10.07,10.07,0,0,0-4.64-0.69V7.46a0.50.5,0,0,1-0.810.39L7.11,5.9a0.50.5,0,0,1,0-0.79L9.6,3.17a0.50.5,0,0,1,0.80.4V5.01c0.71-0.01,1.43-0.03,2.130.02a7.99,7.99,0,0,1,7.41,8.64Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiUndo;
