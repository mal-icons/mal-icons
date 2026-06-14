import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-arc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevArc {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M289.8 44.3c32.4 1 61.7 20 75.7 49.4L421.2 211l0.9-2.3q3.3-8.9 5.4-18l0.8-3.5a86.8 86.8 0 0 1 170 34 326 326 0 0 1-91 166.3l-1.5 1.5 19.6 41c22.6 47.7-0.9 105.3-50.2 121.4l-2.20.7-1.70.5a87 87 0 0 1-101.5-46.2l-15.1-31.7-3.8 1q-30.6 7.2-61.7 7.8h-5.7q-29.8 0-60.3-6.7l-4-1-14.4 30.5a87 87 0 0 1-48.6 44.2l-2.60.9a87 87 0 0 1-67.8-5.8A88 88 0 0 1 49 430l18-37.8-1.6-1.6A264 264 0 0 1 8.3 309l-1.8-4-0.2-0.7A86.8 86.8 0 0 1 151.2 214l0.40.5L209 94a86 86 0 0 1 76-49.7z"}],["path",{"fill":"currentColor","d":"m204.2 442.8 51.3-108c-39.2-8.3-78.6-32.5-101-62L101 385.6a305 305 0 0 0 103.3 57.2"}],["path",{"fill":"currentColor","d":"M418.3 269.5a188 188 0 0 1-99.8 64.2l51.1 107.6a308 308 0 0 0 102.4-59z"}],["path",{"fill":"currentColor","d":"M100.9 385.6 74.1 442a60 60 0 0 0 24.7 79 59 59 0 0 0 80.9-26.7l24.5-51.5a306 306 0 0 1-103.3-57.2"}],["path",{"fill":"currentColor","d":"M524.9 146.4a59 59 0 0 0-69.4 46.2 177 177 0 0 1-37.2 77L472 382.4a301 301 0 0 0 99.1-166.7c6.4-32-14.3-63-46.1-69.3"}],["path",{"fill":"currentColor","d":"M318.5 333.7a135 135 0 0 1-63 1.1c-39.2-8.3-78.6-32.5-101-62a100 100 0 0 1-13.2-23A59 59 0 0 0 32 294a240 240 0 0 0 68.9 91.6 306 306 0 0 0 103.2 57.2 261 261 0 0 0 79.4 13c29.4 0 58.4-5.2 86-14.5z"}],["path",{"fill":"currentColor","d":"M500.2 441.8 472 382.3l-53.6-112.8v0.1l-77.9-164a59 59 0 0 0-106.3 0l-79.5 167.2c22.3 29.5 61.8 53.7 101 62l25.7-54c2.4-5 9.7-5 12.1 0l25.1 52.9 51.2 107.6 25.1 52.9a59 59 0 0 0 69 31.4c35.4-9.7 52.3-50.6 36.4-83.9"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevArc;
