import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-square-chev-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiSquareChevRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Square Chev Right"}],["path",{"d":"M10.85,15.35a0.50.5,0,0,1-0.7-0.7L12.79,12,10.15,9.35a0.50.5,0,0,1,0.7-0.7l3,3a0.490.49,0,0,1,0,0.7Z"}],["path",{"d":"M18.44,20.94H5.56a2.5,2.5,0,0,1-2.5-2.5V5.56a2.5,2.5,0,0,1,2.5-2.5H18.44a2.5,2.5,0,0,1,2.5,2.5V18.44A2.5,2.5,0,0,1,18.44,20.94ZM5.56,4.06a1.5,1.5,0,0,0-1.5,1.5V18.44a1.5,1.5,0,0,0,1.5,1.5H18.44a1.5,1.5,0,0,0,1.5-1.5V5.56a1.5,1.5,0,0,0-1.5-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiSquareChevRight;
