import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-bitcoin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrBitcoin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M23.64,14.9 C22.04,21.33 15.53,25.25 9.1,23.64 C2.67,22.04 -1.24,15.53 0.36,9.1 C1.96,2.67 8.47,-1.24 14.9,0.36 C21.33,1.96 25.24,8.48 23.64,14.9 L23.64,14.9 Z M17.29,10.29 C17.53,8.69 16.31,7.84 14.65,7.26 L15.19,5.1 L13.87,4.77 L13.35,6.88 C13,6.79 12.65,6.71 12.29,6.63 L12.82,4.51 L11.51,4.18 L10.97,6.34 C10.68,6.28 10.4,6.21 10.13,6.15 L10.13,6.14 L8.31,5.69 L7.96,7.09 C7.96,7.09 8.94,7.32 8.92,7.33 C9.45,7.46 9.55,7.82 9.53,8.1 L8.92,10.56 C8.95,10.57 9,10.58 9.05,10.6 C9.01,10.59 8.96,10.58 8.92,10.57 L8.05,14.02 C7.99,14.18 7.82,14.43 7.45,14.34 C7.46,14.35 6.49,14.1 6.49,14.1 L5.84,15.6 L7.55,16.03 C7.87,16.11 8.18,16.19 8.49,16.27 L7.95,18.46 L9.26,18.79 L9.8,16.62 C10.16,16.72 10.51,16.81 10.85,16.9 L10.31,19.05 L11.63,19.38 L12.18,17.2 C14.42,17.62 16.11,17.45 16.82,15.42 C17.39,13.78 16.79,12.84 15.61,12.23 C16.47,12.03 17.12,11.46 17.29,10.29 L17.29,10.29 Z M14.28,14.51 C13.88,16.15 11.12,15.26 10.23,15.04 L10.95,12.14 C11.85,12.36 14.71,12.81 14.28,14.51 L14.28,14.51 Z M14.69,10.27 C14.32,11.76 12.03,11 11.28,10.81 L11.94,8.19 C12.68,8.37 15.08,8.72 14.69,10.27 L14.69,10.27 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrBitcoin;
