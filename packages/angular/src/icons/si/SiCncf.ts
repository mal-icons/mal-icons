import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-cncf",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCncf {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 0v24h24V0H8Zm3.43 3.43h4.54l0.030.02 4.54 4.54h3.03l-4.57-4.57h9.57v9.56l-0.79-0.78-3.78-3.79v3.03l2.27 2.27 2.27 2.270.030.03v4.54h-4.55l-0.02-0.02-2.27-2.28-2.27-2.27H8.43l3.79 3.790.780.78H3.43v-9.56l4.57 4.57v-3.03l-4.55-4.54-0.02-0.02Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCncf;
