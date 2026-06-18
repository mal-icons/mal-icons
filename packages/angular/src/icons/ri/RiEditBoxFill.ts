import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-edit-box-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiEditBoxFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.76 3L9.29 10.46L9.3 14.71L13.54 14.7L21 7.24V20C21 20.55 20.55 21 20 21H4C3.45 21 3 20.55 3 20V4C3 3.44 3.45 3 4 3H16.76ZM20.49 2.1L21.9 3.51L12.71 12.7L11.3 12.71L11.29 11.29L20.49 2.1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiEditBoxFill;
