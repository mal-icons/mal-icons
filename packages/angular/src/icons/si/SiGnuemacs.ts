import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-gnuemacs",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGnuemacs {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12,24C5.45,24,0.12,18.62,0.12,12S5.45,0,12,0c6.55,0,11.88,5.38,11.88,12S18.55,24,12,24z M12,0.66 C5.81,0.66,0.78,5.75,0.78,12S5.81,23.34,12,23.34c6.19,0,11.22-5.09,11.22-11.34S18.19,0.66,12,0.66z M8.03,20.2 c0,0,0.98,0.07,2.24-0.04c0.51-0.04,2.44-0.23,3.89-0.55c0,0,1.76-0.38,2.71-0.72c0.99-0.36,1.52-0.67,1.77-1.11 c-0.01-0.09,0.07-0.41-0.38-0.6c-1.16-0.49-2.51-0.4-5.18-0.46c-2.96-0.1-3.95-0.6-4.47-1 c-0.5-0.4-0.25-1.53,1.91-2.51c1.09-0.53,5.35-1.5,5.35-1.5c-1.43-0.71-4.11-1.95-4.66-2.22 c-0.48-0.24-1.25-0.59-1.42-1.02c-0.19-0.41,0.45-0.77,0.8-0.87c1.15-0.33,2.77-0.54,4.24-0.56 c0.74-0.01,0.86-0.06,0.86-0.06c1.02-0.17,1.7-0.87,1.41-1.98c-0.25-1.13-1.58-1.79-2.84-1.56 c-1.19,0.22-4.05,1.05-4.05,1.05c3.54-0.03,4.13,0.03,4.39,0.4c0.16,0.22-0.07,0.52-1.01,0.67 c-1.03,0.17-3.16,0.37-3.16,0.37c-2.05,0.12-3.49,0.13-3.92,1.05C6.2,7.56,6.79,8.09,7.04,8.43 c1.08,1.2,2.65,1.85,3.65,2.33c0.38,0.18,1.49,0.52,1.49,0.52c-3.26-0.18-5.62,0.82-7,1.98 c-1.56,1.45-0.87,3.17,2.33,4.23c1.89,0.63,2.83,0.92,5.65,0.67c1.66-0.09,1.92-0.04,1.94,0.1 c0.02,0.19-1.84,0.67-2.35,0.82C11.45,19.44,8.05,20.19,8.03,20.2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGnuemacs;
