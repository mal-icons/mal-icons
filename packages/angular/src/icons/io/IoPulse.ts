import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-pulse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoPulse {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M432,272a48.09,48.09,0,0,0-45.25,32H347.53l-28.35-85.06a16,16,0,0,0-30.560.66L244.11,375.36l-52.33-314a16,16,0,0,0-31.3-1.25L99.51,304H48a16,16,0,0,0,0,32h64a16,16,0,0,0,15.52-12.12l45.34-181.37,51.36,308.12A16,16,0,0,0,239.1,464c0.3,0,0.6,0,0.91,0a16,16,0,0,0,15.37-11.6l49.8-174.28,15.64,46.94A16,16,0,0,0,336,336h50.75A48,48,0,1,0,432,272Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoPulse;
