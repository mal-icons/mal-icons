import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-eyedrop-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoEyedropSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480,96.22a63.84,63.84,0,0,0-18.95-45.61,65,65,0,0,0-45.71-19h-0.76a61.78,61.78,0,0,0-44.22,19.09l-74.88,74.88L261.6,91.72l-34.07,33.91-33.85,34,44,44L32,409.37V480h70.63l205.7-205.71L352,317.94l11.31-11.19c0.11-0.1,10.42-10.31,22.79-22.68l33.85-34-33.89-33.89L461,141.23A63.18,63.18,0,0,0,480,96.22ZM245,292.35,219.65,267l40.68-40.69,25.38,25.38Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoEyedropSharp;
