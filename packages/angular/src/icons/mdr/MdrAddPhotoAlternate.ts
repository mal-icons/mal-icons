import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-add-photo-alternate",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAddPhotoAlternate {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.02 5H19V2.98c0-0.54-0.44-0.98-0.98-0.98h-0.03c-0.55 0-0.990.44-0.990.98V5h-2.01c-0.54 0-0.980.44-0.990.98v0.03c0 0.550.440.990.990.99H17v2.01c0 0.540.440.990.990.98h0.03c0.54 0 0.98-0.440.98-0.98V7h2.02c0.54 0 0.98-0.440.98-0.98v-0.04c0-0.54-0.44-0.98-0.98-0.98zM16 9.01V8h-1.01c-0.53 0-1.03-0.21-1.41-0.58-0.37-0.38-0.58-0.88-0.58-1.44 0-0.360.1-0.690.27-0.98H5c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2v-8.28c-0.30.17-0.640.28-1.020.28A2 2 0 0 1 16 9.01zM15.96 19H6a0.50.5 0 0 1-0.4-0.8l1.98-2.63c0.21-0.280.62-0.260.820.02L10 18l2.61-3.48c0.2-0.260.59-0.270.79-0.01l2.95 3.68c0.260.330.030.81-0.390.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAddPhotoAlternate;
