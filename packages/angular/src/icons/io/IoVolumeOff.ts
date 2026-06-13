import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-volume-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoVolumeOff {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M344,416a23.92,23.92,0,0,1-14.21-4.69c-0.23-0.16-0.44-0.33-0.66-0.51l-91.46-74.9H168a24,24,0,0,1-24-24V200.07a24,24,0,0,1,24-24h69.65l91.46-74.9c0.22-0.180.43-0.350.66-0.51A24,24,0,0,1,368,120V392a24,24,0,0,1-24,24Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoVolumeOff;
