import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-circle-chev-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiCircleChevRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Circle Chev Right"}],["path",{"d":"M13.85,11.65a0.490.49,0,0,1,0,0.7l-3,3a0.50.5,0,0,1-0.7-0.7L12.79,12,10.15,9.35a0.50.5,0,0,1,0.7-0.7Z"}],["path",{"d":"M12,2.07A9.93,9.93,0,1,1,2.07,12,9.94,9.94,0,0,1,12,2.07Zm0,18.87A8.93,8.93,0,1,0,3.07,12,8.94,8.94,0,0,0,12,20.93Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiCircleChevRight;
