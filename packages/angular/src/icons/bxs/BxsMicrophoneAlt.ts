import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-microphone-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsMicrophoneAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 12H4c0 4.07 3.06 7.44 7 7.93V22h2v-2.07c3.94-0.49 7-3.86 7-7.93h-2c0 3.31-2.69 6-6 6s-6-2.69-6-6z"}],["path",{"d":"M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4h-2v-2h2V8h-2V6h2c0-2.22-1.78-4.02-3.98-4.02a0.930.93 0 0 0-0.210.03A4.01 4.01 0 0 0 8 6h4v2H8v2h4v2H8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsMicrophoneAlt;
