import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-back",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowBack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 9.06v-2.56c0-0.26-0.1-0.51-0.29-0.71-0.19-0.19-0.45-0.29-0.71-0.29s-0.510.1-0.710.29l-6.29 6.21 6.29 6.21c0.20.20.450.290.710.29s0.51-0.10.71-0.290.29-0.450.29-0.71v-2.49c2.750.07 5.760.57 8 3.99v-1c0-4.63-3.5-8.44-8-8.94z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowBack;
