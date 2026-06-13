import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-card-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoCardSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M32,416a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V222H32ZM98,278a8,8,0,0,1,8-8h92a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H106a8,8,0,0,1-8-8Z"}],["path",{"d":"M464,80H48A16,16,0,0,0,32,96v66H480V96A16,16,0,0,0,464,80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoCardSharp;
