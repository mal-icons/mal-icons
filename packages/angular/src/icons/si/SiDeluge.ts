import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-deluge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDeluge {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.77 10.34 12.01 0l-6.77 10.34c-1.94 2.97-2.19 6.43-0.66 9.26C6.04 22.32 8.89 24 12 24c3.11 0 5.96-1.68 7.42-4.39 1.53-2.83 1.29-6.3-0.66-9.27zm-10.08 6.9c1.43 2.55 3.61 3.05 6.59 2.1-1.7 1.85-5.19 2.34-7.56-0.3-1.63-1.82-1.77-4.35-0.64-6.47 1.13-2.12 3.39-2.71 5.01-1.55-3.720.09-4.43 4.38-3.4 6.22zm8.72-6.01c0.72 1.11 1.15 2.27 1.31 3.42-3.35 5.76-7.86 4.88-9.06 1.38-0.55-1.62 1.19-5.08 4.51-3.72-1.3-2.84-4.24-4.02-6.91-1.81a5.1 5.1 0 0 0-0.610.66l5.36-8.18 5.4 8.26z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDeluge;
