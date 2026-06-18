import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-double-quotes-l",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDoubleQuotesL {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.58 17.32C3.55 16.23 3 15 3 13.01C3 9.51 5.46 6.37 9.03 4.82L9.92 6.2C6.59 8.01 5.94 10.35 5.68 11.82C6.21 11.54 6.92 11.45 7.6 11.51C9.41 11.68 10.83 13.16 10.83 15C10.83 16.93 9.26 18.5 7.33 18.5C6.26 18.5 5.23 18.01 4.58 17.32ZM14.58 17.32C13.55 16.23 13 15 13 13.01C13 9.51 15.46 6.37 19.03 4.82L19.92 6.2C16.59 8.01 15.94 10.35 15.68 11.82C16.21 11.54 16.92 11.45 17.6 11.51C19.41 11.68 20.83 13.16 20.83 15C20.83 16.93 19.26 18.5 17.33 18.5C16.26 18.5 15.23 18.01 14.58 17.32Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDoubleQuotesL;
