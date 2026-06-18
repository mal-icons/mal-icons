import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-collage-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCollageFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.19 13.26L12.57 21.11L4 21.11C3.45 21.11 3 20.66 3 20.11L3 14.71L11.19 13.26ZM20 3.11C20.55 3.11 21 3.55 21 4.11V20.11C21 20.66 20.55 21.11 20 21.11L14.6 21.11L11.43 3.11L20 3.11ZM9.4 3.11L10.84 11.29L3 12.68L3 4.11C3 3.55 3.45 3.11 4 3.11L9.4 3.11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCollageFill;
