import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-fontawesome",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFontawesome {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.39 4.5c0.68-0.43 1.14-1.19 1.14-2.06C5.53 1.09 4.44 0 3.09 0 1.75 0 0.66 1.090.66 2.44c0 0.780.37 1.480.94 1.92V24h3v-3h17.51c0.68 0 1.24-0.55 1.24-1.24a1.24 1.24 0 0 0-0.11-0.5l-2.89-6.51 2.89-6.51a1.24 1.24 0 0 0 0.11-0.5c0-0.68-0.55-1.24-1.24-1.24Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFontawesome;
