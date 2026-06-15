import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-mail-read",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscMailRead {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.84 3.64L8.42 1.14C8.15 1.02 7.85 1.02 7.58 1.14L2.16 3.64C1.46 3.97 1 4.68 1 5.46V11C1 12.1 1.9 13 3 13H13C14.1 13 15 12.1 15 11V5.46C15 4.68 14.54 3.97 13.84 3.64ZM2.58 4.55L8 2.05L13.42 4.55C13.7 4.68 13.9 4.93 13.97 5.22L8 8.43L2.03 5.22C2.1 4.93 2.3 4.68 2.58 4.55ZM13 12H3C2.45 12 2 11.55 2 11V6.34L7.76 9.44C7.84 9.48 7.92 9.5 8 9.5C8.08 9.5 8.16 9.48 8.24 9.44L14 6.34V11C14 11.55 13.55 12 13 12Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscMailRead;
