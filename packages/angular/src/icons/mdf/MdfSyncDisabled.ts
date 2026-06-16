import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-sync-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSyncDisabled {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 6.35V4.26c-0.80.21-1.550.54-2.230.96l1.46 1.46c0.25-0.120.5-0.240.77-0.33zm-7.14-0.94 2.36 2.36a7.93 7.93 0 0 0 1.14 9.87L4 20h6v-6l-2.24 2.24A6 6 0 0 1 6 12c0-1 0.25-1.940.68-2.77l8.08 8.08c-0.250.13-0.50.25-0.770.34v2.09c0.8-0.21 1.55-0.54 2.23-0.96l2.36 2.36 1.27-1.27L4.14 4.14 2.86 5.41zM20 4h-6v6l2.24-2.24A6 6 0 0 1 18 12c0 1-0.25 1.94-0.68 2.77l1.46 1.46a7.93 7.93 0 0 0-1.14-9.87L20 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSyncDisabled;
