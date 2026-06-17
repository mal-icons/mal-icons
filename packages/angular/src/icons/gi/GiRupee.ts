import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-rupee",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiRupee {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M247 25.08L107.05 130l65 32.49L247 106.3v-81.22zm18 0v81.22l74.95 56.19 65-32.49L265 25.08zm9.28 22.31l36.63 26.44c-25.12-4.21-29.74 9.2-37.35 28.8l0.72-55.24zm-37.79 3.93l-0.27 33.36c-22.05 1.18-56.79 14.42-107.89 43.99L236.49 51.31zM256 122.04l-74 55.48v156.95l74 55.48 74-55.48V177.53l-74-55.48zm4.22 17.67c-37.5 33.84-60.64 164.83-63.65 199.09l-0.35-151.09 64-48zM99 146.1v219.8l65-32.49V178.59L99 146.1zm314 0l-65 32.49v154.82l65 32.49V146.1zm-301.35 23.31l40.47 20.83c-46.28 38.76-30.79 122.69-41.88 162.57l1.4-183.4zm60.4 180.1l-64.99 32.49L247 486.92v-81.22l-74.95-56.19zm167.9 0L265 405.7v81.22l139.95-104.93-65-32.49zm-169.41 17.17c-19.59 16.28-16.74 24.37 4.48 54.41l-44.25-38.02 39.77-16.39z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiRupee;
