import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-pause-mini-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPauseMiniFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 7C15 6.45 15.45 6 16 6C16.55 6 17 6.45 17 7V17C17 17.55 16.55 18 16 18C15.45 18 15 17.55 15 17V7ZM7 7C7 6.45 7.45 6 8 6C8.55 6 9 6.45 9 7V17C9 17.55 8.55 18 8 18C7.45 18 7 17.55 7 17V7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPauseMiniFill;
