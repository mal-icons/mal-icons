import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-card-play",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCardPlay {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M272.82 24.32c-14.930.31-25.66 3.25-32.77 8.45L142.9 84.91l-54.1 73.51C77.42 175.98 85.52 210 121.11 188.2l38.9-51.35c49.48-42.71 150.49-23.03 102.59 62.59-23.53 49.58-12.46 73.79 17.76 83.95l13.81-46.38c23.95-53.82 68.5-63.51 66.68-106.9l107.3 7.72-0.86-112.04-194.47-1.46zm-54.09 103.34c-17.41-0.3-34.49 6.9-46.92 17.38l-39.04 51.33c10.71 8.51 21.41 3.96 32.13-6.36 12.63 6.39 22.37-3.52 30.37-23.3 3.32-13.49 8.21-23.04 23.47-39.04zm-32.62 88.32a13.49 13.49 0 0 0-5.23 1.24L51.72 276.73c-6.78 3.13-9.76 11.2-6.63 17.99l85.27 185.08c3.13 6.78 11.2 9.78 18 6.64l129.15-59.5c6.8-3.14 9.78-11.2 6.65-18L198.87 223.86c-2.34-5.1-7.47-8.04-12.75-7.88z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCardPlay;
