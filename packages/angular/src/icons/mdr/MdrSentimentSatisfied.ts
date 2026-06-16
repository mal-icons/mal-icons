import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-sentiment-satisfied",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSentimentSatisfied {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"15.5","cy":"9.5","r":"1.5"}],["circle",{"cx":"8.5","cy":"9.5","r":"1.5"}],["path",{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.41-6.11a0.750.75 0 0 0-1.030.24C14.64 15.3 13.38 16 12 16s-2.64-0.7-3.38-1.88a0.750.75 0 1 0-1.270.79C8.37 16.54 10.1 17.5 12 17.5s3.63-0.97 4.65-2.58c0.22-0.350.11-0.81-0.24-1.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSentimentSatisfied;
