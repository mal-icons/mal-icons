import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-terminal-powershell",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscTerminalPowershell {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.82 8.88L4.46 10.88C4.37 10.96 4.25 11 4.14 11C4 11 3.86 10.94 3.76 10.82C3.58 10.61 3.6 10.3 3.82 10.12L5.8 8.44L4.48 6.82C4.3 6.6 4.33 6.29 4.55 6.11C4.76 5.94 5.08 5.97 5.25 6.18L6.89 8.18C7.06 8.39 7.03 8.71 6.82 8.88ZM11 10H7.5C7.22 10 7 10.22 7 10.5C7 10.78 7.22 11 7.5 11H11C11.28 11 11.5 10.78 11.5 10.5C11.5 10.22 11.28 10 11 10ZM15.78 3.97L14.05 12.97C13.83 14.15 12.8 15 11.6 15H2.67C1.92 15 1.22 14.67 0.74 14.09C0.27 13.52 0.07 12.76 0.22 12.03L1.95 3.03C2.17 1.85 3.2 1 4.4 1H13.33C14.08 1 14.78 1.33 15.26 1.91C15.73 2.49 15.93 3.24 15.78 3.97V3.97ZM14.49 2.55C14.2 2.2 13.78 2 13.33 2H4.4C3.68 2 3.06 2.51 2.93 3.22L1.2 12.22C1.11 12.66 1.23 13.11 1.51 13.46C1.8 13.8 2.22 14 2.67 14H11.6C12.32 14 12.94 13.49 13.07 12.78L14.8 3.78C14.89 3.34 14.77 2.89 14.49 2.55Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscTerminalPowershell;
