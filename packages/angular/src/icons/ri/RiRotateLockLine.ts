import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-rotate-lock-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRotateLockLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C17.52 2 22 6.48 22 12C22 14.14 21.33 16.12 20.19 17.74L17 12H20C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C14.15 20 16.1 19.15 17.54 17.77L18.54 19.57C16.78 21.08 14.5 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 7C13.66 7 15 8.34 15 10V11H16V16H8V11H9V10C9 8.34 10.34 7 12 7ZM14 13H10V14H14V13ZM12 9C11.49 9 11.06 9.39 11.01 9.88L11 10V11H13V10C13 9.49 12.61 9.06 12.12 9.01L12 9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRotateLockLine;
