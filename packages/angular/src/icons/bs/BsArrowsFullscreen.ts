import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrows-fullscreen",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrowsFullscreen {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M5.83 10.17a0.50.5 0 0 0-0.71 0l-4.1 4.1V11.5a0.50.5 0 0 0-1 0v3.98a0.50.5 0 0 0 0.50.5H4.5a0.50.5 0 0 0 0-1H1.73l4.1-4.1a0.50.5 0 0 0 0-0.71m4.34 0a0.50.5 0 0 1 0.71 0l4.1 4.1V11.5a0.50.5 0 1 1 1 0v3.98a0.50.5 0 0 1-0.50.5H11.5a0.50.5 0 0 1 0-1h2.77l-4.1-4.1a0.50.5 0 0 1 0-0.71m0-4.34a0.50.5 0 0 0 0.71 0l4.1-4.1V4.5a0.50.5 0 1 0 1 0V0.53a0.50.5 0 0 0-0.5-0.5H11.5a0.50.5 0 0 0 0 1h2.77l-4.1 4.1a0.50.5 0 0 0 0 0.71m-4.34 0a0.50.5 0 0 1-0.71 0L1.02 1.73V4.5a0.50.5 0 0 1-1 0V0.53a0.50.5 0 0 1 0.5-0.5H4.5a0.50.5 0 0 1 0 1H1.73l4.1 4.1a0.50.5 0 0 1 0 0.71"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrowsFullscreen;
