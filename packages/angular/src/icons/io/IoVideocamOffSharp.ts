import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-videocam-off-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoVideocamOffSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"232","y":"-5.59","width":"32","height":"507.18","transform":"translate(-102.72 248) rotate(-45)"}],["path",{"d":"M32,112a16,16,0,0,0-16,16V384a16,16,0,0,0,16,16H320a15.89,15.89,0,0,0,9.34-3l-285-285Z"}],["path",{"d":"M336,208V128a16,16,0,0,0-16-16H179.63L425.07,357.44,496,400V112Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoVideocamOffSharp;
