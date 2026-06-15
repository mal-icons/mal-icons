import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-lastfm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrLastfm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M20.3,10.92 C20.09,10.86 19.88,10.79 19.69,10.73 C18.19,10.26 17.29,9.98 17.29,8.81 C17.29,7.87 18.02,7.19 19.02,7.19 C19.79,7.19 20.37,7.51 20.88,8.22 C20.93,8.29 21.02,8.32 21.09,8.28 L22.6,7.51 C22.64,7.49 22.67,7.45 22.68,7.41 C22.7,7.36 22.69,7.31 22.67,7.27 C21.86,5.84 20.7,5.14 19.11,5.14 C16.69,5.14 15.13,6.6 15.13,8.87 C15.13,11.18 16.64,12.12 19.43,13.03 C21.04,13.57 21.76,13.86 21.76,15.01 C21.76,16.3 20.59,17.23 19,17.17 C17.34,17.12 16.83,16.23 16.2,14.79 C15.12,12.34 13.9,9.48 13.89,9.45 C12.66,6.62 10.23,5 7.22,5 C3.24,5 0,8.24 0,12.22 C0,16.2 3.24,19.44 7.22,19.44 C9.39,19.44 11.42,18.48 12.8,16.8 C12.84,16.75 12.85,16.68 12.83,16.62 L11.92,14.52 C11.89,14.47 11.83,14.43 11.77,14.42 C11.7,14.42 11.64,14.46 11.61,14.51 C10.75,16.16 9.07,17.18 7.22,17.18 C4.49,17.18 2.26,14.95 2.26,12.22 C2.26,9.49 4.49,7.27 7.22,7.27 C9.21,7.27 11.03,8.45 11.75,10.21 L14,15.34 L14.26,15.92 C15.28,18.29 16.78,19.35 19.12,19.36 C21.9,19.36 24,17.51 24,15.07 C24,12.61 22.64,11.69 20.3,10.92 L20.3,10.92 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrLastfm;
