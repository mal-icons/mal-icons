import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-process-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrProcessChart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M93-241q-11-5-14.5-16.5T80-280l217-427q5-11 17-14t23 2q11 5 14.5 16.5T350-680L133-253q-5 11-17 14t-23-2Zm264 0q-11-5-14.5-16.5T344-280l217-427q5-11 17-14t23 2q11 5 14.5 16.5T614-680L397-253q-5 11-17 14t-23-2Zm264 0q-11-5-14.5-16.5T608-280l217-427q5-11 17-14t23 2q11 5 14.5 16.5T878-680L661-253q-5 11-17 14t-23-2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrProcessChart;
