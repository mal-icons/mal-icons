import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-alert-square-rounded-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAlertSquareRoundedOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.2 19.2c-1.35 1.35 -3.6 1.8 -7.2 1.8c-7.2 0 -9 -1.8 -9 -9c0 -3.6 0.45 -5.85 1.8 -7.2m2.63 -1.38c1.2 -0.31 2.71 -0.43 4.58 -0.43c7.2 0 9 1.8 9 9c0 1.87 -0.12 3.37 -0.42 4.57"}],["path",{"d":"M12 7v1"}],["path",{"d":"M12 16h0.01"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAlertSquareRoundedOff;
