import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-alarm-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsAlarmAdd {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4c-4.88 0-9 4.12-9 9s4.12 9 9 9 9-4.12 9-9-4.12-9-9-9zm4 10h-3v3h-2v-3H8v-2h3V9h2v3h3v2zm1.28-10.29 1.41-1.42 3.01 3-1.41 1.42zM5.28 2.29 6.7 3.71l-2.99 3-1.42-1.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsAlarmAdd;
