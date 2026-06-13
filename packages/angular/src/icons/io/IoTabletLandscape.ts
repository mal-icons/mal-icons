import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-tablet-landscape",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoTabletLandscape {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M512,128V384a64.07,64.07,0,0,1-64,64H64A64.07,64.07,0,0,1,0,384V128A64.07,64.07,0,0,1,64,64H448A64.07,64.07,0,0,1,512,128ZM32,384a32,32,0,0,0,32,32H448a32,32,0,0,0,32-32V128a32,32,0,0,0-32-32H64a32,32,0,0,0-32,32Z"}],["path",{"d":"M0,128A64.07,64.07,0,0,1,64,64H448a64.07,64.07,0,0,1,64,64V384a64.07,64.07,0,0,1-64,64H64A64.07,64.07,0,0,1,0,384V128M480,384V128a32,32,0,0,0-32-32H64a32,32,0,0,0-32,32V384a32,32,0,0,0,32,32H448a32,32,0,0,0,32-32m-16,0a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V128a16,16,0,0,1,16-16H448a16,16,0,0,1,16,16V384Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoTabletLandscape;
