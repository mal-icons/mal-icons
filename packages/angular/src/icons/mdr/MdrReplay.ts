import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-replay",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrReplay {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 5V2.21c0-0.45-0.54-0.67-0.85-0.35l-3.8 3.79c-0.20.2-0.20.51 0 0.71l3.79 3.79c0.320.310.860.090.86-0.36V7c3.73 0 6.68 3.42 5.86 7.29-0.47 2.27-2.31 4.1-4.57 4.57-3.570.75-6.75-1.7-7.23-5.01a1 1 0 0 0-0.98-0.85c-0.6 0-1.080.53-1 1.130.62 4.39 4.8 7.64 9.53 6.72 3.12-0.61 5.63-3.12 6.24-6.24C20.84 9.48 16.94 5 12 5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrReplay;
