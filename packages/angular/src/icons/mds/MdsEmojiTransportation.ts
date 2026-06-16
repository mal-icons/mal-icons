import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-emoji-transportation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsEmojiTransportation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.57 10.66c-0.14-0.4-0.52-0.66-0.97-0.66h-7.19c-0.46 0-0.830.26-0.980.66L10 14.77l0.01 5.51c0 0.380.310.720.690.72h0.62c0.38 0 0.68-0.380.68-0.76V19h8v1.24c0 0.380.310.760.690.76h0.61c0.38 0 0.69-0.340.69-0.72l0.01-1.37v-4.14l-1.43-4.11zm-8.160.34h7.19l1.03 3h-9.25l1.03-3zM12 17c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm8 0c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}],["path",{"d":"M14 9h1V3H7v5H2v13h1V9h5V4h6z"}],["path",{"d":"M5 11h2v2H5zm5-6h2v2h-2zM5 15h2v2H5zm0 4h2v2H5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsEmojiTransportation;
