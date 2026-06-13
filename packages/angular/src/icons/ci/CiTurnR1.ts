import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-turn-r-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiTurnR1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Turn R 1"}],["path",{"d":"M3.06,9.51v10.93a0.510.51,0,0,0,0.50.50.50.5,0,0,0,0.5-0.5V9.51a3.5,3.5,0,0,1,3.5-3.5h9.9l0.01,1.44a0.50.5,0,0,0,0.810.4l2.47-1.96a0.50.5,0,0,0,0-0.78l-2.49-1.94a0.50.5,0,0,0-0.810.4l0.01,1.44h-9.9A4.51,4.51,0,0,0,3.06,9.51Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiTurnR1;
