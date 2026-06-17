import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-floating-crystal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFloatingCrystal {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M320.94 24.86v55.65l45.31 58.49v66.27l41.24-64.04L320.94 24.86zm-56.71 16.26l-76.77 94.76 87.09 27.78 64.58-29.15-24.81-32.02-50.09-61.36zm-143.07 88.5l-82.67 96.04 82.67 26.86V129.62zm226.4 21.59l-62.31 28.12v238.33l62.18-28.87V234.5l0.13-0.2V151.21zm-165.91 2.44v237.26l84.91 27.77V180.73l-84.91-27.08zM44.85 247.38l76.31 102.37v-77.58l-76.31-24.79zm331.31 4.41v154.42l82.75-13.53L376.16 251.79zm73.41 161.35L376.16 425.14v46.77l73.41-58.77zm-256.27 1.24l70.93 79.78 70.74-78.97-57.52 26.71-84.15-27.52z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFloatingCrystal;
