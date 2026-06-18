import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-disqus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDisqus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.44 23.65c-2.85 0-5.46-1.04-7.48-2.77L0 21.57l1.92-4.73C1.25 15.360.88 13.730.88 12 0.88 5.56 6.050.35 12.440.35 18.820.35 24 5.56 24 12c0 6.44-5.18 11.65-11.56 11.65zm6.32-11.69v-0.03c0-3.36-2.37-5.76-6.46-5.76H7.88V17.83h4.35c4.12 0 6.53-2.5 6.53-5.86h0zm-6.41 3h-1.29V9.04h1.29c1.9 0 3.16 1.08 3.16 2.95v0.03c0 1.88-1.26 2.95-3.16 2.95z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDisqus;
