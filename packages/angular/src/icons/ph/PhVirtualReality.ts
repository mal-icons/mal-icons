import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-virtual-reality",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhVirtualReality {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M123.41,99l-26,64a8,8,0,0,1-14.82,0l-26-64a8,8,0,1,1,14.82-6L90,138.74,108.59,93a8,8,0,1,1,14.82,6ZM256,128a80.09,80.09,0,0,1-80,80H80A80,80,0,0,1,80,48h96A80.09,80.09,0,0,1,256,128Zm-16,0a64.07,64.07,0,0,0-64-64H80a64,64,0,0,0,0,128h96A64.07,64.07,0,0,0,240,128Zm-59.16,10.35L191,156a8,8,0,0,1-13.9,7.94l-11.44-20c-0.53,0-1.070.05-1.610.05H152v16a8,8,0,0,1-16,0V96a8,8,0,0,1,8-8h20a28,28,0,0,1,16.84,50.35ZM152,128h12a12,12,0,0,0,0-24H152Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhVirtualReality;
