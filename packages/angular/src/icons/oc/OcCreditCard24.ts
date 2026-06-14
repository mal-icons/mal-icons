import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-credit-card-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCreditCard24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.25 14a0.750.75 0 0 0 0 1.5h3.5a0.750.75 0 0 0 0-1.5h-3.5Z"}],["path",{"d":"M1.75 3h20.5c0.97 0 1.750.78 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25V4.75C0 3.780.78 3 1.75 3Zm-0.25 7v9.25c0 0.140.110.250.250.25h20.5a0.250.25 0 0 0 0.25-0.25V10Zm0-5.25V8.5h21V4.75a0.250.25 0 0 0-0.25-0.25H1.75a0.250.25 0 0 0-0.250.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCreditCard24;
