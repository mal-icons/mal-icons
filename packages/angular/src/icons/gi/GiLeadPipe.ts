import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-lead-pipe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLeadPipe {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M440.78 22.42c-2.380.04-4.630.42-6.65 1.18l-148.72 93.88-125.28 165.15c0.97 7.28 1.65 13.71 1.65 13.71L145.44 302 52.56 424.43a38.19 26.88 37.18 0 1 30.29 9.91 38.19 26.88 37.18 0 1 18.03 28.57l219.28-289.06-1.94-31.5 12.21 23.63 140.47-88.66c7.38-9.43 8.96-18.57 7.04-26.62l-16 5.54L472.48 39.27c-2.53-3.41-5.66-6.43-9.13-8.93-7.05-5.08-15.42-8.03-22.57-7.92zM52.71 438.68a30.88 21.73 37.18 0 0-1.860.02 30.88 21.73 37.18 0 0-14.24 6.76 30.88 21.73 37.18 0 0 11.46 35.97 30.88 21.73 37.18 0 0 37.74 1.35 30.88 21.73 37.18 0 0-11.47-35.97 30.88 21.73 37.18 0 0-21.63-8.14zm1.76 15.15a14.8 10.42 37.18 0 1 0 0 14.8 10.42 37.18 0 1 11.26 3.89 14.8 10.42 37.18 0 1 5.5 17.25 14.8 10.42 37.18 0 1-18.09-0.65 14.8 10.42 37.18 0 1-5.5-17.25 14.8 10.42 37.18 0 1 6.83-3.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLeadPipe;
