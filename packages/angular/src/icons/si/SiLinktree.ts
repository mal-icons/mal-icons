import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-linktree",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLinktree {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m13.74 5.85 4-4.12 2.32 2.38-4.2 4h5.91v3.3h-5.94l4.23 4.11-2.32 2.33L12 12.1l-5.74 5.77-2.32-2.32 4.23-4.11h-5.94V8.12h5.91L3.93 4.12l2.32-2.38 4 4.12V0h3.47zm-3.47 10.31h3.47V24h-3.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLinktree;
