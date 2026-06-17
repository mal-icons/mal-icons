import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-night-vision",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiNightVision {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 32a120 125 0 0 0-94.67 48.43A160 160 0 0 1 312.8 240a160 160 0 0 1-2.7 28.56A120 125 0 0 0 376 157 120 125 0 0 0 256 32zM82.77 325.59c-20.90.84-42.69 5.52-64.06 14.26C41.44 400.1 102.35 459.58 208 400c-11.57-32.98-37.17-55.62-69.44-66.71a11.16 13.26 0 0 0-3.73-0.78 11.16 13.26 0 0 0-11.16 13.26 11.16 13.26 0 0 0 11.16 13.26 11.16 13.26 0 0 0 0.32-0.01c-3.8 27.26-9.97 50.3-15.48 50.66-12.180.51-29.58-40.02-36.89-84.09zm346.46 0c-7.31 44.07-24.71 84.59-36.89 84.09-5.73-0.38-12.16-25.24-15.91-53.87a13.26 21.13 82.13 0 0 11.10.42 13.26 21.13 82.13 0 0 19.11-16.03 13.26 21.13 82.13 0 0-22.74-10.24 13.26 21.13 82.13 0 0-10.4 3.32c-32.3 11.08-57.92 33.73-69.49 66.73 105.65 59.58 166.560.1 189.29-60.15-21.37-8.74-43.16-13.41-64.06-14.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiNightVision;
