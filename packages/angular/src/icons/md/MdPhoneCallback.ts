import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-phone-callback",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdPhoneCallback {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 15.51c-1.24 0-2.45-0.2-3.57-0.57a0.840.84 0 0 0-0.31-0.05c-0.26 0-0.510.1-0.710.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c0.28-0.280.36-0.670.25-1.02A11.36 11.36 0 0 1 8.5 4c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1 0 9.39 7.61 17 17 17 0.55 0 1-0.45 1-1v-3.49c0-0.55-0.45-1-1-1zM5.03 5h1.5a13 13 0 0 0 0.46 2.59l-1.2 1.2c-0.41-1.2-0.67-2.47-0.76-3.79zM19 18.97c-1.32-0.09-2.59-0.35-3.8-0.75l1.19-1.19c0.850.24 1.720.39 2.60.45v1.49zM18 9h-2.59l5.02-5.02-1.41-1.41L14 7.59V5h-2v6h6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdPhoneCallback;
