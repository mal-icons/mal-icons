import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-backup",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBackup {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 11c0-3.87-3.13-7-7-7a6.99 6.99 0 0 0-6.74 5.15A5.49 5.49 0 0 0 1 14.5C1 17.54 3.46 20 6.5 20h12c2.49-0.01 4.5-2.03 4.5-4.52 0-2.33-1.75-4.22-4-4.48zm-6 2v2c0 0.55-0.45 1-1 1s-1-0.45-1-1v-2H9.21c-0.45 0-0.67-0.54-0.35-0.85l2.79-2.79c0.2-0.20.51-0.20.71 0l2.79 2.79a0.50.5 0 0 1-0.350.85H13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBackup;
