import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-processingfoundation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiProcessingfoundation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0a12 12 0 100 24A12 12 0 12 0zm1.18 5.26h0.05c3.27 0 5.25 1.48 5.25 4.1 0 2.73-1.97 4.54-5.29 4.67v-1.74c1.84-0.11 2.8-1.06 2.8-2.74 0-1.5-0.96-2.44-2.8-2.52zm-1.770.03l0.01 11.9c0.780.05 1.580.18 2.260.34l-0.27 1.32H6.79v-1.32a14.96 14.96 0 12.26-0.34V6.99a14.71 14.71 0 1-2.26-0.34V5.33h2.26c0.64 0 1.47-0.03 2.36-0.05z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiProcessingfoundation;
