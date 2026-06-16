import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-voice-over-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdVoiceOverOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m16.76 5.36-1.68 1.69c0.8 1.130.83 2.580.09 3.74l1.7 1.7c1.9-2.02 1.87-4.98-0.11-7.13zM20.07 2l-1.63 1.63c2.72 2.97 2.76 7.390.14 10.56l1.64 1.64c3.74-3.89 3.71-9.84-0.15-13.83zM9.43 5.04l3.53 3.53a3.98 3.98 0 0 0-3.53-3.53zM4.41 2.86 3 4.27l2.62 2.62C5.23 7.5 5 8.22 5 9c0 2.21 1.79 4 4 4 0.78 0 1.5-0.23 2.11-0.62l4.4 4.4C13.74 15.6 10.78 15 9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-0.37-0.11-0.7-0.29-1.02L19.73 21l1.41-1.41L4.41 2.86zM3 19c0.22-0.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H3zm6-8c-1.1 0-2-0.9-2-2 0-0.220.04-0.420.11-0.62l2.51 2.51c-0.20.07-0.40.11-0.620.11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdVoiceOverOff;
