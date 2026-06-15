import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-linkedin-option",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrLinkedinOption {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M22.04,22 L17.88,22 L17.88,15.5 C17.88,13.95 17.86,11.96 15.73,11.96 C13.57,11.96 13.24,13.65 13.24,15.39 L13.24,22 L9.09,22 L9.09,8.64 L13.07,8.64 L13.07,10.47 L13.13,10.47 C13.68,9.42 15.04,8.31 17.06,8.31 C21.26,8.31 22.04,11.08 22.04,14.67 L22.04,22 Z M4.41,6.82 C3.08,6.82 2,5.74 2,4.41 C2,3.08 3.08,2 4.41,2 C5.74,2 6.82,3.08 6.82,4.41 C6.82,5.74 5.74,6.82 4.41,6.82 L4.41,6.82 Z M6.49,22 L2.33,22 L2.33,8.64 L6.49,8.64 L6.49,22 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrLinkedinOption;
