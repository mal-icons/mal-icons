import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-arrow-cluster",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiArrowCluster {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M257.31 15.69l-50.37 87.53 28.16-8.53 22.28-38.72 22.41 38.78 28.13 8.47-50.59-87.53zm-138.94 77.75l18.5 99.28 14.16-22.09L141.6 120l48.97 17.31 23.12-10.16-95.31-33.72zm278.72 0l-95.31 33.72 23.88 10.5L375.56 120l-9.81 52.69 12.84 20.03 18.5-99.28zm-139.72 2.03l-9.34 2.84v104.47l9.69 11.34 9-10.5V98.28l-9.35-2.81zm81.22 52.03l-54.34 63.690.340.28-14.56 17 12.03 14.06 71.09-83.34-4.75-7.37-9.81-4.31zm-161.250.53l-8.6 3.78-5.47 8.53 255.5 299.47L433 447.69l-8.09-9.47 22.69-10.03 11.47-5.06-8.16-9.53-44.12-51.78-2.31-2.72-3.56-0.47-49.56-6.65-174-203.94zm56.06 123.22l-62.22 72.69-0.12-0.09-6.62 7.75-49.72 6.69-3.560.47-2.31 2.72-44.28 51.94-8.16 9.56 11.5 5.06 22.75 10.06-8.19 9.59 14.22 12.16L245.59 285.28l-12.19-14.03zm24.38 28.13l-9.75 11.28v178.75h18.69v-15.09l24.87 7.44 12.03 3.59v-87l-2.37-2.66-34.53-38.47v-47.5l-8.94-10.34zm-111.5 73.5l-42.94 50.38L86.91 416l33.84-39.69 25.53-3.44zm223.220.38l25.41 3.44 33.66 39.47-16.31 7.22-42.75-50.13zm-140.03 4.38l-16.06 18.09-2.34 2.66v87.03l12.06-3.66 6.34-1.91v-102.22zm37.25 7.56l18.22 20.31v54.75l-18.22-5.44v-69.62zm-87.75 5.41l-64.56 74.69 3.5 5.44 6.81 10.59 8.15-9.59 44.28-51.94 2.31-2.69-0.06-3.56-0.44-22.94zm157.910.16l-0.44 22.97-0.09 3.53 2.31 2.72 44.13 51.75 8.19 9.59 6.78-10.62 3.53-5.5-64.4-74.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiArrowCluster;
