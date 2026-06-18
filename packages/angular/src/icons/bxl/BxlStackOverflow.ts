import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-stack-overflow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlStackOverflow {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.24 19.4v-4.8h1.6V21H4.38v-6.4h1.6v4.8H17.24zM7.58 17.8h8.06v-1.6H7.58V17.8zm0.2-3.64 7.86 1.640.34-1.55-7.86-1.64-0.34 1.55zm1.02-3.79 7.28 3.40.68-1.46-7.28-3.4-0.68 1.45v0.01zm2.04-3.59 6.17 5.14 1.02-1.22-6.16-5.14-1.02 1.21-0.010zm3.98-3.78-1.310.97 4.8 6.45 1.31-0.97-4.81-6.45h0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlStackOverflow;
