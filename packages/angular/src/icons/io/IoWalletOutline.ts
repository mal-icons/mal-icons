import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-wallet-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoWalletOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"48","y":"144","width":"416","height":"288","rx":"48","ry":"48","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["path",{"d":"M411.36,144V114A50,50,0,0,0,352,64.9L88.64,109.85A50,50,0,0,0,48,159v49","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["path",{"d":"M368,320a32,32,0,1,1,32-32A32,32,0,0,1,368,320Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoWalletOutline;
