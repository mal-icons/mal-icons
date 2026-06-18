import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rxdb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRxdb {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.1 3.45h1.15v-1.15h1.15v1.15h6.41v4.93H4.19V1.15h1.15V2.3h1.15V0h1.15v1.15h1.15v2.3h1.15V1.15h1.15v2.3zM4.19 14.47h15.62V9.53H4.19v4.93zm15.62 1.15H4.19v4.93h6.41v1.15h1.15v-1.15h1.15v2.3h1.15v-2.3h1.15v2.3h1.15V24h1.15v-2.3h1.15v1.15h1.15v-7.23z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRxdb;
