import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-webhook-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcWebhook16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.5 4.25a2.25 2.25 0 0 1 4.5 0 0.750.75 0 0 0 1.5 0 3.75 3.75 0 1 0-6.14 2.89l-2.27 4.26a0.750.75 0 0 0 1.320.71L7 7.25a0.750.75 0 0 0-0.31-1.01A2.25 2.25 0 0 1 5.5 4.25Z"}],["path",{"d":"M7.36 3.61a0.750.75 0 0 1 1.030.26l2.61 4.35a3.75 3.75 0 1 1-0.63 6.790.750.75 0 0 1 0.75-1.3 2.25 2.25 0 1 0-0.03-3.880.750.75 0 0 1-1.03-0.26L7.11 4.64a0.750.75 0 0 1 0.26-1.03Z"}],["path",{"d":"M2.9 8.78A0.750.75 0 0 1 2.63 9.8 2.25 2.25 0 1 0 6 11.75a0.750.75 0 0 1 0.75-0.75h5.5a0.750.75 0 0 1 0 1.5H7.43a3.75 3.75 0 1 1-5.55-40.750.75 0 0 1 1.020.27Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcWebhook16;
