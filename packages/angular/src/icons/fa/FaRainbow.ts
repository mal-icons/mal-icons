import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fa-rainbow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FaRainbow {
  readonly viewBox = "0 0 640 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320 96C178.6 96 64 210.6 64 352l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96C0 175.3 143.3 32 320 32s320 143.3 320 320l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96C576 210.6 461.4 96 320 96zm0 192c-35.3 0-64 28.7-64 64l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-70.7 57.3-128 128-128s128 57.3 128 128l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-35.3-28.7-64-64-64zM160 352l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-123.7 100.3-224 224-224s224 100.3 224 224l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-88.4-71.6-160-160-160s-160 71.6-160 160z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FaRainbow;
