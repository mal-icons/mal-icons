import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-edit-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiEditLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.41 15.89L16.56 5.75L15.14 4.33L5 14.48V15.89H6.41ZM7.24 17.89H3V13.65L14.44 2.21C14.83 1.82 15.46 1.82 15.85 2.21L18.68 5.04C19.07 5.43 19.07 6.06 18.68 6.45L7.24 17.89ZM3 19.89H21V21.89H3V19.89Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiEditLine;
