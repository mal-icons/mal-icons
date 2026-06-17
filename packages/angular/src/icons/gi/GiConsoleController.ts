import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-console-controller",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiConsoleController {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M380.95 114.46c-62.95-13.15-63.32 32.04-124.87 32.04-53.25 0-55.25-44.67-124.87-32.04C17.21 135.07-0.32 385.9 60.16 399.05c33.58 7.3 50.5-31.64 94.89-59.59a51.56 51.56 0 0 0 79.77-25.78 243.67 243.67 0 0 1 21.24-0.91c7.47 0 14.440.32 21.130.9a51.57 51.57 0 0 0 79.82 25.72c44.45 27.95 61.37 66.93 94.96 59.63 60.47-13.1 42.5-260.85-71.01-284.54zM147.47 242.7h-26.14V216.12H94.73v-26.14h26.59v-26.59h26.14v26.58h26.58v26.14h-26.58v26.58zm38.22 89.62a34.34 34.34 0 1 1 34.34-34.34 34.34 34.34 0 0 1-34.33 34.35zm140.6 0a34.34 34.34 0 1 1 34.37-34.33 34.34 34.34 0 0 1-34.37 34.34zM349.98 220.36A17.32 17.32 0 1 1 367.3 203.04a17.32 17.32 0 0 1-17.32 17.32zm37.52 37.52a17.32 17.32 0 1 1 17.32-17.32 17.32 17.32 0 0 1-17.36 17.33zm0-75.05a17.32 17.32 0 1 1 17.32-17.32 17.32 17.32 0 0 1-17.36 17.33zm37.52 37.52a17.32 17.32 0 1 1 17.32-17.32 17.32 17.32 0 0 1-17.37 17.33z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiConsoleController;
