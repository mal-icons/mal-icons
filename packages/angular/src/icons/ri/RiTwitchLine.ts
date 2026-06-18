import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-twitch-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTwitchLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.3 3H21V14.7L16.3 19.4H12.4L9.9 21.8H7V19.4H3V6.2L4.3 3ZM5 17.4H9V19.8H9.1L11.6 17.4H15.47L19 13.87V5H5V17.4ZM15 8H17V12.7H15V8ZM15 8H17V12.7H15V8ZM10 8H12V12.7H10V8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTwitchLine;
