import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-sight-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSightDisabled {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M405.82 78.9l24.44 24.44L100.49 433.1 76.04 408.66zM168.32 255.68a87.7 87.7 0 0 1 117.2-82.57l43.4-43.4A236.36 236.36 0 0 0 256 118.45a239.72 239.72 0 0 0-84.45 15.62 270.75 270.75 0 0 0-38.86 18.59 293.18 293.18 0 0 0-34.82 23.82 311.88 311.88 0 0 0-29.42 26.51 336.4 336.4 0 0 0-22.68 25.36l-4.46 5.55-3.93 5.27c-2.44 3.2-4.52 6.22-6.2 8.68-1.68 2.46-2.97 4.54-3.85 5.86L26 255.76l1.33 2.06c0.88 1.33 2.17 3.46 3.85 5.85 1.68 2.4 3.76 5.48 6.2 8.68l3.93 5.27 4.46 5.56a336.4 336.4 0 0 0 22.68 25.36 311.9 311.9 0 0 0 29.42 26.51q7.15 5.67 14.82 11.02l60.74-60.74a87.51 87.51 0 0 1-5.11-29.64zm316.37-2.09c-0.88-1.34-2.17-3.51-3.85-5.89-1.68-2.37-3.76-5.51-6.2-8.74-2.44-3.46-5.25-6.99-8.39-10.87a339.52 339.52 0 0 0-22.68-25.46 311.77 311.77 0 0 0-29.42-26.56 306.19 306.19 0 0 0-17.59-12.95l-59.37 59.38a87.69 87.69 0 0 1-114.35 114.35l-43.31 43.31A240.02 240.02 0 0 0 256 392.91a236.83 236.83 0 0 0 84.45-15.26 269.05 269.05 0 0 0 38.86-18.54 290.32 290.32 0 0 0 34.82-23.82 311.77 311.77 0 0 0 29.42-26.56 339.52 339.52 0 0 0 22.68-25.46c3.15-3.88 5.95-7.46 8.39-10.87 2.44-3.23 4.52-6.25 6.2-8.74 1.68-2.49 2.97-4.61 3.85-5.89L486 255.69z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSightDisabled;
