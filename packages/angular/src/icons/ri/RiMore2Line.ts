import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-more-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMore2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3C11.18 3 10.5 3.68 10.5 4.5C10.5 5.33 11.18 6 12 6C12.83 6 13.5 5.33 13.5 4.5C13.5 3.68 12.83 3 12 3ZM12 18C11.18 18 10.5 18.68 10.5 19.5C10.5 20.33 11.18 21 12 21C12.83 21 13.5 20.33 13.5 19.5C13.5 18.68 12.83 18 12 18ZM12 10.5C11.18 10.5 10.5 11.18 10.5 12C10.5 12.83 11.18 13.5 12 13.5C12.83 13.5 13.5 12.83 13.5 12C13.5 11.18 12.83 10.5 12 10.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMore2Line;
