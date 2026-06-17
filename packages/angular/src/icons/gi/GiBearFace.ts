import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bear-face",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBearFace {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M64.26 44.7c-88.76 25.21-39.73 158.68-2.11 161.89-8.51 42.22-13.32 84.65-12.64 127.820.36 22.67 51.37 58.42 105.35 86.04C186.48 466.79 238.98 466.88 256 467.3c17.02-0.42 69.52-0.51 101.14-46.85 53.98-27.61 104.99-63.36 105.35-86.030.68-43.18-4.14-85.61-12.64-127.82 37.62-3.21 86.66-136.67-2.11-161.89-28.43 1.46-55.61 16.15-82.17 37.22C317.64 62.23 293.16 61.3 256 61.3c-37.16 0-61.640.94-109.56 20.63-26.57-21.07-53.74-35.76-82.17-37.22zm4.93 49.93c6.06-0.1 17.24 5.63 26.81 14.66 3.36 3.18-22.92 51.05-26.82 50.16-4.59-1.05-14.98-48.28-3.72-63.320.75-0.99 2.04-1.48 3.73-1.5zm373.62 0c1.70.03 2.990.51 3.73 1.5 11.26 15.030.87 62.27-3.72 63.32-3.90.89-30.18-46.98-26.82-50.16 9.57-9.04 20.75-14.76 26.81-14.66zm-260.85 82.09c17.46-0.3 30.69 24.45 42.04 44.58-53.57 15.88-82.57-17.11-57.75-37.78 5.6-4.66 10.82-6.71 15.71-6.8zm148.08 0c4.890.09 10.11 2.13 15.71 6.8 24.82 20.67-4.18 53.66-57.75 37.78 11.36-20.13 24.58-44.88 42.04-44.58zM256 251.55c17.320.22 36.83 9.57 30.2 36.52-1.44 5.87-12.52 8.62-21.2 9.7v8.97c99.88 41.13 79.57 138.56-9 138.56s-108.88-97.43-9-138.56v-8.97c-8.68-1.08-19.75-3.83-21.2-9.7-6.63-26.95 12.88-36.29 30.2-36.52z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBearFace;
