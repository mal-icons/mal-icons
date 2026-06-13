import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-square-chev-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiSquareChevLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Square Chev Left"}],["path",{"d":"M11.21,12l2.64,2.65a0.50.5,0,0,1-0.70.7c-0.13-0.12-0.25-0.24-0.38-0.37-0.87-0.87-1.75-1.75-2.62-2.63a0.490.49,0,0,1,0-0.7l3-3a0.50.5,0,0,1,0.70.7Z"}],["path",{"d":"M18.44,20.94H5.56a2.5,2.5,0,0,1-2.5-2.5V5.57a2.5,2.5,0,0,1,2.5-2.5H18.44a2.5,2.5,0,0,1,2.5,2.5V18.44A2.5,2.5,0,0,1,18.44,20.94ZM5.56,4.07a1.5,1.5,0,0,0-1.5,1.5V18.44a1.5,1.5,0,0,0,1.5,1.5H18.44a1.5,1.5,0,0,0,1.5-1.5V5.57a1.5,1.5,0,0,0-1.5-1.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiSquareChevLeft;
