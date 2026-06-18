import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-landscape-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiLandscapeLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.27 12.22L15 6L23 21H2L9 8L11.27 12.22ZM12.39 14.24L14.99 19H19.67L14.9 10.06L12.39 14.24ZM5.35 19H12.65L9 12.22L5.35 19ZM5.5 8C4.12 8 3 6.88 3 5.5C3 4.12 4.12 3 5.5 3C6.88 3 8 4.12 8 5.5C8 6.88 6.88 8 5.5 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiLandscapeLine;
