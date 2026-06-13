import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-cash-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoCashSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"48","y":"368","width":"416","height":"32"}],["rect",{"x":"80","y":"416","width":"352","height":"32"}],["path",{"d":"M480,176a96.11,96.11,0,0,1-96-96V64H128V80a96.11,96.11,0,0,1-96,96H16v64H32a96.11,96.11,0,0,1,96,96v16H384V336a96.11,96.11,0,0,1,96-96h16V176ZM256,304a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,304Z"}],["path",{"d":"M96,80V64H16v80H32A64.07,64.07,0,0,0,96,80Z"}],["path",{"d":"M32,272H16v80H96V336A64.07,64.07,0,0,0,32,272Z"}],["path",{"d":"M480,144h16V64H416V80A64.07,64.07,0,0,0,480,144Z"}],["path",{"d":"M416,336v16h80V272H480A64.07,64.07,0,0,0,416,336Z"}],["circle",{"cx":"256","cy":"208","r":"64"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoCashSharp;
