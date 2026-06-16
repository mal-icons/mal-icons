import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-move-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfMoveUp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 13c0-2.45 1.76-4.47 4.08-4.91l-1.49 1.5L7 11l4-4.01L7 3 5.59 4.41l1.58 1.58v0.06A7.01 7.01 0 0 0 1 13c0 3.87 3.13 7 7 7h3v-2H8c-2.76 0-5-2.24-5-5zm10 0v7h9v-7h-9zm7 5h-5v-3h5v3zM13 4h9v7h-9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfMoveUp;
