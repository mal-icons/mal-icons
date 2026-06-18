import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-remixicon-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRemixiconLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.36 6L15.15 15.66L15.87 15.38C17.55 14.72 18.73 13.22 18.96 11.48C18.81 11.49 18.66 11.5 18.5 11.5C15.25 11.5 12.56 9.12 12.08 6H6.36ZM14 5C14 7.49 16.02 9.5 18.5 9.5C19.31 9.5 20.06 9.29 20.72 8.92C20.9 9.54 21 10.19 21 10.87C21 13.76 19.18 16.23 16.6 17.24L20 21H3V4H14C14.04 4 14.08 4 14.11 4C14.04 4.32 14 4.66 14 5ZM18.5 7.5C17.12 7.5 16 6.38 16 5C16 3.62 17.12 2.5 18.5 2.5C19.88 2.5 21 3.62 21 5C21 6.38 19.88 7.5 18.5 7.5ZM5 7.47V19H15.48L5 7.47Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRemixiconLine;
