import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-video-download-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiVideoDownloadFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 4C16.55 4 17 4.45 17 5V9.2L22.21 5.55C22.44 5.39 22.75 5.45 22.91 5.67C22.97 5.76 23 5.86 23 5.96V18.04C23 18.32 22.78 18.54 22.5 18.54C22.4 18.54 22.3 18.51 22.21 18.45L17 14.8V19C17 19.55 16.55 20 16 20H2C1.45 20 1 19.55 1 19V5C1 4.45 1.45 4 2 4H16ZM10 8H8V12H5L9 16L13 12H10V8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiVideoDownloadFill;
