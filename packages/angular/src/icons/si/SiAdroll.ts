import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-adroll",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAdroll {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 12c0-6.01-4.73-10.89-10.89-10.89a10.86 10.86 0 0 0-9.51 5.58L8.91 12c0-2.32 1.96-4.2 4.2-4.2 2.38 0 4.2 1.88 4.2 4.2s-1.84 4.2-4.2 4.2H4.07A4.07 4.07 0 0 0 0 20.27v2.62h13.11C19.23 22.89 24 18.01 24 12"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAdroll;
