import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-resend",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiResend {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.68 0c4.65 0 7.41 2.77 7.41 6.43s-2.76 6.43-7.41 6.43H12.33L24 24h-8.24l-8.88-8.44c-0.64-0.59-0.93-1.27-0.93-1.86 0-0.830.59-1.56 1.71-1.88l4.57-1.22c1.74-0.46 2.94-1.81 2.94-3.57 0-2.15-1.76-3.4-3.94-3.4H0V0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiResend;
