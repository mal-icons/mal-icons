import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-privatedivision",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPrivatedivision {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.380.25A0.420.42 0 0 0 12 0a0.430.43 0 0 0-0.390.25L6.17 12l5.44 11.75a0.430.43 0 0 0 0.620.180.430.43 0 0 0 0.16-0.18l5.44-11.75L12.380.25Zm-0.39 18.45-3.1-6.69 3.1-6.7 3.1 6.7-3.1 6.7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPrivatedivision;
