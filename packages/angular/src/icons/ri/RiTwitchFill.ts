import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-twitch-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTwitchFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 3V14.74L16.31 19.43H12.39L9.96 21.78H6.91V19.43H3V6.13L4.23 3H21ZM19.44 4.57H6.13V16.3H9.26V18.65L11.61 16.3H16.31L19.44 13.17V4.57ZM16.31 7.7V12.39H14.74V7.7H16.31ZM12.39 7.7V12.39H10.83V7.7H12.39Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTwitchFill;
