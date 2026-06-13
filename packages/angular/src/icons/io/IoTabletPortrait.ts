import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-tablet-portrait",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoTabletPortrait {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M384,512H128a64.07,64.07,0,0,1-64-64V64A64.07,64.07,0,0,1,128,0H384a64.07,64.07,0,0,1,64,64V448A64.07,64.07,0,0,1,384,512ZM128,32A32,32,0,0,0,96,64V448a32,32,0,0,0,32,32H384a32,32,0,0,0,32-32V64a32,32,0,0,0-32-32Z"}],["path",{"d":"M384,0a64.07,64.07,0,0,1,64,64V448a64.07,64.07,0,0,1-64,64H128a64.07,64.07,0,0,1-64-64V64A64.07,64.07,0,0,1,128,0H384M128,480H384a32,32,0,0,0,32-32V64a32,32,0,0,0-32-32H128A32,32,0,0,0,96,64V448a32,32,0,0,0,32,32m0-16a16,16,0,0,1-16-16V64a16,16,0,0,1,16-16H384a16,16,0,0,1,16,16V448a16,16,0,0,1-16,16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoTabletPortrait;
