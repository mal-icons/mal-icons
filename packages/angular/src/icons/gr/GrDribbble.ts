import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-dribbble",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrDribbble {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M11.43,8.64 C9.66,5.49 7.77,2.92 7.63,2.73 C4.77,4.08 2.64,6.71 1.97,9.89 C2.24,9.89 6.51,9.94 11.43,8.64 Z M12.71,12.08 C12.84,12.04 12.98,12 13.11,11.96 C12.86,11.37 12.58,10.79 12.28,10.21 C7,11.79 1.94,11.68 1.76,11.67 C1.76,11.78 1.75,11.89 1.75,12 C1.75,14.64 2.75,17.04 4.38,18.85 C4.38,18.85 4.38,18.84 4.38,18.84 C4.38,18.84 7.18,13.87 12.71,12.08 Z M5.7,20.08 L5.7,20.07 C5.63,20.02 5.55,19.96 5.47,19.9 C5.61,20.01 5.7,20.08 5.7,20.08 Z M9.62,2.08 C9.58,2.09 9.56,2.1 9.52,2.11 C9.57,2.09 9.61,2.08 9.62,2.08 L9.62,2.08 Z M18.77,4.31 C16.96,2.72 14.6,1.75 12,1.75 C11.17,1.75 10.36,1.85 9.59,2.04 C9.74,2.25 11.66,4.8 13.42,8.02 C17.28,6.57 18.74,4.35 18.77,4.31 Z M12,24 C5.37,24 0,18.63 0,12 C0,5.37 5.37,0 12,0 C18.63,0 24,5.37 24,12 C24,18.63 18.63,24 12,24 Z M13.74,13.68 C7.73,15.77 5.74,19.99 5.7,20.07 C7.44,21.43 9.62,22.25 12,22.25 C13.42,22.25 14.77,21.96 16,21.44 C15.85,20.54 15.25,17.4 13.81,13.65 C13.79,13.66 13.77,13.67 13.74,13.68 Z M14.2,9.55 C14.44,10.04 14.67,10.53 14.88,11.03 C14.96,11.21 15.03,11.39 15.11,11.56 C18.64,11.12 22.13,11.87 22.24,11.9 C22.22,9.47 21.35,7.24 19.91,5.49 C19.89,5.52 18.25,7.9 14.2,9.55 Z M15.73,13.18 C17.08,16.88 17.62,19.89 17.73,20.5 C20.03,18.95 21.66,16.48 22.12,13.63 C21.91,13.56 19.05,12.65 15.73,13.18 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrDribbble;
