import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-square-more",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiSquareMore {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Square More"}],["path",{"d":"M18.44,20.94H5.56a2.5,2.5,0,0,1-2.5-2.5V5.57a2.5,2.5,0,0,1,2.5-2.5H18.44a2.5,2.5,0,0,1,2.5,2.5V18.44A2.5,2.5,0,0,1,18.44,20.94ZM5.56,4.07a1.5,1.5,0,0,0-1.5,1.5V18.44a1.5,1.5,0,0,0,1.5,1.5H18.44a1.5,1.5,0,0,0,1.5-1.5V5.57a1.5,1.5,0,0,0-1.5-1.5Z"}],["circle",{"cx":"12","cy":"12","r":"1"}],["circle",{"cx":"16","cy":"12","r":"1"}],["circle",{"cx":"8","cy":"12","r":"1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiSquareMore;
