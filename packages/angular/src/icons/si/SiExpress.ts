import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-express",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiExpress {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 18.59a1.53 1.53 0 1-1.89-0.72l-3.45-4.77-0.5-0.67-4 5.44a1.47 1.47 0 1-1.80.71l5.16-6.92-4.8-6.25a1.6 1.6 0 11.90.67l3.58 4.83 3.6-4.81a1.44 1.44 0 11.79-0.67L21.71 7.9l-2.52 3.28a0.670.67 0 0 0.99l4.8 6.41zM0 11.58l0.42-2.08c1.15-4.1 5.86-5.81 9.09-3.27 1.9 1.49 2.37 3.6 2.28 5.97H1.12C0.94 16.45 4.01 19.01 7.92 17.7a4.08 4.08 0 2.58-2.88c0.21-0.670.55-0.78 1.17-0.59a5.42 5.42 0 1-2.59 3.96 6.27 6.27 0 1-7.31-0.93 6.58 6.58 0 1-1.64-3.86c0-0.23-0.08-0.45-0.13-0.67A88.33 88.33 0 10 11.58zm1.13-0.29h9.65c-0.06-3.08-2-5.26-4.59-5.28-2.88-0.04-4.94 2.09-5.07 5.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiExpress;
