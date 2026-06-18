import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-nurse-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiNurseFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.96 15.56C17.62 16.62 19.57 19.06 19.94 22H4.06C4.43 19.06 6.39 16.62 9.04 15.56L12 20L14.96 15.56ZM18 2V8C18 11.31 15.31 14 12 14C8.69 14 6 11.31 6 8V2H18ZM16 8H8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiNurseFill;
