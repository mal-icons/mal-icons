import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-unstop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiUnstop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.39 0 0 5.39 0 12s5.39 12 12 12 12-5.39 12-12S18.61 0 12 0Zm-1.2 16.86H8.3v-1.13c-0.71 1.09-1.59 1.55-2.9 1.55-2.08 0-3.25-1.2-3.25-3.33V7.25h2.51v6.18c0 1.160.53 1.72 1.6 1.72 1.22 0 2.01-0.75 2.01-1.89V7.24h2.51v9.63zm8.53 0v-5.94c0-1.14-0.53-1.72-1.6-1.72-1.22 0-2.010.75-2.01 1.89v5.77h-2.51V7.24h2.5V8.63c0.72-1.09 1.59-1.55 2.9-1.55 2.09 0 3.25 1.2 3.25 3.33v6.45z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiUnstop;
