import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-videocam-off-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoVideocamOffOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-width":"32","stroke-linejoin":"round","d":"M374.79,308.78,457.5,367A16,16,0,0,0,480,352.38V159.62A16,16,0,0,0,457.5,145l-82.71,58.22A16,16,0,0,0,368,216.3v79.4A16,16,0,0,0,374.79,308.78Z"}],["path",{"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-width":"32","stroke-miterlimit":"10","d":"M50.19,140.57A51.94,51.94,0,0,0,32,180V332a52.15,52.15,0,0,0,52,52H268a51.6,51.6,0,0,0,22-4.9"}],["path",{"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-width":"32","stroke-miterlimit":"10","d":"M208,128h60.48A51.68,51.68,0,0,1,320,179.52V248"}],["line",{"fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-width":"32","stroke-miterlimit":"10","x1":"416","y1":"416","x2":"80","y2":"80"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoVideocamOffOutline;
