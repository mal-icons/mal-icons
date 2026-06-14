import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-image-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcImage16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 13.25A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75C0 1.780.78 1 1.75 1h12.5c0.97 0 1.750.78 1.75 1.75ZM1.75 2.5a0.250.25 0 0 0-0.250.25v10.5c0 0.140.110.250.250.25h0.94l0.03-0.03 6.08-6.08a1.75 1.75 0 0 1 2.41-0.06L14.5 10.31V2.75a0.250.25 0 0 0-0.25-0.25Zm12.5 11a0.250.25 0 0 0 0.25-0.25v-0.92l-4.3-3.89a0.250.25 0 0 0-0.340.01L4.81 13.5ZM7 6a2 2 0 1 1-40A2 2 0 0 1 7 6ZM5.5 6a0.50.5 0 1 0-1 0 0.50.5 0 0 0 1 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcImage16;
