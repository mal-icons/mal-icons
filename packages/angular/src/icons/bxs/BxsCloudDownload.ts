import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-cloud-download",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsCloudDownload {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.94 11.11C18.51 7.67 15.56 5 12 5 9.24 5 6.85 6.61 5.76 9.15 3.61 9.79 2 11.82 2 14c0 2.66 2.09 4.82 4.71 4.97V19H17.99v0L18 19c2.21 0 4-1.79 4-4a4.01 4.01 0 0 0-3.06-3.89zM8 12h3V9h2v3h3l-4 5-4-5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsCloudDownload;
