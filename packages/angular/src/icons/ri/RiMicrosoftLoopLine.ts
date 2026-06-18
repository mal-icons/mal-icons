import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-microsoft-loop-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMicrosoftLoopLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20H7.69C8.59 19.06 9.22 17.85 9.42 16.5H12C14.49 16.5 16.5 14.49 16.5 12C16.5 9.51 14.49 7.5 12 7.5C9.51 7.5 7.5 9.51 7.5 12V15.5C7.5 17.64 6 19.43 4 19.89V12C4 7.58 7.58 4 12 4ZM12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12V22H12ZM9.5 14.5V12C9.5 10.62 10.62 9.5 12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5H9.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMicrosoftLoopLine;
