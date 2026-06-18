import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-statuspal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiStatuspal {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.28 9.3c0-1.24-1.02-2.25-2.27-2.25-1.26 0-2.27 1.01-2.27 2.25 0 0.940.58 1.74 1.4 2.08L5.93 24c1.9-1.1 3.98-1.65 6.07-1.65 2.09 0 4.170.55 6.07 1.65l-5.19-12.63a2.25 2.25 0 1.4-2.08zm1.19 12.01A13.44 13.44 0 12 20.85a13.44 13.44 0 0-3.460.46L12 13.39zM16.55 13.5a5.58 5.58 0 0-0.72-7.53 5.73 5.73 0 0-7.65 0A5.58 5.58 0 7.45 13.5a6.17 6.17 0 1.14-8.72c2.45-2.38 6.37-2.38 8.81 0a6.17 6.17 0 1.14 8.72zm0 3c3.05-1.99 4.42-5.72 3.37-9.17C18.87 3.87 15.65 1.5 12 1.5c-3.65 0-6.87 2.37-7.92 5.83-1.05 3.460.32 7.19 3.37 9.17-3.48-2.03-5.16-6.11-4.1-9.97C4.42 2.68 7.96 0 12 0c4.04 0 7.58 2.68 8.65 6.53 1.06 3.86-0.61 7.94-4.1 9.97z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiStatuspal;
