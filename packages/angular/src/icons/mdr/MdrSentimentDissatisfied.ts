import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-sentiment-dissatisfied",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSentimentDissatisfied {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"15.5","cy":"9.5","r":"1.5"}],["circle",{"cx":"8.5","cy":"9.5","r":"1.5"}],["path",{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-1.9 0-3.630.97-4.65 2.58a0.750.75 0 1 0 1.270.79c0.74-1.18 2-1.88 3.38-1.88s2.640.7 3.38 1.88c0.140.230.390.350.640.350.14 0 0.27-0.040.4-0.110.35-0.220.46-0.680.24-1.03C15.63 14.96 13.9 14 12 14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSentimentDissatisfied;
