import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-diamonds-four",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhDiamondsFour {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M116.17,107.1h0a16.75,16.75,0,0,0,23.66,0L171.1,75.82a16.72,16.72,0,0,0,0-23.65L139.83,20.89a16.75,16.75,0,0,0-23.66,0L84.9,52.17a16.72,16.72,0,0,0,0,23.65Zm-20-43.62,31.28-31.27a0.710.71,0,0,1,1,0l31.28,31.27a0.740.74,0,0,1,0,1L128.51,95.79a0.720.72,0,0,1-1,0L96.21,64.51A0.740.74,0,0,1,96.21,63.48Zm138.9,52.69L203.83,84.89a16.74,16.74,0,0,0-23.65,0L148.9,116.17a16.75,16.75,0,0,0,0,23.66l31.28,31.28h0a16.74,16.74,0,0,0,23.65,0l31.28-31.28A16.75,16.75,0,0,0,235.11,116.17ZM223.8,128.51l-31.28,31.28a0.740.74,0,0,1-1,0l-31.28-31.28a0.720.72,0,0,1,0-1l31.28-31.28a0.740.74,0,0,1,1,0l31.28,31.28A0.720.72,0,0,1,223.8,128.51ZM107.1,116.17,75.82,84.89a16.74,16.74,0,0,0-23.65,0L20.89,116.17a16.75,16.75,0,0,0,0,23.66l31.28,31.28h0a16.74,16.74,0,0,0,23.65,0l31.28-31.28A16.75,16.75,0,0,0,107.1,116.17ZM95.79,128.51,64.51,159.79a0.740.74,0,0,1-1,0L32.2,128.51a0.720.72,0,0,1,0-1L63.48,96.21a0.740.74,0,0,1,1,0l31.28,31.28A0.720.72,0,0,1,95.79,128.51Zm44,20.39a16.75,16.75,0,0,0-23.66,0L84.9,180.18a16.72,16.72,0,0,0,0,23.65l31.27,31.28h0a16.75,16.75,0,0,0,23.66,0l31.27-31.28a16.72,16.72,0,0,0,0-23.65Zm20,43.62-31.28,31.27a0.710.71,0,0,1-1,0L96.21,192.52a0.740.74,0,0,1,0-1l31.28-31.28a0.720.72,0,0,1,1,0l31.28,31.28A0.740.74,0,0,1,159.79,192.52Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhDiamondsFour;
