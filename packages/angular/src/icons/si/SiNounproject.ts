import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-nounproject",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNounproject {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.67 8.85H24v6.33h-6.33zM6.33 11.99a3.16 3.16 0 0 1-3.16 3.16A3.16 3.16 0 0 1 0 11.99a3.16 3.16 0 0 1 3.16-3.16 3.16 3.16 0 0 1 3.16 3.16m5.5 1.14l2.04 2.02 1.14-1.16-2.02-2 2.02-2-1.14-1.14-2.04 2L9.81 8.85 8.65 9.99l2.02 2-2.02 2 1.16 1.16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNounproject;
