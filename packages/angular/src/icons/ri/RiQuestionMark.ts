import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-question-mark",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiQuestionMark {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 19C12.83 19 13.5 19.67 13.5 20.5C13.5 21.33 12.83 22 12 22C11.17 22 10.5 21.33 10.5 20.5C10.5 19.67 11.17 19 12 19ZM12 2C15.31 2 18 4.69 18 8C18 10.16 17.25 11.29 15.33 12.92C13.4 14.56 13 15.3 13 17H11C11 14.53 11.79 13.31 14.03 11.4C15.55 10.11 16 9.43 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8V9H6V8C6 4.69 8.69 2 12 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiQuestionMark;
