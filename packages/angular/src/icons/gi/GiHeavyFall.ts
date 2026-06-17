import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-heavy-fall",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiHeavyFall {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M21.25 19.03v53.25c64.79 65.86 124.52 170.33 154.16 274.5l-49.78-65.65C97.59 216.79 60.5 158.11 21.25 114v28.91c27.63 34.17 53.88 75.99 75.81 121.47l29.16 125.25-83.06-44.72L90 436.5l-63.19-5.69 56.09 55.41H173.5l-28.62-41.81 49.09 12.94 1.72-64.59 40.47 46.5 40.47-80.97-0.84 90.44 41.35-31-29.37 68.5h138.13l66.72-100.13-85.19 23.44 52.53-104.37-104.37 32.66 57.31-193.84-128.78 158.44C260.76 197.54 207.37 90.27 150.81 19.03h-24.22c41.91 49.39 83.75 122.4 112.75 199.97l-8.25 41.13c-35.75-93.2-90.41-180.8-139.94-241.09H21.25zm369.66 49.13l-60 56.03-2.12 78.53 49.35-74.25 12.78-60.31zm103.69 241.41l-34.44 56.66 34.44-16.94v-39.72z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiHeavyFall;
