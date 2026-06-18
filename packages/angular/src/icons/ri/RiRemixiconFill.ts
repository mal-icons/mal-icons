import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-remixicon-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRemixiconFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.53 17.53L20 21H3V4H13.67V4.01C13.78 4 13.89 4 14 4C14.05 4 14.09 4 14.14 4C14.05 4.37 14 4.76 14 5.17C14 7.49 16.02 9.5 18.67 9.5C19.39 9.5 20.09 9.3 20.7 8.96C20.9 9.61 21 10.29 21 11C21 13.97 19.15 16.52 16.53 17.53ZM18.5 7.5C17.12 7.5 16 6.38 16 5C16 3.62 17.12 2.5 18.5 2.5C19.88 2.5 21 3.62 21 5C21 6.38 19.88 7.5 18.5 7.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRemixiconFill;
