import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-monitor-weight-gain",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssMonitorWeightGain {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M730-40v-130H600v-60h130v-130h60v130h130v60H790v130h-60ZM180-180v-600 600Zm-60 60v-720h720v421h-60v-361H180v600h361v60H120Zm359.88-369Q529-489 563.5-523.38q34.5-34.38 34.5-83.5Q598-656 563.62-690.5q-34.38-34.5-83.5-34.5Q431-725 396.5-690.62q-34.5 34.38-34.5 83.5Q362-558 396.38-523.5q34.38 34.5 83.5 34.5ZM397-587v-40h40v40h-40Zm63 0v-40h40v40h-40Zm63 0v-40h40v40h-40Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssMonitorWeightGain;
