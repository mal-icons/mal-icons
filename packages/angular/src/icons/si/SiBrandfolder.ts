import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-brandfolder",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBrandfolder {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0,23.29h19.6v-2.98H2.98V3.69h16.63v10.91h-1.42l2.91,2.91L24,14.6 h-1.42V0.71H0V23.29z M16.15,13.36c-0.19-0.41-0.43-0.74-0.72-1c-0.29-0.26-0.6-0.45-0.93-0.58 c-0.34-0.13-0.64-0.22-0.92-0.25c0.25-0.03,0.5-0.13,0.74-0.3c0.24-0.16,0.46-0.36,0.65-0.61 c0.19-0.25,0.35-0.53,0.46-0.86c0.12-0.33,0.17-0.69,0.17-1.07c0-0.65-0.13-1.19-0.38-1.62 c-0.25-0.43-0.6-0.77-1.03-1.03c-0.44-0.26-0.95-0.44-1.54-0.55c-0.59-0.11-1.21-0.16-1.87-0.16 c-0.75,0-1.38,0.02-1.89,0.05C8.39,5.42,7.94,5.46,7.56,5.53v12.93c0.68,0.08,1.29,0.14,1.83,0.17 c0.54,0.03,1.08,0.04,1.63,0.04c0.72,0,1.4-0.05,2.06-0.16c0.65-0.11,1.23-0.3,1.72-0.59 c0.5-0.29,0.89-0.68,1.19-1.18c0.29-0.5,0.44-1.13,0.44-1.91C16.44,14.25,16.34,13.76,16.15,13.36z M10.16,7.32c0.91-0.11,1.87-0.05,2.3,0.3c0.38,0.32,0.61,0.6,0.61,1.42c0,0.75-0.36,1.2-0.61,1.36 c-0.25,0.16-0.59,0.37-1.4,0.37s-0.9,0-0.9,0V7.32z M13.19,16c-0.45,0.39-1.11,0.55-1.82,0.55 c-0.79,0-1.21-0.07-1.21-0.07v-3.74h1.13c0.71,0,1.44,0.13,1.83,0.46c0.51,0.44,0.61,0.9,0.61,1.51 C13.74,15.32,13.53,15.71,13.19,16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBrandfolder;
