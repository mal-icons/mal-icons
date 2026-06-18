import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-v2ex",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiV2ex {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.67 1.93h13.82a1.34 1.34 0 0 1 0.980.43l8.17 8.73a1.34 1.34 0 0 1 0 1.83l-8.17 8.72a1.34 1.34 0 0 1-0.980.43H0.67A0.670.67 0 0 1 0 21.4v-6.88h13.19l2.28-2.28a0.340.34 0 0 0 0-0.47l-2.28-2.28H0V2.6a0.670.67 0 0 1 0.67-0.67Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiV2ex;
