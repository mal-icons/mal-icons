import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-headphones",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhHeadphones {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M201.89,62.66A103.43,103.43,0,0,0,128.79,32H128A104,104,0,0,0,24,136v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V152a24,24,0,0,0-24-24H40.36A88,88,0,0,1,128,48h0.67a87.71,87.71,0,0,1,87,80H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h16a24,24,0,0,0,24-24V136A103.41,103.41,0,0,0,201.89,62.66ZM64,144a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V144Zm152,48a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h24Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhHeadphones;
