import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-phone-forwarded",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrPhoneForwarded {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m22.65 5.65-3.79-3.79a0.50.5 0 0 0-0.860.35V4h-3.5c-0.28 0-0.50.22-0.50.5v3c0 0.280.220.50.50.5H18v1.79c0 0.450.540.670.850.35l3.79-3.79c0.2-0.190.2-0.510.01-0.7zm-3.42 9.61-2.54-0.29a1.99 1.99 0 0 0-1.640.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c0.43-0.430.64-1.030.57-1.64l-0.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.070.94-2 2.070.53 8.54 7.36 15.36 15.89 15.89 1.130.07 2.07-0.87 2.07-2v-1.73c0.01-1.01-0.75-1.86-1.76-1.98z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrPhoneForwarded;
