import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-carthrottle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCarthrottle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 19.99h5.31l1-5.76h2.67L7.97 19.99h5.27l1.04-5.76h2.82l-1 5.76h7.58L21.9 17.03 24 4.01h-5.16l-0.99 5.65h-2.86l0.94-5.65H8.48l1.72 2.75-0.49 2.9H7l0.9-5.65H0.35l1.76 2.77Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCarthrottle;
