import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-crystal-bars",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCrystalBars {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M196.84 14.13l-8.75 2.91-43.22 13.44-3.5 1.16-1.75 2.94L30.75 206.59l-14 21.03 5.34 15.16L41.5 308.47l2.34 7 7.59-0.59 74.16-4.69 6.44-0.56 1.75-5.84 77.1-239.44 1.16-2.94-1.15-2.91-11.12-35.62-2.03-6.09-0.03-0.25h-0.03l-0.81-2.4zm123.81 5.25l-2.91 5.84-18.12 40.87-1.75 3.5 1.19 4.09L383.16 274l1.75 4.66 4.66 1.19 64.84 14.03 7.59 1.16V295l2.91-7 26.88-60.72 1.75-4.09-1.75-4.09L390.16 28.69l-2.34-4.66-5.25-0.59-55.47-3.5-6.44-0.56zM184.59 37.47l7.56 23.94-0.91 2.84-89.59 174.13 23.63 31.09-6.87 21.31-32.78-42.5-42.56-0.84L38 230.19l1-1.56 46.090.94L183.72 37.75l0.87-0.28zm147.16 1.75l16.470.87 76.34 153.22 36.5 8.37 11.53 21.72-48.47-10.66-7.22 53.44-18.44-3.84L407.09 201l-77.53-156.72 2.19-5.06zm-79.44 85.28l-5.25 3.5-37.37 25.09-3.5 2.34-0.59 4.09L166.47 416.5l-0.56 5.25 4.06 3.5 76.53 63.66 6.41 5.28 5.84-5.28 75.34-66.56 4.09-2.94-0.59-4.66-28.62-251.12-0.56-4.09-4.09-2.34-46.72-29.78-5.28-2.91zm0.56 22.53l19.5 12.1 12.25 202.41 30.84 24.91 2.84 24.81-0.870.78-40.59-32.9-75.16 48.19-15.09-12.47 79.44-50.69-13.15-217.12zm108.44 148.35l-7.5 37.56 32.22 94 33.6 14.97 19.44-39.37-48.09-85.15-29.66-22zM108.63 350.5l-29.69 10.81L32 431.47l2.63 34.59 31.19-12.75 46.94-70.19-4.12-32.62z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCrystalBars;
