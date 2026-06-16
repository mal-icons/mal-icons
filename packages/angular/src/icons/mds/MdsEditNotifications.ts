import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-edit-notifications",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsEditNotifications {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17.58 6.25 1.77 1.77L14.37 13H12.6v-1.77l4.98-4.98zm3.27-0.44-1.06-1.06c-0.2-0.2-0.51-0.2-0.71 0l-0.850.85L20 7.37l0.85-0.85c0.2-0.20.2-0.52 0-0.71zM18 12.2V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8V2h3v2.2c0.820.21 1.570.59 2.21 1.09L10.6 10.4V15h4.6l2.8-2.8zM10 20h4c0 1.1-0.9 2-2 2s-2-0.9-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsEditNotifications;
