import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-paperclip",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxPaperclip {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 5H9c-1.84 0-3.590.74-4.92 2.08C2.74 8.41 2 10.16 2 12c0 1.840.74 3.59 2.08 4.92C5.41 18.26 7.16 19 9 19h8v-2H9c-1.3 0-2.55-0.53-3.51-1.49C4.53 14.55 4 13.3 4 12c0-1.30.53-2.55 1.49-3.51C6.45 7.53 7.7 7 9 7h8V6l0 1h0c0.79 0 1.540.31 2.110.890.570.570.89 1.320.89 2.12a2.97 2.97 0 0 1-0.88 2.11A2.99 2.99 0 0 1 17 13H9a0.990.99 0 0 1-0.7-0.3A0.990.99 0 0 1 8 12c0-0.250.11-0.510.3-0.7A0.990.99 0 0 1 9 11h8V9H9c-0.79 0-1.540.32-2.110.89C6.31 10.46 6 11.21 6 12s0.31 1.540.89 2.11A2.97 2.97 0 0 0 9 15h8a4.97 4.97 0 0 0 3.53-1.47 4.97 4.97 0 0 00-7.05A4.95 4.95 0 0 0 17 5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxPaperclip;
