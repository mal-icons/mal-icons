import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-border-all",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBorderAll {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 5v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2zm8 14H6c-0.55 0-1-0.45-1-1v-5h5c0.55 0 1 0.45 1 1v5zm-1-8H5V6c0-0.550.45-1 1-1h5v5c0 0.55-0.45 1-1 1zm8 8h-5v-5c0-0.550.45-1 1-1h5v5c0 0.55-0.45 1-1 1zm1-8h-5c-0.55 0-1-0.45-1-1V5h5c0.55 0 1 0.45 1 1v5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBorderAll;
