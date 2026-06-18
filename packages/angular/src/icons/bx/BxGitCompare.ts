import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-git-compare",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxGitCompare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.01 2c-1.93 0-3.5 1.57-3.5 3.5 0 1.58 1.06 2.9 2.5 3.34v7.16c00.180.03 1.78 1.17 2.93C6.89 19.64 7.84 20 9 20v2l4-3-4-3v2c-1.82 0-1.98-1.53-1.99-2V8.84c1.44-0.43 2.5-1.76 2.5-3.34 0-1.93-1.57-3.5-3.5-3.5zm0 5c-0.83 0-1.5-0.67-1.5-1.5S5.18 4 6.01 4s1.50.67 1.5 1.5S6.84 7 6.01 7zm13 8.16V8C19.01 6.39 17.93 4 15 4V2l-4 3 4 3V6c1.83 0 2 1.54 2.01 2v7.16c-1.440.43-2.5 1.76-2.5 3.34 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.58-1.06-2.9-2.5-3.34zm-1 4.84c-0.83 0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.50.67 1.5 1.5-0.67 1.5-1.5 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxGitCompare;
