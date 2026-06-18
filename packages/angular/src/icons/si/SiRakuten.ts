import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-rakuten",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRakuten {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.28 21.3L3.94 24 0.72 21.3h22.56zM7.6 19.28H3.94V0h6.05a6.65 6.65 0 0 1 6.65 6.65c0 2.23-1.11 4.2-2.8 5.42l5.42 7.21h-4.58l-4.49-5.98H7.6v5.98zm0-9.64h2.39a2.99 2.99 0 0 0 2.99-2.99 2.99 2.99 0 0 0-2.99-2.99H7.6v5.98z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRakuten;
