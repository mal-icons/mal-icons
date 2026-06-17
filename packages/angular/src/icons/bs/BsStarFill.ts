import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-star-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsStarFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.61 15.44c-0.390.2-0.82-0.15-0.75-0.59l0.83-4.73L0.17 6.77c-0.33-0.31-0.16-0.890.28-0.95l4.9-0.7L7.540.79c0.2-0.390.73-0.390.93 0l2.18 4.33 4.90.7c0.440.060.610.640.280.95l-3.52 3.360.83 4.73c0.080.44-0.360.79-0.750.59L8 13.19l-4.39 2.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsStarFill;
