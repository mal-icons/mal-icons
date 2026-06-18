import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-file-shield-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFileShieldLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 8V4H5V20H19V9H16V13.62C16 14.46 15.55 15.25 14.81 15.72L12 17.5L9.19 15.72C8.45 15.25 8 14.46 8 13.62V8H14ZM21 8V20.99C21 21.55 20.56 22 20.01 22H3.99C3.44 22 3 21.56 3 21.01V2.99C3 2.46 3.45 2 4 2H15L21 8ZM10 13.62C10 13.77 10.09 13.92 10.26 14.03L12 15.13L13.74 14.03C13.91 13.92 14 13.77 14 13.62V10H10V13.62Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFileShieldLine;
