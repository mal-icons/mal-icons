import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-chrome",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrChrome {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"fill":"none","fill-rule":"evenodd"}],["path",{"fill":"currentColor","d":"M11.97,16.41 C9.59,16.41 7.66,14.48 7.66,12.1 C7.66,9.72 9.59,7.79 11.97,7.79 C14.35,7.79 16.29,9.72 16.29,12.1 C16.29,14.48 14.35,16.41 11.97,16.41 L11.97,16.41 Z"}],["path",{"fill":"currentColor","d":"M13.79,17.18 C13.19,17.4 12.55,17.51 11.91,17.51 C10.64,17.51 9.39,17.07 8.41,16.25 C7.61,15.6 7.02,14.73 6.69,13.75 L6.69,13.74 L1.94,5.51 C0.23,8.14 -0.38,11.27 0.23,14.35 C0.85,17.49 2.65,20.2 5.31,21.98 C6.69,22.9 8.23,23.52 9.87,23.82 L13.79,17.18 L13.79,17.18 Z"}],["path",{"fill":"currentColor","d":"M22.76,6.71 C19.79,0.73 12.54,-1.7 6.56,1.27 C5.02,2.03 3.66,3.12 2.57,4.46 L6.59,11.41 C6.85,9.39 8.25,7.61 10.32,6.95 C10.82,6.8 11.34,6.71 11.87,6.71 L22.76,6.71 Z"}],["path",{"fill":"currentColor","d":"M11.93,24 C14.94,24 17.82,22.87 20.04,20.82 C22.27,18.76 23.62,15.96 23.85,12.93 C23.98,11.19 23.73,9.42 23.11,7.79 L15.25,7.79 C16.57,8.83 17.35,10.43 17.34,12.13 C17.34,13.34 16.92,14.54 16.16,15.51 L11.15,23.98 C11.41,23.99 11.67,24 11.93,24 L11.93,24 L11.93,24 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrChrome;
