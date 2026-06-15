import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-screen-normal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscScreenNormal {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 4C11 4.55 11.45 5 12 5H13.5C13.78 5 14 5.22 14 5.5C14 5.78 13.78 6 13.5 6H12C10.9 6 10 5.1 10 4V2.5C10 2.22 10.22 2 10.5 2C10.78 2 11 2.22 11 2.5V4ZM11 12C11 11.45 11.45 11 12 11H13.5C13.78 11 14 10.78 14 10.5C14 10.22 13.78 10 13.5 10H12C10.9 10 10 10.9 10 12V13.5C10 13.78 10.22 14 10.5 14C10.78 14 11 13.78 11 13.5V12ZM4 11C4.55 11 5 11.45 5 12V13.5C5 13.78 5.22 14 5.5 14C5.78 14 6 13.78 6 13.5V12C6 10.9 5.1 10 4 10H2.5C2.22 10 2 10.22 2 10.5C2 10.78 2.22 11 2.5 11H4ZM5 4C5 4.55 4.55 5 4 5H2.5C2.22 5 2 5.22 2 5.5C2 5.78 2.22 6 2.5 6H4C5.1 6 6 5.1 6 4V2.5C6 2.22 5.78 2 5.5 2C5.22 2 5 2.22 5 2.5V4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscScreenNormal;
