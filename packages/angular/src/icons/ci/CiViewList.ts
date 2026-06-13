import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-view-list",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiViewList {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"View List"}],["path",{"d":"M18.44,20.94H5.56a2.5,2.5,0,0,1-2.5-2.5V5.56a2.5,2.5,0,0,1,2.5-2.5H18.44a2.5,2.5,0,0,1,2.5,2.5V18.44A2.5,2.5,0,0,1,18.44,20.94ZM5.56,4.06a1.5,1.5,0,0,0-1.5,1.5V18.44a1.5,1.5,0,0,0,1.5,1.5H18.44a1.5,1.5,0,0,0,1.5-1.5V5.56a1.5,1.5,0,0,0-1.5-1.5Z"}],["path",{"d":"M6.54,8.28h0a0.520.52,0,0,1-0.35-0.150.50.5,0,0,1,0-0.710.510.51,0,0,1,0.35-0.15H7.55a0.520.52,0,0,1,0.350.150.50.5,0,0,1,0.150.350.50.5,0,0,1-0.50.5Z"}],["path",{"d":"M6.54,12.5h0a0.520.52,0,0,1-0.35-0.150.50.5,0,0,1,0-0.710.520.52,0,0,1,0.35-0.15H7.55a0.520.52,0,0,1,0.350.150.50.5,0,0,1,0,0.710.520.52,0,0,1-0.350.15Z"}],["path",{"d":"M6.54,16.72h0a0.520.52,0,0,1-0.35-0.150.50.5,0,0,1,0-0.710.520.52,0,0,1,0.35-0.15H7.55a0.520.52,0,0,1,0.350.150.50.5,0,0,1,0.150.350.50.5,0,0,1-0.50.5Z"}],["path",{"d":"M10.55,8.28h0a0.50.5,0,0,1,0-1h6.9a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M10.55,12.5h0a0.50.5,0,0,1,0-1h6.9a0.50.5,0,0,1,0,1Z"}],["path",{"d":"M10.55,16.72h0a0.50.5,0,0,1,0-1h6.9a0.50.5,0,0,1,0,1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiViewList;
