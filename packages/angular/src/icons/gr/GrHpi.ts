import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-hpi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrHpi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M15.79,15.33 C15.98,15.33 16.18,15.19 16.23,15.02 L18.43,8.65 C18.49,8.48 18.39,8.33 18.21,8.33 L17.21,8.33 C17.02,8.33 16.82,8.48 16.76,8.65 L14.56,15.02 C14.5,15.19 14.6,15.33 14.78,15.33 L15.79,15.33 Z M24,12 C24,18.63 18.63,24 12,24 C11.82,24 11.64,23.98 11.46,23.97 L13.88,16.98 C13.94,16.81 14.14,16.67 14.32,16.67 L16,16.67 C18.61,16.67 18.63,15.8 18.91,15.01 C19.55,13.14 20.66,9.93 20.87,9.31 C21.18,8.41 21.28,7 19,7 L15,7 C14.82,7 14.62,7.14 14.56,7.32 L8.92,23.59 C3.79,22.23 0,17.56 0,12 C0,6.69 3.45,2.2 8.22,0.62 L2.78,16.35 C2.72,16.52 2.82,16.67 3,16.67 L5,16.67 C5.18,16.67 5.38,16.52 5.44,16.35 L8.11,8.65 C8.17,8.48 8.37,8.33 8.55,8.33 L9.54,8.33 C9.72,8.33 9.82,8.48 9.76,8.65 L7.11,16.35 C7.05,16.52 7.15,16.67 7.33,16.67 L9.33,16.67 C9.52,16.67 9.72,16.52 9.78,16.35 C9.78,16.35 11.64,10.95 12.2,9.31 C12.76,7.68 12.31,7 10.35,7 L9.01,7 C8.83,7 8.73,6.86 8.79,6.69 L11.09,0.05 C11.39,0.02 11.69,0 12,0 C18.63,0 24,5.37 24,12 L24,12 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrHpi;
