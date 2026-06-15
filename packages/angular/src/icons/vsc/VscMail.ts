import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-mail",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscMail {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 3H3C1.9 3 1 3.9 1 5V11C1 12.1 1.9 13 3 13H13C14.1 13 15 12.1 15 11V5C15 3.9 14.1 3 13 3ZM3 4H13C13.55 4 14 4.45 14 5V5.2L8 8.43L2 5.2V5C2 4.45 2.45 4 3 4ZM13 12H3C2.45 12 2 11.55 2 11V6.34L7.76 9.44C7.84 9.48 7.92 9.5 8 9.5C8.08 9.5 8.16 9.48 8.24 9.44L14 6.34V11C14 11.55 13.55 12 13 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscMail;
