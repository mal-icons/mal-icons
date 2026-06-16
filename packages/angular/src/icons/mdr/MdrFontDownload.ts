import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-font-download",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFontDownload {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.93 13.5h4.14L12 7.98 9.93 13.5zM20 2H4c-1.1 0-2 0.9-2 2v16c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-4.29 15.88-0.9-2.38H9.17l-0.89 2.37a0.970.97 0 1 1-1.81-0.69l4.25-10.81c0.22-0.530.72-0.87 1.28-0.87s1.060.34 1.270.87l4.25 10.81a0.970.97 0 0 1-0.9 1.32c-0.4 0-0.76-0.25-0.91-0.62z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFontDownload;
