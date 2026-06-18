import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-game-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiGameFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C15.12 2 17.91 3.43 19.74 5.67L13.41 12L19.74 18.33C17.91 20.57 15.12 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 5C11.17 5 10.5 5.67 10.5 6.5C10.5 7.33 11.17 8 12 8C12.83 8 13.5 7.33 13.5 6.5C13.5 5.67 12.83 5 12 5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiGameFill;
