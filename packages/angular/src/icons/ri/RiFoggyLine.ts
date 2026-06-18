import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-foggy-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFoggyLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.58 13.01C1.21 12.08 1 11.06 1 10C1 5.58 4.58 2 9 2C12.39 2 15.3 4.11 16.46 7.1C16.8 7.03 17.14 7 17.5 7C20.54 7 23 9.46 23 12.5C23 12.67 22.99 12.84 22.98 13.01H20.96C20.99 12.84 21 12.67 21 12.5C21 10.57 19.43 9 17.5 9C16.52 9 15.64 9.4 15 10.05C15 10.03 15 10.02 15 10C15 6.69 12.31 4 9 4C5.69 4 3 6.69 3 10C3 11.1 3.29 12.12 3.81 13.01H1.58ZM4 19H21V21H4V19ZM2 15H23V17H2V15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFoggyLine;
