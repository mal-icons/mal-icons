import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-fragmented-meteor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFragmentedMeteor {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M21.89 14.13L219.02 248.45l-168.37-153.8 166.03 190.22-52.18 3.79 70.33 46.83-50.58 13.23 44.18 5.15-59.26 43.96 95.68-4.9-19.04 66.44 64.65-52.75 18.36 83.87 18.74-56.71 9.96 35.68 5.63-50.85 53.25 49.7-12.94-80.61 65.41 8.31-39.7-45.69 65.54-41.3-77.66-3.06 36.02-36.22-54.78 23.73 10.58-69.5-54.5 42.59-27.46-71.25-11.86 44.59L111.72 45 212.56 183.22 21.89 14.13h0zm305.02 181.18v0h0l00zm34.6 101.27l36.87 45.13-36.03 13.85 1.31-23.15-52.26-16.94 50.11-18.89zm-41.33 35.05l-2.13 49.29-41-12.37 8.74-27.44 34.39-9.48zm17.54 37.21l42.14 14.05-40.8 20.73-1.34-34.78z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFragmentedMeteor;
