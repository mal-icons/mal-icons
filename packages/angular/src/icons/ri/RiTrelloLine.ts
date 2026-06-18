import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-trello-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTrelloLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 5V19H19V5H5ZM5 3H19C20.11 3 21 3.9 21 5V19C21 20.1 20.11 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM8 7H10C10.55 7 11 7.45 11 8V16C11 16.55 10.55 17 10 17H8C7.45 17 7 16.55 7 16V8C7 7.45 7.45 7 8 7ZM14 7H16C16.55 7 17 7.45 17 8V12C17 12.55 16.55 13 16 13H14C13.45 13 13 12.55 13 12V8C13 7.45 13.45 7 14 7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTrelloLine;
