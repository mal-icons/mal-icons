import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-clock-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiClock2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Clock 2"}],["path",{"d":"M12,21.93A9.93,9.93,0,1,1,21.93,12,9.94,9.94,0,0,1,12,21.93ZM12,3.07A8.93,8.93,0,1,0,20.93,12,8.94,8.94,0,0,0,12,3.07Z"}],["path",{"d":"M18,12.5H12a0.430.43,0,0,1-0.34-0.14c-0.01,0-0.01-0.01-0.02-0.02A0.430.43,0,0,1,11.5,12V6a0.50.5,0,0,1,1,0v5.5H18A0.50.5,0,0,1,18,12.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiClock2;
