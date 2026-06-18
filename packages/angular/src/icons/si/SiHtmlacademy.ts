import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-htmlacademy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHtmlacademy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0L2.520.99v17.37L12 24l9.48-5.64V0.99L12.10.01 12 0zm8.24 17.66L12 22.56l-8.24-4.9v-7.12l8.2 4.880.010.89-5.63-3.35-0.010.86 5.65 3.390.020.91-5.65-3.36-0.010.86L12 19.01l5.7-3.41v-0.86l-0.010v-2.8l2.54-1.52v7.24zm-0.01-8.16l-2.25 1.33-1.040.61-4.96-2.95-0.010.86 4.24 2.52-0.040.02-0.090.05-0.60.36-3.5-2.08-0.010.86 2.76 1.64-0.650.44-0.010.01-2.09-1.23-0.010.86 1.370.81-1.390.84-8.16-4.85 8.17-4.91v0l8.28 4.82zm0.01-0.86l-8.28-4.88h0l-8.19 4.88V2.11L12 1.25l8.240.86v6.52z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHtmlacademy;
